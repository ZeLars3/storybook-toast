import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Content,
  MainContainer,
  ButtonContent,
  OptionValue,
  CheckBoxContent,
  Checkbox,
  Select,
  Input,
} from './styled'
import {
  BUTTON_DATA,
  POSITIONS,
  TOAST_TYPES,
  SUCCESS_TOAST,
  ERROR_TOAST,
  INFO_TOAST,
  WARNING_TOAST,
} from 'constants/index'
import { ToastPortal } from 'portals/ToastPortal'
import { SelectButton } from 'components'
import { Toaster } from 'containers/Toaster'

export const App = () => {
  const [checkValue, setCheckValue] = useState(false)
  const [list, setList] = useState([])
  const [position, setPosition] = useState(
    POSITIONS.Top_Right,
  )
  const [title, setTitle] = useState('Example')
  const [delay, setDelay] = useState(2000)
  const [animation, setAnimation] = useState('swipe-top')

  const config = {
    [TOAST_TYPES.Success]: SUCCESS_TOAST,
    [TOAST_TYPES.Error]: ERROR_TOAST,
    [TOAST_TYPES.Info]: INFO_TOAST,
    [TOAST_TYPES.Warning]: WARNING_TOAST,
  }

  const showToast = type => () => {
    const id = uuidv4()
    const options = config[type]

    list.length < 3
      ? setList([...list, { ...options, id }])
      : setList(list)
  }

  const handleOnCheckBoxChange = useCallback(
    () => setCheckValue(!checkValue),
    [checkValue],
  )

  const handleSelectPosition = e => {
    setPosition(e.target.value)
  }

  const handleSelectAnimation = e => {
    setAnimation(e.target.value)
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleChangeDelay = e => {
    setDelay(e.target.value)
  }

  return (
    <>
      <MainContainer>
        <Content>
          <ButtonContent>
            {BUTTON_DATA.map(({ label, type }) => (
              <SelectButton
                key={uuidv4()}
                label={label}
                type={type}
                handleClick={showToast(type)}
              />
            ))}
          </ButtonContent>
          <CheckBoxContent>
            <Checkbox
              type="checkbox"
              value={checkValue}
              onChange={handleOnCheckBoxChange}>
            </Checkbox>
            <p>Auto close</p>
          </CheckBoxContent>
          <Select
            value={position}
            onChange={handleSelectPosition}>
            <OptionValue value={POSITIONS.Top_Right}>
              Top Rigth
            </OptionValue>
            <OptionValue value={POSITIONS.Top_Left}>
              Top Left
            </OptionValue>
            <OptionValue value={POSITIONS.Bottom_Left}>
              Bottom Left
            </OptionValue>
            <OptionValue value={POSITIONS.Bottom_Right}>
              Bottom Left
            </OptionValue>
          </Select>
          <Select
            value={animation}
            onChange={handleSelectAnimation}>
            <OptionValue value={'swipe-top'}>
              Swipe-top
            </OptionValue>
            <OptionValue value={'swipe-down'}>
              Swipe-down
            </OptionValue>
            <OptionValue value={'swipe-left'}>
              Swipe-left
            </OptionValue>
            <OptionValue value={'swipe-right'}>
              Swipe-right
            </OptionValue>
          </Select>
          <Input
            type="number"
            value={delay}
            onChange={handleChangeDelay}
            placeholder="Delay"
          />
          <Input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Title"
          />
        </Content>
      </MainContainer>
      <ToastPortal>
        <Toaster
          toastList={list}
          position={position}
          checkValue={checkValue}
          delay={delay}
          title={title}
          setList={setList}
          animation={animation}
        />
      </ToastPortal>
    </>
  )
}
