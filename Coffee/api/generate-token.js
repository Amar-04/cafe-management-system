export default function handler(req, res) {
    if (req.method === 'POST') {
      const { token } = req.body;
      global.qrToken = token;  // Storing in global variable
      res.status(200).end();
    } else {
      res.status(405).end();  // Method Not Allowed
    }
  }
  