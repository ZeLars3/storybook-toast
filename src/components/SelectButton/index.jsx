import { ButtonWrapper } from './styled'

export const SelectButton = ({ label, handleClick, type }) => {
  return (
    <ButtonWrapper type={type} onClick={handleClick}>
      {label}
    </ButtonWrapper>
  )
}
