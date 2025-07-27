import React from 'react';
// Importe o CSS Module. O 'styles' é um objeto.
import styles from './PrimaryButton.module.css';

function PrimaryButton({ children }) {
  // Use a classe do objeto 'styles'
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

export default PrimaryButton;
