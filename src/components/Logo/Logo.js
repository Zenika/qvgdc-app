import { ReactComponent as LogoQVGDC } from 'assets/img/logo.svg';
import React from 'react';

import styles from './Logo.module.css';

function Logo(props) {
  return <LogoQVGDC className={styles.logo} />;
}

export default Logo;
