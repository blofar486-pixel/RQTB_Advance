// Serverless function jo license key secure tareeqe se check karega
export default function handler(req, res) {
    // CORS headers taake frontend se request aa sake
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { licenseKey } = req.body;

    // 🔴 APNI SECRET LICENSE KEY YAHAAN SET KAREIN
    const VALID_LICENSE_KEY = "RIZII-BOSS-99X7"; 

    if (licenseKey === VALID_LICENSE_KEY) {
        return res.status(200).json({ success: true, message: "Access Granted!" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid License Key!" });
    }
}
