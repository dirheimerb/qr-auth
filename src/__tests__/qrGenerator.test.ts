import { generateQR } from '../qrGenerator';

describe('QR Generator', () => {

    test('generate QR code', async () => {
        const data = 'testData';
        const qrUrl = await generateQR(data);
        
        expect(qrUrl).toContain('data:image/png;base64');
    });

    // Add more tests as needed...

});
