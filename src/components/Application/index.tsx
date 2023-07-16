'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type props = {
    type?: 'dock' | 'workspace',
    appName?: string,
    appIcon?: string
}

export default function Application({ type = 'workspace', appName = 'Application', appIcon = 'https://placehold.co/100' }: props) {
    const [name, setName] = useState(appName);

    useEffect(() => {

        if (appName.length > 12) {
            setName(appName.slice(0, 9) + '...');
        }

    }, [])

    return (
        <div className={ styles.application } title={ appName }>
            <img src={ appIcon } alt="" style={ { width: type == 'workspace' ? '50px' : '45px' } } />

            <p>{ name }</p>
        </div>
    )
}