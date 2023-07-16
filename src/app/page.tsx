'use client'

import styles from './page.module.css'

import { useState } from 'react'
import Workspace from '@/components/Workspace'
import Dock from '@/components/Dock'
import NotificationBar from '@/components/NotificationBar'
import CustomContextMenu from '@/components/CustomContextMenu'

export default function Home() {
  const [contextMenu, setContextMenu] = useState({
    show: false,
    x: 0,
    y: 0
  })

  function handleContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault()

    setContextMenu({
      show: false,
      x: e.clientX,
      y: e.clientY
    })

    setTimeout(() => {
      setContextMenu({
        show: true,
        x: e.clientX,
        y: e.clientY
      })
    }, 50)
  }

  return (
    <main className={ styles.main } onClick={ () => setContextMenu({ show: false, x: contextMenu.x, y: contextMenu.y }) }>
      <NotificationBar />

      { contextMenu.show && <CustomContextMenu x={ contextMenu.x } y={ contextMenu.y } /> }

      <Workspace handleContextMenu={ handleContextMenu } />

      <Dock handleContextMenu={ handleContextMenu } />
    </main>
  )
}
