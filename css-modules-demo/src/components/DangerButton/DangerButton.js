import React from 'react';
import styles from './DangerButton.module.css';

function DangerButton({ children }) {
  // A classe .button aqui será mapeada para o CSS do DangerButton
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

export default DangerButton;