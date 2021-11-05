
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
export const PageLoader = ()  =>{
    return (<React.Fragment>
        <FontAwesomeIcon icon={faSpinner}  size="2x" /> 
    </React.Fragment>)
}