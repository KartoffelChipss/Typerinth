# Modrinth OAuth Example with Typerinth and Express

This project demonstrates how to implement a secure OAuth 2.0 login flow using [Modrinth's OAuth API](https://docs.modrinth.com/guide/oauth/) via the [`Typerinth`](https://www.npmjs.com/package/typerinth) library, Express, and express-session.

---

## 🚀 What This Does

- Redirects users to Modrinth's authorization page
- Validates the OAuth `state` to prevent CSRF
- Exchanges an authorization code for an access token
- Uses the token to retrieve the authenticated user's Modrinth account info

---

## 🧰 Technologies Used

- [Typerinth](https://www.npmjs.com/package/typerinth)
- [Express](https://expressjs.com/)
- [express-session](https://www.npmjs.com/package/express-session)
- [dotenv](https://www.npmjs.com/package/dotenv)
- TypeScript

---

## 📦 Setup

### 1. Install the dependencies

Install the dependencies using a package manager of your choice.

### 2. Configure environment variables

Create a .env file:

```bash
CLIENT_ID=your-modrinth-client-id
CLIENT_SECRET=your-modrinth-client-secret
REDIRECT_URI=http://localhost:3000/callback
SESSION_SECRET=super-secret-key
```

## ⚠️ Disclaimer

This is a **simplified example** intended for educational and demonstration purposes. It does not include advanced features like token refresh, error recovery, persistent user sessions, or HTTPS enforcement.

**Use at your own risk.**

## 📄 License

You can find the full license [here](https://github.com/KartoffelChipss/Typerinth/blob/main/LICENSE)
