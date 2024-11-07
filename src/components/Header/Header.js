import React from 'react';

import image from './image.jpg'
import styles from './Header.module.css';

function Header() {

    return (
        <div className={styles.Header}>
            <h3>Dashboard</h3>
            <div className={styles.userProfile}>
                <img src={image} alt="Profile" />
                <div className={styles.userInfo}>
                <h3>Oliver Ray</h3>
                <p>Oliverrayy@inspection.com</p>
                </div>
            </div>
        </div>
    )
}

export default Header;