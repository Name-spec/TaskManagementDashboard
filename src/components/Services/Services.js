import React from "react";

import styles from './Services.module.css'

function Services() {
    const appServices = [
      { ids: 1, text: 'Service Call'},
      { ids: 2, text: 'Emergency Service Call'},
      { ids: 3, text: 'Add New Customer'},
      { ids: 4, text: 'Customer Assist Manager'},
      { ids: 5, text: 'Future Use'},
      { ids: 6, text: 'Add New Button'},
    ];
  
    return (
      <div className={styles.Services}>
        {appServices.map((appService) => (
          <button key={appService.ids}>
            {appService.text}
          </button>
        ))}
      </div>
    );
  }

  export default Services;