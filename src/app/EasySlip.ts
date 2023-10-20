import axios, { AxiosError } from 'axios'
import FormData from 'form-data'
import fs from 'fs'

import EasySlipVerifyError from '../exceptions/EasySlipVerifyError'
import type { ErrorResponse, SuccessResponse } from '../types/Response'

/**
 * EasySlip class represents a client for verifying data using the EasySlip API.
 */
class EasySlip {
    private key: string
    private endpoint: string

    /**
     * Constructs a new EasySlip client with the provided API key.
     *
     * @param {string} key - The API key for authentication.
     */
    constructor(key: string) {
        this.key = key
        this.endpoint = 'https://developer.easyslip.com/api/v1/verify'
    }

    /**
     * Verifies the slip by payload using the EasySlip API.
     *
     * @param {string} payload - The data payload to be verified.
     * @returns {Promise<SuccessResponse>} - A promise that resolves to the verification result.
     * @throws {EasySlipVerifyError} - If the verification request fails.
     */
    public async verifyByPayload(payload: string): Promise<SuccessResponse> {
        try {
            const { data } = await axios.get<SuccessResponse>(this.endpoint, {
                params: {
                    payload,
                },
                headers: {
                    Authorization: `Bearer ${this.key}`,
                },
            })

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response)
                    throw new EasySlipVerifyError(
                        `Request failed with status code: ${error.response.data.status}`,
                        error.response.data as ErrorResponse,
                    )
            }

            throw error
        }
    }

    /**
     * Verifies the slip by image using the EasySlip API.
     *
     * @param {string} imagePath - The image to be verified.
     * @returns {Promise<SuccessResponse>} - A promise that resolves to the verification result.
     * @throws {EasySlipVerifyError} - If the verification request fails.
     */
    public async verifyByImage(imagePath: string): Promise<SuccessResponse> {
        try {
            const formData = new FormData()
            formData.append('file', fs.createReadStream(imagePath))

            const { data } = await axios.post<SuccessResponse>(this.endpoint, formData, {
                headers: {
                    Authorization: `Bearer ${this.key}`,
                },
            })

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response)
                    throw new EasySlipVerifyError(
                        `Request failed with status code: ${error.response.data.status}`,
                        error.response.data as ErrorResponse,
                    )
            }

            throw error
        }
    }
}

export default EasySlip
