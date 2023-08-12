import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px ${props => props.shadowColor};
  padding: 40px 25px;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
  @media (min-width: 768px) {
    padding: 55px 40px;
  }
`
export const WebsiteLogo = styled.img`
  align-self: center;
  margin-bottom: 25px;
  width: 150px;
  @media all and (min-width: 768px) {
    width: 180px;
  }
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 300px;

  @media all and (min-width: 768px) {
    width: 400px;
  }
`
export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${props => props.color};
`
export const Input = styled.input`
  width: 100%;
  padding: 9px 12px;
  outline: none;
  border: 1px solid ${props => props.borderColor};
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.color};
`

export const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-bottom: 13px;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 6px;
`
export const TextLabel = styled.label`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
`

export const LoginButton = styled.button`
  padding: 10px 0px;
  border: none;
  font-weight: 500;
  text-align: center;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 6px;
`
export const ErrorMsg = styled.p`
  font-size: 14px;
  color: #ff0b37;
  font-weight: 600;
`
