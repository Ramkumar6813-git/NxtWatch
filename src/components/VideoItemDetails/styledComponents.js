import styled from 'styled-components'

export const BgDiv = styled.div`
  padding-left: 0px;
  padding-top: 60px;

  @media (min-width: 768px) {
    padding-left: 230px;
    padding-top: 60px;
  }
`
export const NavBar = styled.div`
  width: 230px;
  margin-top: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`
export const MainDisplaySection = styled.div`
  background-color: #f1f5f9;
  background-size: cover;
  min-height: 100vh;
  padding: 20px 0px;
  background-color: ${props => props.bgColor};
  @media (min-width: 576px) {
    padding: 20px 0px;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
