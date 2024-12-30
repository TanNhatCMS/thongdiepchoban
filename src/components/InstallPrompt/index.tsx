import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      const choiceResult = await (deferredPrompt as any).userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('Người dùng đã cài đặt ứng dụng.');
      } else {
        console.log('Người dùng đã từ chối cài đặt.');
      }
      setDeferredPrompt(null); // Reset prompt
    }
    setShow(false); // Ẩn thông báo
  };

  return (
    <>
      {show && (
        <Alert variant="info" className="fixed-bottom text-center">
          <p>Thêm ứng dụng vào màn hình chính để trải nghiệm nhanh hơn!</p>
          <div>
            <Button variant="primary" onClick={handleInstall}>
              Cài đặt
            </Button>{' '}
            <Button variant="secondary" onClick={() => setShow(false)}>
              Hủy
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
};

export default InstallPrompt;
