/**
 * Represents the payout data of a user.
 */
export default interface PayoutData {
    /**
     * The payout balance available for the user to withdraw
     */
    balance: number;

    /**
     * The wallet that the user has selected
     */
    payout_wallet: string;

    /**
     * The type of the user’s wallet
     */
    payout_wallet_type: string;

    /**
     * The user’s payout address
     */
    payout_address: string;
}
