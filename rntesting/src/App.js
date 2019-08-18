import React, {Fragment} from 'react';
import Header from './components/headers/index';
import styles from './App.module.scss';
import logo from './images/logo.png';
import Headline from './components/subtitle';

function App() {
  return (
    <Fragment>
      <div className={styles.wrapper}>
      <img src={logo} className={styles.image}/>
      <Header className={styles.header}></Header> 
    </div>
    <Headline header="A headline" desc="Here goes description" />
    </Fragment>
  );
}

export default App;
