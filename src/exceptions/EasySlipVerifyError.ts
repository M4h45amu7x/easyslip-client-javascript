import type { ErrorResponse } from '../types/Response'

/**
 * EasySlipVerifyError represents an error that occurs during the verification process using EasySlip.
 */
class EasySlipVerifyError extends Error {
    public response: ErrorResponse

    /**
     * Constructs a new EasySlipVerifyError with the specified error message and response.
     *
     * @param {string} message - The error message.
     * @param {ErrorResponse} response - The error response from the EasySlip API.
     */
    constructor(message: string, response: ErrorResponse) {
        super(message)
        this.response = response
    }
}

export default EasySlipVerifyError
