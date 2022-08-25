// import logo from './logo.svg';
import styles from './App.module.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Info from './components/Information/Information';
import FilledProfile from './components/FilledProfile/FilledProfile';

export default function App() {
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (data) => {
    setData(data);
    setFilled(true);
  };

  return (
    <div className={styles.main}>
      {!filled && <Header text='Creating a profile' />}
      {!filled && <Info onSubmit={handleSubmit} />}
      {filled && <FilledProfile data={data} />}
    </div>
  );
}
