import styled from 'styled-components'

export const IconWrapper = styled.div`
  margin-right: 20px;

  img {
    height: 60px;
    width: 60px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${({ color }) => color};
  }
`

export const ToastWrapper = styled.div`
  width: 350px;
  padding: 30px;
  margin-bottom: 30px;
  transition: 0.5s ease;
  pointer-events: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
  background-color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
`

export const CancelWrapper = styled.div`
  display: flex;
  justify-content: end;

  button {
    float: right;
    border: none;
    padding: 0;
    cursor: pointer;
    background: none;
  }

  img {
    width: 18px;
    height: 18px;
    fill: ${({ color }) => color} !important;
  }
`
