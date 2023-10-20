## Description:

Client library for EasySlip

## Features:

<ul>
  <li>Verify Slip</li>
</ul>

## Usage:

##### Verify Slip:

```typescript
const slip = new EasySlip('TEST')
const data = await slip.verifyByPayload('TEST')

console.log(data) // Out put same as https://developer.easyslip.com/document
```

```typescript
const slip = new EasySlip('TEST')
const data = await slip.verifyByImage('slip.jpg')

console.log(data) // Out put same as https://developer.easyslip.com/document
```
