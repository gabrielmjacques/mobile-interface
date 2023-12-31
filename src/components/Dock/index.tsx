import styles from './styles.module.css'

import Application from '../Application'
import Link from 'next/link'

export default function Dock({ handleContextMenu }: any) {
    return (
        <section className={ styles.dock }>
            <Link href={ 'https://www.linkedin.com/in/edson-gabriel-jacques-5b3678242/' } target='_blank'>
                <Application
                    handleContextMenu={ handleContextMenu }
                    type='dock'
                    appName='Linkedin'
                    appIcon='/appIcons/linkedin.png' />
            </Link>

            <Link href={ 'https://github.com/gabrielmjacques' } target='_blank'>
                <Application
                    handleContextMenu={ handleContextMenu }
                    type='dock'
                    appName='GitHub'
                    appIcon='/appIcons/github.png' />
            </Link>

            <Application
                handleContextMenu={ handleContextMenu }
                type='dock'
                appName='Sobre Mim'
            />

            <Link href={ 'mailto: egmoreira10@gmail.com' } target='_blank'>
                <Application
                    handleContextMenu={ handleContextMenu }
                    type='dock'
                    appName='Email'
                    appIcon='/appIcons/gmail.png' />
            </Link>

            <Link href={ 'https://www.instagram.com/gabriel_gtbp/' } target='_blank'>
                <Application
                    handleContextMenu={ handleContextMenu }
                    type='dock'
                    appName='Instagram'
                    appIcon='/appIcons/instagram.png' />
            </Link>
        </section>
    )
}