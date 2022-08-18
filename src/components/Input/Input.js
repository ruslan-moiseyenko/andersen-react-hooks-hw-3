import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    return (
      <div className={styles.input}>
        <label>
          {this.props.header}
          <input {...this.props} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default Input;
