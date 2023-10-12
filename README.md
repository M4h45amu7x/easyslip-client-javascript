## Description:

Client library for EasySlip

## Features:

<ul>
  <li>Verify</li>
</ul>

## Usage:

##### Verify:

```typescript
const slip = new EasySlip(key)
const data = await slip.verify(payload)

console.log(data) // Out put same as https://developer.easyslip.com/document
```
