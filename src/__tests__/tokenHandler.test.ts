import { createToken, verifyToken } from '../tokenHandler';

describe('Token Handler', () => {

    const secret = 'testSecret';

    test('create and verify token', () => {
        const payload = { userId: '12345' };
        const token = createToken(payload, secret);
        const decoded = verifyToken(token, secret);
        
        expect(decoded.userId).toBe(payload.userId);
    });

    // Add more tests as needed...

});
