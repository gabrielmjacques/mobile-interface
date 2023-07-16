'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type props = {
    type?: 'dock' | 'workspace',
    appName?: string,
    appIcon?: string,
    handleContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function Application({ type = 'workspace', appName = 'Application', appIcon = 'https://placehold.co/100', handleContextMenu }: props) {
    const [name, setName] = useState(appName);

    useEffect(() => {

        if (appName.length > 12) {
            setName(appName.slice(0, 9) + '...');
        }

    }, [])

    function handleMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        sessionStorage.setItem('app_name', appName)

        handleContextMenu(e)
    }

    return (
        <div className={ styles.application } title={ appName } onContextMenu={ handleMenu }>
            <img src={ appIcon } alt="" style={ { width: type == 'workspace' ? '50px' : '45px' } } />

            <p>{ name }</p>
        </div>
    )
}