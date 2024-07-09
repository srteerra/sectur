import { useEffect, useState } from 'react';

const useWindowSize = (
  tabletBreakPoint = 744,
  desktopBreakpoint = 1353,
) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Función para obtener el tamaño inicial de la ventana
    const handleInitialResize = () => {
      handleResize();
      window.removeEventListener('resize', handleInitialResize);
    };

    // Verificar el tamaño inicial de la ventana en la carga de la página
    handleInitialResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowSize.width !== undefined && windowSize.width < tabletBreakPoint;
  const isTablet = windowSize.width !== undefined
    && windowSize.width >= tabletBreakPoint
    && windowSize.width < desktopBreakpoint;
  const isDesktop = windowSize.width !== undefined && windowSize.width >= desktopBreakpoint;

  return {
    isMobile, isTablet, isDesktop,
  };
};

export default useWindowSize;
