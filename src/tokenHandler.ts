import jwt from 'jsonwebtoken';

/**
 * @name createToken
 * @version 1.0.0
 * @description Creates a JWT token from the given payload
 * @param payload - <any>
 * @param secret - <string>
 * @param expiresIn - <string>
 * @returns {string}
 * @summary
 * function sign(payload: string | object | Buffer, secretOrPrivateKey: jwt.Secret, options?: jwt.SignOptions | undefined): string (+4 overloads)
 * Synchronously sign the given payload into a JSON Web Token string payload - Payload to sign, could be an literal, buffer or string secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA. [options] - Options for the signature returns - The JSON Web Token string
 */
export const createToken = (payload: any, secret: string, expiresIn: string = '1h'): string => {
    return jwt.sign(payload, secret, { expiresIn });
};

/**
 * @name verifyToken
 * @version 1.0.0
 * @description Verifies the given token and returns the decoded payload
 * @param token<string>
 * @param secret<string>
 * @returns {any}
 * @summary
 * function verify(token: string, secretOrPublicKey: jwt.Secret, options?: (
 *          jwt.VerifyOptions & {    complete?: false | undefined;
 * }) | undefined): string 
 * | jwt.JwtPayload (+6 overloads)
 * Synchronously verify given token using a secret or a public key to get a decoded token token - JWT string to verify secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA. [options] - Options for the verification returns - The decoded token.
 */
export const verifyToken = (token: string, secret: string): any => {
    return jwt.verify(token, secret);
}
