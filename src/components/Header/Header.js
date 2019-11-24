import Logo from 'components/Logo/Logo';
import NetworkStatus from 'components/NetworkStatus/NetworkStatus';
import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`u-wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.title}>
          <h1>NightClazz GraphQL</h1>
          <p>12 joueurs connectés</p>
        </div>
        <NetworkStatus online={true} />
      </div>
    </header>
  );
}

export default Header;
