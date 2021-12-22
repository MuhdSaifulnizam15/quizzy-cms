import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowIosUpwardOutline from '@iconify/icons-eva/arrow-ios-upward-outline';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 999 }}>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          component={Icon}
          icon={arrowIosUpwardOutline}
          sx={{ width: 50, height: 50, backgroundColor: '#ABABAB', borderRadius: 10, opacity: 0.7 }}
        />
      )}
    </div>
  );
}
