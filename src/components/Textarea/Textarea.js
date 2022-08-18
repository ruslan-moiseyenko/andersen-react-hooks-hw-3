import React from 'react';
import styles from './Textarea.module.css';

class Textarea extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e);
  };
  render() {
    return (
      <div className={styles.textarea}>
        <label>
          {this.props.text}
          <textarea {...this.props} onChange={this.handleChange} />
        </label>
        <div className={styles.characters}>
          Characters left:{' '}
          <span className={styles.count}>
            {600 - this.props.value.length}/600
          </span>
          {600 - this.props.value.length < 0 && (
            <div className={styles.error}>
              You have exceeded the limit of 600 characters
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Textarea;
