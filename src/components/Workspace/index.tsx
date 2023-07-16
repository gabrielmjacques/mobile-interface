import Application from '../Application';
import styles from './styles.module.css';

export default function Workspace() {
    return (
        <section className={ styles.workspace }>
            <Application appName='Netflix Clone' />
            <Application appName='Calculator' />
            <Application />
            <Application />
            <Application />
        </section>
    )
}