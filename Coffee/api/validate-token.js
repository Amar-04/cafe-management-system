export default function handler(req, res) {
    if (req.method === 'POST') {
      const { token } = req.body;
      if (token === global.qrToken) {
        global.qrToken = ''; // Reset the token after validation
        res.status(200).json({ valid: true });
      } else {
        res.status(401).json({ valid: false });
      }
    } else {
      res.status(405).end();  // Method Not Allowed
    }
  }
  