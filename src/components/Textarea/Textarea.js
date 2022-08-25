import React from 'react';
import styles from './Textarea.module.css';

export default function Textarea({ onChange, ...props }) {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={styles.textarea}>
      <label>
        {props.text}
        <textarea {...props} onChange={handleChange} />
      </label>
      <div className={styles.characters}>
        Characters left:{' '}
        <span className={styles.count}>{600 - props.value.length}/600</span>
        {600 - props.value.length < 0 && (
          <div className={styles.error}>
            You have exceeded the limit of 600 characters
          </div>
        )}
      </div>
    </div>
  );
}
