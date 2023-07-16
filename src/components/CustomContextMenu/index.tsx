import styles from './styles.module.css'

import { GrCircleInformation } from 'react-icons/gr'
import { AiOutlineDelete } from 'react-icons/ai'

interface ContextMenuProps {
    x: number,
    y: number
}

export default function CustomContextMenu(props: ContextMenuProps) {
    return (
        <div className={ styles.customContextMenu } style={ { left: props.x, top: props.y } }>
            <p>{ sessionStorage.getItem('app_name') }</p>

            <hr />

            <div className={ styles.buttons }>
                <button>
                    <span>Informações</span> <GrCircleInformation size={ 18 } />
                </button>

                <button>
                    <span>Desinstalar</span> <AiOutlineDelete size={ 18 } />
                </button>
            </div>
        </div>
    )
}