import React, { useEffect, useRef } from 'react';

const useScript = url => {
    const ref = useRef(false);
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = false;

    document.body.appendChild(script);
    ref.current = true;
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;