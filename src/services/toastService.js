import { v4 as uuidv4 } from 'uuid'

import { ToastPortal } from 'portals/ToastPortal'
import { ToastContainer } from 'containers/ToastContainer'
import { getProperties } from 'utils'

let toastList = []

class ToastService {
  constructor(toastList) {
    this.toastList = toastList
  }

  generateId() {
    return uuidv4()
  }

  generateToast(text, background, padding, prop) {
    const { toastId, type } = prop
    const [icon, backgroundColor, title, color] =
      getProperties(type)

    return {
      ...prop,
      id: toastId || this.generateId(),
      description: text,
      padding: padding || '',
      title: title,
      color: color,
      backgroundColor: background || backgroundColor,
      icon: icon,
    }
  }

  addToast(text, backgroundcolor, padding, prop) {
    const { position, autoDelete, delay, animation } = prop

    if (toastList.length < 3) {
      toastList = [
        ...toastList,
        this.generateToast(text, backgroundcolor, padding, prop),
      ]
    }

    return (
      <ToastPortal>
        <ToastContainer
          toastList={toastList}
          paddings={padding}
          position={position}
          autoDelete={autoDelete}
          timeToDelete={delay}
          animation={animation}
        />
      </ToastPortal>
    )
  }
}
export const toast = new ToastService(toastList)
