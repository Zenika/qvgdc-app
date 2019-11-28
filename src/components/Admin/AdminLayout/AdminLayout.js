import Header from 'components/Header/Header';
import Logo from 'components/Logo/Logo';
import React from 'react';

import styles from './AdminLayout.module.scss';

const AdminLayout = (props) => {
  return (
    <>
      <Header>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.title}>
          <h1>Game Master</h1>
        </div>
      </Header>
      <div>
        <div className="u-wrapper">{props.children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
