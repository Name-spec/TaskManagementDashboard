import React from 'react';
import styles from './Sidebar.module.css'
import home from './home.png'
import task from './task.png'
import settings from './settings.png'
import logout from './logout.png'
import btn from './btn.png'


function Sidebar() {
    const items=[
        { icon: home, label: 'Home' },
        { icon: task, label: 'Users' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: task, label: 'Tasks' },
        { icon: settings, label: 'Settings' },
        { icon: logout, label: 'LogOut' },
        


    ];
    
    return (
        <div className={styles.sidebar}>
            <div>
                <button type='button'>
                        <img src={btn} alt="buttonpng" className={styles.iconImg}/>
                </button>
            </div>
            <nav>
                {items.map((item, index) => (
                <button type='button' key={index} className={styles.menuItem}>
                    <img src={item.icon} alt="buttonpng" className={styles.iconImg}/> 
                </button>
                ))}
            </nav>
        </div>
    )

}

export default Sidebar;