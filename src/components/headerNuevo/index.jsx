import React, { useState, useEffect, useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderToString } from 'react-dom/server';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Context } from '../../Context';
import { useNavigate } from 'react-router-dom';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import useWindowSize from '../../utils/useWindowSize';
import listSecondaryEs from '../../assets/data/header/es/listSecondary.json';
import listSecondaryEn from '../../assets/data/header/en/listSecondary.json';
import listSecondaryFr from '../../assets/data/header/fr/listSecondary.json';
import listSecondaryDe from '../../assets/data/header/de/listSecondary.json';
import listSecondaryPt from '../../assets/data/header/pt/listSecondary.json';
import listSecondaryIt from '../../assets/data/header/it/listSecondary.json';
import listSecondaryJp from '../../assets/data/header/jp/listSecondary.json';
import listSecondaryCn from '../../assets/data/header/cn/listSecondary.json';
import listPrimaryEs from '../../assets/data/header/es/listPrimary.json';
import listPrimaryEn from '../../assets/data/header/en/listPrimary.json';
import listPrimaryFr from '../../assets/data/header/fr/listPrimary.json';
import listPrimaryDe from '../../assets/data/header/de/listPrimary.json';
import listPrimaryPt from '../../assets/data/header/pt/listPrimary.json';
import listPrimaryIt from '../../assets/data/header/it/listPrimary.json';
import listPrimaryJp from '../../assets/data/header/jp/listPrimary.json';
import listPrimaryCn from '../../assets/data/header/cn/listPrimary.json';
import listLanguages from '../../assets/data/header/listLanguages.json';
import optionsEs from '../../assets/data/header/es/listSearch.json';
import optionsEn from '../../assets/data/header/en/listSearch.json';
import optionsFr from '../../assets/data/header/fr/listSearch.json';
import optionsDe from '../../assets/data/header/de/listSearch.json';
import optionsPt from '../../assets/data/header/pt/listSearch.json';
import optionsIt from '../../assets/data/header/it/listSearch.json';
import optionsJp from '../../assets/data/header/jp/listSearch.json';
import optionsCn from '../../assets/data/header/cn/listSearch.json';

import Logo from '../../assets/img/header/logo.png';
import MenuOpenImg from '../../assets/img/header/menu-open.svg';
import './styles.css';

import flag from '../../assets/img/header/ES.svg';

