import { useEffect, useRef, useState } from 'react'

import { ICONS } from 'constants/index'
import { ModalStyles } from './styled'
import {
  ToastWrapper,
  CancelWrapper,
  Container,
  IconWrapper,
} from 'components/Toast/styled'
import { Icon, Button, Text } from 'components'

export const Toaster = ({
  toastList,
  position,
  checkValue,
  delay,
  title,
  animation,
}) => {
  const [list, setList] = useState(toastList)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (checkValue && toastList.length) {
        handleDeleteToast(toastList[0].id)()
      }
    }, delay)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [toastList, checkValue])

  const handleDeleteToast = idToast => () => {
    const toastListItem = toastList.findIndex(
      ({ id }) => id === idToast,
    )
    toastList.splice(toastListItem, 1)

    const filteredList = list.filter(
      ({ id }) => idToast !== id,
    )
    setList([...filteredList])
  }

  return (
    <ModalStyles animation={animation} position={position}>
      {list.map(
        ({ id, backgroundColor, padding, color, icon }) => (
          <ToastWrapper
            key={id}
            color={backgroundColor}
            padding={padding}>
            <CancelWrapper color={color}>
              <Button
                icon={ICONS.Close}
                handleClick={handleDeleteToast(id)}
              />
            </CancelWrapper>
            <Container color={color}>
              <IconWrapper color={color}>
                <Icon icon={icon} />
              </IconWrapper>
              <Text text={title} />
            </Container>
          </ToastWrapper>
        ),
      )}
    </ModalStyles>
  )
}
