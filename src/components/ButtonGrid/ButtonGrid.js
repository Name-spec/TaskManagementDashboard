import React from 'react';
import styles from './ButtonGrid.module.css';

function ButtonGrid() {
  const buttons = [
    { id: 1, text: 'Customer Manager'},
    { id: 2, text: 'Task Manager'},
    { id: 3, text: 'Inspection Manager'},
    { id: 4, text: 'Task Map'},
    { id: 5, text: 'Quick Lockup'},
    { id: 6, text: 'My Task'},
    { id: 7, text: 'My Inspection'},
    { id: 8, text: 'Inspection Map'},
    { id: 9, text: 'Scan QR Code'},
    { id: 10, text: 'My Task History'},
    { id: 11, text: 'My Inspection History'},
    { id: 12, text: 'Asset Map'},
  ];

  return (
    <div className={styles.buttonGrid}>
      {buttons.map((button) => (
        <button key={button.id}>
          {button.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonGrid;