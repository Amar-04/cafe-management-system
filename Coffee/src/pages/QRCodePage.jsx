import React, { useEffect } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const QRCodePage = () => {
  useEffect(() => {
    const generateToken = () => {
      const token = Math.floor(1000 + Math.random() * 9000).toString();

      axios.post('/api/generate-token', { token })
        .then(() => {
          localStorage.setItem('qrToken', token);
        })
        .catch(err => console.error(err));
    };

    generateToken();
  }, []);

  const token = localStorage.getItem('qrToken');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F8E3B6]">
      <QRCode value={token} size={256} />
    </div>
  );
};

export default QRCodePage;
