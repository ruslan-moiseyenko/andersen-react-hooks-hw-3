// import logo from './logo.svg';
import styles from './App.module.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Info from './components/Information/Information';
import FilledProfile from './components/FilledProfile/FilledProfile';

class App extends Component {
  state = {
    filled: false,
    data: {}
  };
  handleSubmit = (data) => {
    this.setState((prevState) => ({ ...prevState, filled: true, data: data }));
  };

  render() {
    return (
      <div className={styles.main}>
        {!this.state.filled && <Header text='Creating a profile' />}
        {!this.state.filled && <Info onSubmit={this.handleSubmit} />}
        {this.state.filled && <FilledProfile data={this.state.data} />}
      </div>
    );
  }
}
export default App;
