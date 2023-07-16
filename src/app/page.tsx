import styles from './page.module.css'

import Workspace from '@/components/Workspace'
import Dock from '@/components/Dock'
import NotificationBar from '@/components/NotificationBar'

export default function Home() {
  return (
    <main className={ styles.main }>
      <NotificationBar />

      <Workspace />

      <Dock />
    </main>
  )
}
