import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Toast } from 'components/Toast'
import { ToastWrapper } from './styled'

export const ToastContainer = ({
  toastList,
  position,
  autoDelete,
  timeToDelete,
  animation,
}) => {
  const [list, setList] = useState(toastList)
  const intervalRef = useRef()

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  const handleDeleteToast = idToast => {
    const toastListItem = toastList.findIndex(
      ({ id }) => id === idToast,
    )
    toastList.splice(toastListItem, 1)
    const filteredList = list.filter(
      ({ id }) => idToast !== id,
    )
    setList([...filteredList])
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        handleDeleteToast(toastList[0].id)
      }
    }, timeToDelete)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [toastList, autoDelete, timeToDelete, list, handleDeleteToast])

  return (
    <ToastWrapper animation={animation} position={position}>
      {list.map(toast => (
        <Toast
          key={uuidv4()}
          toast={toast}
          handleClick={handleDeleteToast}
        />
      ))}
    </ToastWrapper>
  )
}
