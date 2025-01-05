import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
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
      const promptEvent = deferredPrompt as Event & { prompt: () => void };

      if (promptEvent.prompt) {
        promptEvent.prompt(); // Call the prompt() method here
        setDeferredPrompt(null);
        setShow(false);
      } else {
        console.error('Prompt method is not available.');
      }
    }
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
