import { COLORS } from './colors'
import { ICONS } from './icons'
import { TOAST_TITLE } from './toastTitle'

export const SUCCESS_TOAST = {
  icon: ICONS.Success,
  backgroundColor: COLORS.Green,
  title: TOAST_TITLE.Success,
  color: COLORS.White,
}

export const ERROR_TOAST = {
  icon: ICONS.Error,
  backgroundColor: COLORS.Red,
  title: TOAST_TITLE.Error,
  color: COLORS.White,
}

export const INFO_TOAST = {
  icon: ICONS.Information,
  backgroundColor: COLORS.Purple,
  title: TOAST_TITLE.Info,
  color: COLORS.White,
}

export const WARNING_TOAST = {
  icon: ICONS.Warning,
  backgroundColor: COLORS.Yellow,
  title: TOAST_TITLE.Warning,
  color: COLORS.Black,
}
