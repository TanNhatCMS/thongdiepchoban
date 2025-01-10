import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

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
        promptEvent.prompt();
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
        <Snackbar
          autoHideDuration={5000}
          variant="solid"
          color="primary"
          size="lg"
          invertedColors
          open={show}
          onClose={() => setShow(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          sx={(theme) => ({
            background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
            maxWidth: 360,
          })}
        >
          <div>
            <Typography level="title-lg">Thông báo!</Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Thêm ứng dụng vào màn hình chính để trải nghiệm nhanh hơn!
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="solid" color="primary" onClick={() => handleInstall()}>
                Cài đặt
              </Button>
              <Button
                variant="outlined"
                  color="primary"
                onClick={() => setShow(false)}
              >
                Hủy
              </Button>
            </Stack>
          </div>
        </Snackbar>
      )}
    </>
  )
};

export default InstallPrompt;
