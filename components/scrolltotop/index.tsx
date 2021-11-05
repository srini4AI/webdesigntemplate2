import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export const ScrollToTop = () =>{
    const [scrollTope, setScrolTopE] = useState<boolean>(false);
    const  toggleToTop = () =>{
        window.scrollTo(0, 0)
      }
      useEffect(()=>{
        window.addEventListener("scroll", scrollToTop, true);
        return () => window.removeEventListener("scroll", scrollToTop);  
      },[])
    const scrollToTop = (event: any) => {
        const windowH = document.body.scrollTop;
        setScrolTopE((prev) => {
            return window.pageYOffset > windowH;
        })
    };
  
    return (<React.Fragment>
         {scrollTope && <div className='scrolltop' onClick={toggleToTop}>
    <div className='scroll icon'>   <FontAwesomeIcon icon={faArrowUp}  size="2x"/></div>
    </div>}
    </React.Fragment>)
}