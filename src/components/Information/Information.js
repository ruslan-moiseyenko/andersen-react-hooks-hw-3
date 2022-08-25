import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import styles from './Information.module.css';
import { initialData, inputs } from './Data';

export default function Info({ onSubmit }) {
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkEntries(data)) {
      onSubmit(data);
    }
  };

  const checkEntries = (data) => {
    deliteAllErrorsMessages();
    for (const key in data) {
      if (key === 'name' || key === 'surname') {
        if (checkEmptyFields(key)) {
          const regex = new RegExp('^[A-ZА-Я][a-zа-я]+');
          if (!regex.test(data[key])) {
            const node = document.getElementsByClassName([key])[0];
            node.classList.add(styles.errorBorder);
            node.insertAdjacentHTML(
              'afterend',
              `<p class=${styles.error}>Name must start with a capital letter</p>`
            );
            node.focus();
            return false;
          }
        } else {
          return false;
        }
      }

      if (key === 'site') {
        if (checkEmptyFields(key)) {
          const regex = new RegExp('^(https://)');
          if (!regex.test(data[key])) {
            const node = document.getElementsByClassName([key])[0];
            node.classList.add(styles.errorBorder);
            node.insertAdjacentHTML(
              'afterend',
              `<p class=${styles.error}>A link to a site should start with https://</p>`
            );
            node.focus();
            return false;
          }
        }
      }

      if (key === 'phone') {
        if (checkEmptyFields(key)) {
          const regex = new RegExp('^[0-9-]+$');
          if (!regex.test(data[key])) {
            const node = document.getElementsByClassName([key])[0];
            node.classList.add(styles.errorBorder);
            node.insertAdjacentHTML(
              'afterend',
              `<p class=${styles.error}>Please, enter valid phone</p>`
            );
            node.focus();
            return false;
          }
          if (data[key].length > 12) {
            const node = document.getElementsByClassName([key])[0];
            node.classList.add(styles.errorBorder);
            node.insertAdjacentHTML(
              'afterend',
              `<p class=${styles.error}>Your phone number should be less then 12 charactersf</p>`
            );
            node.focus();
            return false;
          }
        } else {
          return false;
        }
      }

      if (key === 'stack') {
        if (!checkEmptyFields(key)) {
          return false;
        }
      }

      if (key === 'about' || key === 'project') {
        if (checkEmptyFields(key)) {
          if (data[key].length > 600) {
            const node = document.getElementsByClassName([key])[0];
            node.classList.add(styles.errorBorder);
            node.focus();
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  };

  const checkEmptyFields = (fieldName) => {
    if (data[fieldName] === '') {
      const node = document.getElementsByClassName([fieldName])[0];
      node.classList.add(styles.errorBorder);
      node.insertAdjacentHTML(
        'afterend',
        `<p class=${styles.error}>Please, fill the field</p>`
      );
      node.focus();
      return false;
    }
    return true;
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(initialData);
    deliteAllErrorsMessages();
  };

  const deliteAllErrorsMessages = () => {
    const errors = document.getElementsByClassName(styles.error);
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
    const errorBorders = document.getElementsByClassName(styles.errorBorder);
    for (let i = 0; i < errorBorders.length; i++) {
      errorBorders[i].classList.remove(styles.errorBorder);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={data[input.name]}
          onChange={handleChange}
        />
      ))}

      <Textarea
        name='about'
        text='About you'
        className='about'
        rows='7'
        placeholder='Here is the place where you can leave a little bit of information about youreself'
        value={data.about}
        onChange={handleChange}
      />

      <Textarea
        name='project'
        text='About your last project'
        className='project'
        rows='7'
        placeholder='Please describe your last project and your responsibilities'
        value={data.project}
        onChange={handleChange}
      />

      <div className='form__buttons'>
        <Button type='submit' text='Save' />
        <Button type='reset' text='Cancel' />
      </div>
    </form>
  );
}
