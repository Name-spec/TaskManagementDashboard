import React from "react";
import styles from './Tasks.module.css'


function Tasks(props) {
    return (
        <div className={styles.tasks}>
            <div className={styles.tskType}>
                <div>
                    <span>Task Type: </span>
                    <span className={styles.headtask}>{props.type}</span>
                </div>
                <div className={styles.right}>
                    <span>Priority:</span>
                    <span className={styles.headtask}>{props.priority}</span>
                </div>
            </div>
            <div className={styles.tskType}>
                <div>
                    <span>Customer: </span>
                    <span className={styles.headtask}>{props.customer}</span>
                </div>
            </div>
            <div className={styles.tskType}>
                <div>
                    <span>Service: </span>
                    <span className={styles.headtask}>{props.service}</span>
                </div>
            </div>
        </div>
      );
}

export default Tasks;