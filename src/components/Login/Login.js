import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Logo from 'components/Logo/Logo';
import React from 'react';

import styles from './Login.module.scss';

function Login(props) {
  return (
    <DefaultLayout>
      <div className={styles.card}>
        <Logo />
        <h1 className={`h3 text-center ${styles.title}`}>Game master</h1>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField type="email" required label="Login" margin="normal" variant="outlined" />
          <TextField type="password" required label="Mot de passe" margin="normal" variant="outlined" />
          <br />
          <br />
          <Button variant="contained" color="primary">
            Se connecter
          </Button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Login;
