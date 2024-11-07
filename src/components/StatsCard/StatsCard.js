import React from 'react';
import styles from './StatsCard.module.css';

function StatsCard(props ) {
  return (
    <div className={styles.statsCard}>
        <div className={styles.statsTitle}>
            <h3>{props.list.title}</h3>
            <button className={styles.optionBtns}>⋮</button>
        </div>
      <div className={styles.statsValue}>
        <h2>{props.list.value}</h2>
        <span className={props.list.percentage > 2 ? styles.percentage : styles.decrease}>
            {props.list.percentage > 2 ? '+ ' : '↓ '}{props.list.percentage}%
        </span>
      </div>
    </div>
  );
}
export default StatsCard;