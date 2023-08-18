# qr-auth QRCode and JWT Utility Functions

Welcome to the documentation for the QRCode and JWT utility functions! This guide will provide you with a detailed overview of the functions `generateQR`, `createToken`, and `verifyToken`. These functions can greatly enhance your development process when working with QR codes and JSON Web Tokens (JWTs). Feel free to integrate them seamlessly into your projects for a more efficient and secure experience.

## Table of Contents

- [Introduction](#introduction)
- [Function: generateQR](#function-generateqr)
- [Function: createToken](#function-createtoken)
- [Function: verifyToken](#function-verifytoken)

## Introduction

In this section, you'll find a brief introduction to the utility functions, their purpose, and the benefits they bring to your development workflow.

## Function: generateQR

### generateQR Description

The `generateQR` function allows you to easily generate a QR code from the provided data. It is particularly useful when you need to encode URLs or other data into QR codes.

### Parameters

- `data` (string): The data to be encoded in the QR code.

### Returns

- A promise that resolves to a Data URI containing the representation of the QR code image.

### Example Usage

```javascript
import QRCode from 'qrcode';

const qrCodeData = 'https://www.example.com';
const qrCodeDataURL = await generateQR(qrCodeData);
console.log(qrCodeDataURL);
```

## Function: createToken

### Description

The `createToken` function simplifies the process of creating JWT tokens with customizable payload, secret, and expiration time.

### createToken Parameters

- `payload` (any): The payload to be included in the JWT.
- `secret` (string): The secret key to sign the JWT.
- `expiresIn` (string, optional): The expiration time for the token (default: '1h').

### createToken Returns

- A JWT token as a string.

### createToken Example Usage

```javascript
const userPayload = { userId: 123, role: 'admin' };
const secretKey = 'your-secret-key';
const jwtToken = createToken(userPayload, secretKey, '2h');
console.log(jwtToken);
```

## Function: verifyToken

### verifyToken Description

The `verifyToken` function allows you to verify and decode a JWT token, retrieving the original payload.

### verifyToken Parameters

- `token` (string): The JWT token to be verified.
- `secret` (string): The secret key or public key used for verification.

### verifyToken Returns

- The decoded payload of the JWT token.

### verifyToken Example Usage

```javascript
const jwtTokenToVerify = 'your-jwt-token';
const secretKey = 'your-secret-key';
const decodedPayload = verifyToken(jwtTokenToVerify, secretKey);
console.log(decodedPayload);
```

## Conclusion

Happy coding and may your projects be efficient and secure!