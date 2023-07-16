'use client'

import styles from './styles.module.css';

import { ReactNode, useEffect, useState } from 'react';
import { GiBattery100 } from 'react-icons/gi';
import { AiOutlineWifi, AiFillSignal } from 'react-icons/ai';

export default function NotificationBar() {
    const [fullHour, setFullHour] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            let hour = new Date().toLocaleTimeString();
            setFullHour(hour.slice(0, 5));

        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section className={ styles.notificationBar }>

            <div className={ styles.leftSide }>
                <p>{ fullHour }</p>
            </div>

            <div className={ styles.rightSide }>
                <AiOutlineWifi size={ 17 } />
                <AiFillSignal />
                <div>
                    <span>100%</span><GiBattery100 />
                </div>
            </div>

        </section>
    )
}