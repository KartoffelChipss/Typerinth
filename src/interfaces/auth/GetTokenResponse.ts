export interface GetTokenResponse {
    /** The access token you can use to access the API */
    access_token: string;
    /** Currently only `Bearer` */
    token_type: string;
    /** The amount of seconds until the access token expires */
    expires_in: number;
}
