import React from 'react';
import Header from './components/headers/index';
import styles from './App.module.scss';

function App() {
  console.log('styles', styles)
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}></Header>
    </div>
  );
}

export default App;
