import React from 'react';
// import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Header;
