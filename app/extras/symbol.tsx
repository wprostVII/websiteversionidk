
'use client'
import {useState} from 'react';
import {useCallback} from 'react';
import { useEffect } from 'react';

export default function SnowSymbols() {
    const snowStuff = ["⊹", "˖"];
    const [newSnow, setnewSnow] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * snowStuff.length);
        setnewSnow(snowStuff[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 500);
        return () => clearInterval(intervalID);
    }, [shuffle])
  return (
      <p>
     {newSnow}
      </p>
  );
}