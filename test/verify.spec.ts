import { expect } from 'chai'

import { EasySlip } from '../src'

describe('Verify', () => {
    it('Should success', async () => {
        const slip = new EasySlip('TEST')
        const data = await slip.verify('TEST')

        expect(data).to.contains({
            status: 200,
        })
    })
})
