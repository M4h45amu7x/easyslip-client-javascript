import { expect } from 'chai'

import { EasySlip } from '../src'

describe('Verify By Payload', () => {
    it('Should success', async () => {
        const slip = new EasySlip('TEST')
        const data = await slip.verifyByPayload('TEST')

        expect(data).to.contains({
            status: 200,
        })
    })
})

describe('Verify By Image', () => {
    it('Should success', async () => {
        const slip = new EasySlip('TEST')
        const data = await slip.verifyByImage('test/images/qrcode.jpeg')

        expect(data).to.contains({
            status: 200,
        })
    })
})
