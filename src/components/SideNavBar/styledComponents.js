import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  height: 90%;
`

export const LgNavLinksSectionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 2px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const LgNavLinkItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 10px 0 10px 15px;
  background-color: ${props => props.bgColor};
`
export const LgNavLinkButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`
export const LgNavLinkText = styled.p`
  margin: 0;
  font-size: 16px;
  padding-top: 3px;
  padding-left: 15px;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`

export const ContactSection = styled.div`
  padding-left: 15px;
`
export const ContactUsText = styled.p`
  color: ${props => props.color};
`
export const SocialMediaLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const MediaIcon = styled.li``
export const ContactImage = styled.img`
  width: 30px;
  margin-right: 15px;
`
export const ContactDescription = styled.p`
  color: ${props => props.color};
`
