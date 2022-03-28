import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logo_light.png";
import './Navbar.css'
import Button from '../Button'
import { default as Sun } from '../../assets/svg/Sun'
import { default as Moon } from '../../assets/svg/Moon'
import { default as ZhIcon } from '../../assets/svg/ChineseIcon'
import { default as EnIcon } from '../../assets/svg/EnglishIcon'

import { useTranslation, Trans } from 'react-i18next'
import useTheme from '../../hooks/useTheme'

function NavBar() {

  //暗黑高亮模式的切换
  const { value: isDarkMode, toggle: toggleMode } = useTheme()
  const changeMode = () => {
    toggleMode();
    updateExpanded(false);
  }

  //切换语言
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const changeLanguage = () => {
    if (language.indexOf('en') !== -1) {
      i18n.changeLanguage('zh-CN')
    } else if (language.indexOf('zh') !== -1) {
      i18n.changeLanguage('en')
    }
    updateExpanded(false)
  }
  // const languages = ['en', 'zh'];


  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const { pathname } = useLocation();

  if (pathname === '/') return null

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Brand href="/" className="d-flex">
          <img src={isDarkMode ? logoDark : logoLight} className="img-fluid logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey="#about">
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                {t('About')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/goods" onClick={() => updateExpanded(false)}>
                {t('Goods')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/message" onClick={() => updateExpanded(false)}>
                {t('Message')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Button className="button-theme" size="xsmall" Click={changeMode}>
                {isDarkMode ? <Sun /> : <Moon />}
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Button className="button-theme" size="xsmall" Click={changeLanguage}>
                {language.indexOf('en') !== -1 ? (
                  <ZhIcon />
                ) : (
                    <EnIcon />
                  )}
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
