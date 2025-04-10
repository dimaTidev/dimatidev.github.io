'use client';

import { useEffect, useState } from 'react'
import Styles from "./fadeIn.module.css";

export default function Fade({
    children = undefined,
    isFadeIn = undefined,
    timeOut = 0.5,
    style = {},
    className="",
    ...params
}) {

  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    setAppeared(isFadeIn ? isFadeIn : true);
  }, [isFadeIn]);
  
  return (
    <div 
      style={{
        ...style, 
        animationDuration: `${timeOut}s`
      }}

      className={`${Styles.fadeIn} ${className}`}

      {...params}
    >
        {children}
    </div>
  )
}