const HeaderNuevo = () => {
  const windowsSize = useWindowSize();
  const { isLanguage, selectedLanguage } = useContext(Context);
  const [listSecondary, setListSecondary] = useState(listSecondaryEs);
  const [listPrimary, setListPrimary] = useState(listPrimaryEs);  
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState();
  const [options, setOptions] = useState(optionsEs);
  const [menuOpen, setMenuOpen] = useState(null);
  const [hideShow, setHideShow] = useState('menu-none');
  const [showSubmenuPrimary, setShowSubmenuPrimary] = useState(false);
  const [showSubmenuSecondary, setShowSubmenuSecondary] = useState(false);
  
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (e) => {
    console.log('e: ', e);
    selectedLanguage(e.value);
  };

  const listMenuSecondary = () => (
    listSecondary?.map(item => (
      item?.dir === "https://visitmexico.com/descargas/"
      ?
      <li className="header-menu-li-secondary" key={item.name}>
        <a href={item.dir} target='_self' rel="noreferrer">
          {item.name}
        </a>
      </li>
      :
      <li className="header-menu-li-secondary" key={item.name}>
        <Link to={item.dir} onClick={handleMenuOpen}>
          {item.name}
        </Link>
      </li>
    ))
  );

  const handleShowSubmenuPrimary = () => {
    setShowSubmenuPrimary(!showSubmenuPrimary);
  };

  const handleShowSubmenuSecondary = () => {
    setShowSubmenuSecondary(!showSubmenuSecondary);
  };

  const listMenuPrimary = () => (
    listPrimary?.map(item => (
      <li className="header-menu-li-primary" key={item.name}>
        {!item?.menu
        ?
          <Link to={item.dir} onClick={handleMenuOpen}>
            {item.name}
          </Link>
        :
          <button onClick={handleShowSubmenuPrimary}>
            {item.name}
          </button>
        }
        {item?.menu &&
          <div className={`header-ctn-submenu-primary ${showSubmenuPrimary ? 'show-menu-primary' : 'hide-menu-primary'}`}>
          {item?.menu?.map(subItem => (
            <div className="header-ctn-submenu-link-primary" key={subItem.name}>
              {!subItem?.menu
              ?
                <Link to={subItem.dir} onClick={handleMenuOpen} className="header-submenu-link-primary">
                  {subItem.name}
                </Link>
              :
                <button onClick={handleShowSubmenuSecondary} className="header-submenu-link-primary">
                  {subItem.name}
                </button>
              }
              {subItem?.menu &&
                <div className={`header-ctn-sub-submenu-link-primary ${showSubmenuSecondary ? 'show-menu-secondary' : 'hide-menu-secondary'}`}>
                {subItem?.menu?.map(subSbuItem => (
                  <div className="header-ctn-submenu-link-primary" key={subSbuItem.name}>
                    <Link to={subSbuItem.dir} onClick={handleMenuOpen} className="header-submenu-link-primary">
                      {subSbuItem.name}
                    </Link>
                  </div>
                ))}
                </div>
              }
              <LazyLoadImage
                src={require(`../../assets/img/header/${subItem.image}`)}
                alt='logo visitmexico'
                className={subItem.claseImage}
              />
            </div>
          ))}
          </div>
        }
      </li>
    ))
  );

  const languages = () => (
    listLanguages?.map(item => (
      <option value={item.value} key={item.name} id={`flag-${item.value}`}>
        {item.name}
      </option>
    ))
  );

  useEffect(() => {
    const languageData = {
      ES: { listSecondary: listSecondaryEs, listPrimary: listPrimaryEs, options: optionsEs },
      EN: { listSecondary: listSecondaryEn, listPrimary: listPrimaryEn, options: optionsEn },
      FR: { listSecondary: listSecondaryFr, listPrimary: listPrimaryFr, options: optionsFr },
      DE: { listSecondary: listSecondaryDe, listPrimary: listPrimaryDe, options: optionsDe },
      PT: { listSecondary: listSecondaryPt, listPrimary: listPrimaryPt, options: optionsPt },
      IT: { listSecondary: listSecondaryIt, listPrimary: listPrimaryIt, options: optionsIt },
      JP: { listSecondary: listSecondaryJp, listPrimary: listPrimaryJp, options: optionsJp },
      CN: { listSecondary: listSecondaryCn, listPrimary: listPrimaryCn, options: optionsCn },
    };

    const selectedLanguageData = languageData[isLanguage] || languageData.ES;

    setListSecondary(selectedLanguageData.listSecondary);
    setListPrimary(selectedLanguageData.listPrimary);
    setOptions(selectedLanguageData.options);
  }, [isLanguage]);

  useEffect(() => {
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  }, [redirectUrl]);

  useEffect(() => {
    if (menuOpen) {
      setHideShow('menu-show');
    } else if (windowsSize?.isMobile) {
      setHideShow('menu-hide');
    }
  }, [menuOpen, windowsSize]);

  const handleSearch = (data) => {
    setRedirectUrl(data);
  };

  return (
    <div className="header-ctn">
      <div className="header-ctn-logo">
        <Link to={'/'} onClick={() => setMenuOpen(false)}>
          <LazyLoadImage
            src={Logo}
            alt='logo visitmexico'
            className="header-logo"
          />
        </Link>
        <button onClick={handleMenuOpen} type='button' className='header-menu-open'>
          <img src={MenuOpenImg} className='header-menu-open-img' alt="menu-open" />
        </button>
      </div>
      <nav className={`header-ctn-menu ${hideShow}`}>
        <div className="header-ctn-menu-ul-secondary">
          <div className='input-buscar'>
            <SelectSearch 
              search={true}
              options={options}
              value=""
              name="search"
              placeholder="🔍 Buscar"
              onChange={(e) => handleSearch(e)}
            />
            <Select
              options={listLanguages}
              className="header-menu-select react-select-container"
              classNamePrefix="react-select"
              onChange={(e) => changeLanguage(e)}
              id="selectLanguage"
              formatOptionLabel={lenguage => (
                <div className="lenguage-option">
                  <img
                    src={require(`../../assets/img/header/${lenguage.value}.svg`)}
                    alt={`lenguage-${lenguage.label}`}
                    className="header-flag-img"  
                  />
                  <span>{lenguage.label}</span>
                </div>
              )}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#a6208c',
                },
              })}
              defaultValue={listLanguages[0]}
            />
          </div>
          <ul className="header-menu-ul-secondary solo-screen">
            {listMenuSecondary()}
          </ul>
        </div>
        <div className="header-ctn-menu-ul-primary solo-mobile">
          <ul className="header-menu-ul-primary">
            <Select
              options={listLanguages}
              className="header-menu-select react-select-container"
              classNamePrefix="react-select"
              onChange={(e) => changeLanguage(e)}
              id="selectLanguage"
              formatOptionLabel={lenguage => (
                <div className="lenguage-option">
                  <img
                    src={require(`../../assets/img/header/${lenguage.value}.svg`)}
                    alt={`lenguage-${lenguage.label}`}
                    className="header-flag-img"  
                  />
                  <span>{lenguage.label}</span>
                </div>
              )}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#a6208c',
                },
              })}
              defaultValue={listLanguages[0]}
            />
            <SelectSearch 
              search={true}
              options={options}
              value=""
              name="search"
              placeholder="🔍 Buscar"
              onChange={(e) => handleSearch(e)}
            />
            {listMenuSecondary()}
          </ul>
        </div>
        <div className="header-ctn-menu-ul-primary">
          <ul className="header-menu-ul-primary">
            {listMenuPrimary()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNuevo;
