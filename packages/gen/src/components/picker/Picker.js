import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import styles from './Picker.scss';

const Picker = ({ category, handler }) => {

  if (!category) return (<h3>Nothing loaded.</h3>);

  const [choice, setChoice] = useState('');

  useEffect(() => {
    handler(choice);
  }, [choice]);

  const { title, choices } = category;

  return (
    <section className={styles.Picker}>
      <h2>{title}</h2>
      { choices.length === 0
        ?
        <input type="text" onChange={({ target }) => setChoice(target.value)} />
        :
        choices.map((c, i) => {
          return (
            <section className="choice" key={i}>
              <input name="choice" onClick={({ target }) => setChoice(choices[target.value])} type="radio" id={`input${i}`} value={i}></input>
              <label htmlFor={`input${i}`}>{c}</label>
            </section>
          );
        })
      }
    </section>
  );
};

Picker.propTypes = {
  category: propTypes.object,
  handler: propTypes.func,
};

export default Picker;