import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  padding-top: 75px;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const NavBar = styled.div`
  width: 230px;
  height: 100%;
  margin-top: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`

export const MainDisplaySection = styled.div`
  background-size: cover;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  @media (min-width: 575px) {
    padding: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 230px;
    width: 100%;
  }
`

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
`
export const NotFoundImage = styled.img`
  max-width: 350px;
  margin-bottom: 10px;
`
export const NotFoundHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 5px;
  color: ${props => props.color};
`
export const NotFoundDescription = styled.p`
  font-size: 16px;
  margin-top: 5px;
  color: ${props => props.color};
`
