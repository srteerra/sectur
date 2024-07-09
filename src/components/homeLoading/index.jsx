import React from 'react';
import Logo from '../../assets/img/header/logo.png';
import './styles.css';

const HomeLoading = () => {
  return (
    <div className="home-loading-ctn">
        <img src={Logo} alt="visitmexico" className="home-loading" />
    </div>
  );
};

export default HomeLoading;