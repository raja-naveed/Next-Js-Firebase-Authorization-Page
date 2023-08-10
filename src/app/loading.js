import React from 'react';
import styles from "@/app/styles/common.module.css" // Import CSS module for styling

const loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingCircle}></div>
        </div>
    );
};

export default loading;