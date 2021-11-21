
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './pageloader.module.css'
export const PageLoader = ()  =>{
    return (<React.Fragment>
        <FontAwesomeIcon className={styles.loader} icon={faSpinner}  size="2x" pulse /> 
    </React.Fragment>)
}