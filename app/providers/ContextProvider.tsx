'use client'
import {GlobalProvider} from '@/app/context/globalProvider';
import { useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

const ContextProvider = ({children}:Props) => {
    const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 250);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <GlobalProvider>{children}</GlobalProvider>
  )
}

export default ContextProvider;