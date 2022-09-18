import {
  SUCCESS_TOAST,
  ERROR_TOAST,
  INFO_TOAST,
  WARNING_TOAST,
  TOAST_TYPES,
} from 'constants/index'

export const getProperties = type => {
  switch (type) {
    case TOAST_TYPES.Info:
      return [
        INFO_TOAST.icon,
        INFO_TOAST.backgroundColor,
        INFO_TOAST.title,
        INFO_TOAST.color,
      ]
    case TOAST_TYPES.Warning:
      return [
        WARNING_TOAST.icon,
        WARNING_TOAST.backgroundColor,
        WARNING_TOAST.title,
        WARNING_TOAST.color,
      ]
    case TOAST_TYPES.Error:
      return [
        ERROR_TOAST.icon,
        ERROR_TOAST.backgroundColor,
        ERROR_TOAST.title,
        ERROR_TOAST.color,
      ]
    case TOAST_TYPES.Success:
      return [
        SUCCESS_TOAST.icon,
        SUCCESS_TOAST.backgroundColor,
        SUCCESS_TOAST.title,
        SUCCESS_TOAST.color,
      ]
    default:
      return []
  }
}
