import express from 'express';
import session from 'express-session';
import { Modrinth, AuthScope } from 'typerinth';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SESSION_SECRET } = process.env;

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !SESSION_SECRET) {
    throw new Error('Missing environment variables.');
}

const USER_AGENT = 'MyApp/1.0'; // Replace with your app's user agent

const modrinth = new Modrinth({
    userAgent: USER_AGENT,
});

// Session setup
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // use `cookie: { secure: true, sameSite: 'lax' }` in production behind HTTPS
    })
);

declare module 'express-session' {
    interface SessionData {
        oauthState?: string;
    }
}

// Login Route
app.get('/login', (req, res) => {
    const state = crypto.randomUUID(); // Generate unique state
    req.session.oauthState = state;

    const authUrl = modrinth.generateAuthorizationUrl(
        CLIENT_ID,
        REDIRECT_URI,
        [AuthScope.UserRead, AuthScope.PayoutsRead],
        state
    );

    res.redirect(authUrl);
});

// Callback Route
app.get('/callback', async (req, res) => {
    const code = req.query.code as string;
    const state = req.query.state as string;
    const storedState = req.session.oauthState;

    if (!state || state !== storedState) {
        res.status(400).send('Invalid or missing state parameter.');
        return;
    }

    if (!code) {
        res.status(400).send('Missing code parameter.');
        return;
    }

    try {
        const token = await modrinth.getToken(
            code,
            CLIENT_ID,
            REDIRECT_URI,
            CLIENT_SECRET
        );

        // Use the token to make API requests
        const user = await modrinth.getAuthUser(token.access_token);
        res.json({
            message: 'Successfully authenticated with Modrinth!',
            user,
        });
    } catch (error) {
        console.error('OAuth callback error:', error);
        res.status(500).send('Failed to authenticate.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
