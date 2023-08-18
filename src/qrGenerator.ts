import QRCode from 'qrcode';

/**
 * @name generateQR
 * @description Generates a QR code from the given data
 * @param data<string> - The data to be encoded in the QR code
 * @returns {Promise<string>} 
 * @summary
 * function toDataURL(text: string | QRCode.QRCodeSegment[], options?: QRCode.QRCodeToDataURLOptions | undefined): Promise<string> (+5 overloads)
 * Returns a Data URI containing a representation of the QR Code image.
 */
export const generateQR = async (data: string): Promise<string> => {
    try {
        const u = new URL(data);
        let url = await QRCode.toDataURL(u.href);
        return url;
    } catch (err) {
        console.log(err);
        return `Error: ${err}`
    }
}
