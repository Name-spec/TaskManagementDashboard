import React from 'react';
import Tasks from './Tasks';
import styles from './CurrentTask.module.css';

function CurrentTask () {
  const currTasks = [
    { id: 1, type: 'Service Call', priority: 'High', customer: 'CP-1', service: 'Repair' },
    { id: 2, type: 'Emergency Call', priority: 'Urgent', customer: 'CP-2', service: 'Inspection' },
    { id: 3, type: 'Routine Check', priority: 'Medium', customer: 'CP-3', service: 'Maintenance' },
    { id: 4, type: 'Follow-up', priority: 'Low', customer: 'CP-4', service: 'Consultation' },
  ];

  return (
    <div className={styles.currentTask}>
        <div className={styles.tasksGrid}>
            {currTasks.map((task) => (
            <Tasks
                key={task.id}
                type={task.type}
                priority={task.priority}
                customer={task.customer}
                service={task.service}
            />
            ))}
        </div>
    </div>
  );
};

export default CurrentTask;
