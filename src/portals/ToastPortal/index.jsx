import { useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

export const ToastPortal = ({ children }) => {
  const toastRoot = document.createElement('div')
  const element = document.createElement('div')

  useLayoutEffect(() => {
    toastRoot.id = 'toastRoot'
    document.body.appendChild(toastRoot)

    toastRoot.appendChild(element)

    return () => {
      toastRoot.removeChild(element)
    }
  })

  return createPortal(children, element)
}
