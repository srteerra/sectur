import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../header';
import Rss from '../Rss';
import ScrollToTop from '../scrollToTop';
import Footer from '../footer';
import './styles.css';
import HeaderHorizontal from '../headerHorizontal';
import NavigationMenu from '../headerHorizontal';
import HeaderNuevo from '../headerNuevo';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <HeaderNuevo/>
      <Rss />
      <ScrollToTop/>
      <ParallaxProvider>
        <div className="layout-sections">
          {children}
        </div>
      </ParallaxProvider>
      <Footer />
    </div>
  );
};

export default Layout;