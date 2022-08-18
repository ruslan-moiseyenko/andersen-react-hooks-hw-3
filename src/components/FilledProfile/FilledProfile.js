import React, { Component } from 'react';
import Header from '../Header/Header';
import styles from './FilledProfile.module.css';

class FilledProfile extends Component {
  render() {
    const { name, surname, date, phone, site, about, stack, project } =
      this.props.data;
    return (
      <div className={styles.main}>
        <Header text={name + ' ' + surname} />
        <div className={styles.info_block}>
          <h2>Your date of birth is: </h2>
          <p className={styles.text}> {date}</p>
        </div>
        <div className={styles.info_block}>
          <h2>Your phone is: </h2>
          <p className={styles.text}> {phone}</p>
        </div>
        <div className={styles.info_block}>
          <h2>The link to your site is: </h2>
          <p className={styles.text}> {site}</p>
        </div>

        <div className={styles.info_block}>
          <h2>About you: </h2>
          <p className={styles.text}> {about}</p>
        </div>

        <div className={styles.info_block}>
          <h2>Your technologies stack is: </h2>
          <p className={styles.text}> {stack}</p>
        </div>

        <div className={styles.info_block}>
          <h2>The description of your last project: </h2>
          <p className={styles.text}> {project}</p>
        </div>
      </div>
    );
  }
}

export default FilledProfile;
