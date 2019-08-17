import React from 'react';
import Header from './components/headers/index';
import styles from './App.module.scss';
import logo from './images/logo.png';

function App() {
  console.log('styles', styles)
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.image}/>
      <Header className={styles.header}></Header> 
    </div>
  );
}

export default App;
