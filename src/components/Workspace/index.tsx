import Application from '../Application';
import styles from './styles.module.css';

export default function Workspace({ handleContextMenu }: any) {
    return (
        <section className={ styles.workspace }>
            <Application handleContextMenu={ handleContextMenu } appName='Netflix Clone' />
            <Application handleContextMenu={ handleContextMenu } appName='Calculator' />
            <Application handleContextMenu={ handleContextMenu } />
            <Application handleContextMenu={ handleContextMenu } />
            <Application handleContextMenu={ handleContextMenu } />
        </section>
    )
}