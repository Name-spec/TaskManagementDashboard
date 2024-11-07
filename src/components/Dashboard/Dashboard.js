import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from './Dashboard.module.css';
import StatsCard from '../StatsCard/StatsCard';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import Services from '../Services/Services'
import CurrentTask from '../CurrentTask/CurrentTask';

const taskList=[
    {title: 'Past Due', value: 4, percentage: '10'},
    {title: 'Due Today', value: 91, percentage: '12'},
    {title: 'This Month', value: 276, percentage: '2'},

]



function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.sidePosition}>
                <Sidebar />
            </div>
            <div className={styles.mainContent}>
                <Header />
                <h3>Task Due: </h3>
                <div className={styles.cardContent}>
                    <StatsCard  list={taskList[0]}/>
                    <StatsCard  list={taskList[1]}/>
                    <StatsCard  list={taskList[2]}/>
                </div>
                <h3>inspection Due: </h3>
                <div className={styles.cardContent}>
                    <StatsCard list={taskList[0]}/>
                    <StatsCard list={taskList[1]}/>
                    <StatsCard list={taskList[2]}/>
                </div>
                <ButtonGrid />
                <Services />
                <h3>Current Tasks in-rogress: </h3>
                <div>
                    <CurrentTask/>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;