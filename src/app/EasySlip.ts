import axios, { AxiosError } from 'axios'
import FormData from 'form-data'
import fs from 'fs'

import EasySlipVerifyError from '../exceptions/EasySlipVerifyError'
import type { ErrorResponse, MeResponse, VerifyResponse } from '../types/Response'

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
        this.endpoint = 'https://developer.easyslip.com/api/v1'
    }

    /**
     * Verifies the slip by payload using the EasySlip API.
     *
     * @param {string} payload - The data payload to be verified.
     * @returns {Promise<VerifyResponse>} - A promise that resolves to the verification result.
     * @throws {EasySlipVerifyError} - If the verification request fails.
     */
    public async verifyByPayload(payload: string): Promise<VerifyResponse> {
        try {
            const { data } = await axios.get<VerifyResponse>(`${this.endpoint}/verify`, {
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
     * @returns {Promise<VerifyResponse>} - A promise that resolves to the verification result.
     * @throws {EasySlipVerifyError} - If the verification request fails.
     */
    public async verifyByImage(imagePath: string): Promise<VerifyResponse> {
        try {
            const formData = new FormData()
            formData.append('file', fs.createReadStream(imagePath))

            const { data } = await axios.post<VerifyResponse>(`${this.endpoint}/verify`, formData, {
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
     * Get the application information using the EasySlip API.
     *
     * @returns {Promise<MeResponse>} - A promise that resolves to the application information result.
     * @throws {EasySlipVerifyError} - If the application information request fails.
     */
    public async me(): Promise<MeResponse> {
        try {
            const { data } = await axios.get<MeResponse>(`${this.endpoint}/me`, {
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
