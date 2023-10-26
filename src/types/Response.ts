interface Account {
    name: {
        th?: string
        en?: string
    }
    bank?: {
        type: string
        account: string
    }
    proxy?: {
        type: string
        account: string
    }
}

interface Bank {
    id: string
    name?: string
    short?: string
}

interface SuccessResponse {
    status: number
    data: {
        payload: string
        transRef: string
        date: string
        countryCode: string
        amount: {
            amount: number
            local: {
                amount?: number
                currency?: string
            }
        }
        fee: number
        ref1: string
        ref2: string
        ref3: string
        sender: {
            bank: Bank
            account: Account
        }
        receiver: {
            bank: Bank
            account: Account
            merchantId?: string
        }
    }
}

interface ErrorResponse {
    status: number
    message:
        | 'invalid_payload'
        | 'invalid_image'
        | 'image_size_too_large'
        | 'unauthorized'
        | 'access_denied'
        | 'account_not_verified'
        | 'application_expired'
        | 'application_deactivated'
        | 'quota_exceeded'
        | 'slip_not_found'
        | 'qrcode_not_found'
        | 'method_not_allowed'
        | 'too_many_requests'
        | 'server_error'
        | 'api_server_error'
}

export { SuccessResponse, ErrorResponse }
