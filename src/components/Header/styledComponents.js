import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RouteLink = styled(Link)`
  text-decoration: none;
`
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  margin: 0;
  width: 100%;
  position: fixed;
  background-color: ${props => props.bgColor};
`
export const WebsiteLogo = styled.img`
  width: 130px;
`
export const NavHeaderLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
  padding-left: 0;
`
export const NavIconLink = styled.li`
  color: ${props => props.color};
`

export const ProfileImg = styled.img`
  width: 30px;
  margin: 0px 15px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLinkButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 3px 0 5px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const SmLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  @media (min-width: 768px) {
    display: none;
  }
`
export const LgLogoutButton = styled.button`
  padding: 5px 12px;
  margin-left: 5px;
  border: 1px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;
  font-weight: 500;
  border-radius: 3px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 400px;
  }
`

export const ModalDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.borderColor};
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const SmDevicePopupRouteLinksDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupCloseButton = styled.button`
  align-self: flex-end;
  margin: 5% 10%;
  background-color: transparent;
  border: none;
`
export const SmDeviceNavLinks = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
  padding-top: 30%;
`
export const SmDeviceLinkItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 10px 10px 30%;
  background-color: ${props => props.bgColor};
`

export const SmNavLinkButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`
export const SmDeviceLinkText = styled.p`
  font-size: 16px;
  margin-left: 15px;
  color: ${props => props.color};
`
