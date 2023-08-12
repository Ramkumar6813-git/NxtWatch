import styled from 'styled-components'

export const TrendingBgDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
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
  @media (min-width: 575px) {
    padding: 20px 0px;
    width: 100%;
  }
  @media (min-width: 768px) {
    margin-left: 230px;
    width: 100%;
  }
`

export const TrendingBanner = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 58px;
  padding-left: 30px;
  margin-bottom: 20px;
  padding: 15px 30px;
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`

export const TrendingIconDiv = styled.div`
  background-color: ${props => props.bgColor};
  padding: 15px 20px;
  border-radius: 50%;
  margin-right: 10px;
  color: #ff0000;
`
export const TrendingHeading = styled.h1`
  font-size: 28px;
  color: ${props => props.color};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const VideosSection = styled.div`
  background-color: ${props => props.bgColor};
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
