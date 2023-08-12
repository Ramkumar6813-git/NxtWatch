import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  padding-top: 75px;
  flex-direction: column;
  background-color: ${props => props.bgColor};
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
export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 768px) {
  }
`

export const BannerDetails = styled.div`
  padding: 22px;
  @media (min-width: 768px) {
    padding: 35px 25px;
  }
`
export const WebsiteLogo = styled.img`
  width: 150px;
`
export const BannerText = styled.p`
  font-size: 16px;
  font-weight: 500;
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: #231f20;
  font-weight: 500;
  border: 1px solid #1e293b;
  padding: 8px 10px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 22px 13px;
`

export const VideosSection = styled.div`
  background-color: ${props => props.bgColor};
`

export const SearchInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  padding: 0px 10px;
  max-width: 500px;
`
export const SearchInput = styled.input`
  padding: 9px 10px;
  outline: none;
  width: 100%;
  color: ${props => props.color};
  font-size: 15px;
  background-color: ${props => props.bgColor};
  border: 1.2px solid #909090;
`
export const SearchIconButton = styled.button`
  padding: 6px 25px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #909090;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  @media (min-width: 768px) {
    padding-top: 40px;
  }
`
export const NoDataImage = styled.img`
  max-width: 400px;
`
export const NoDataHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 5px;
  color: ${props => props.color};
`
export const NoDataDescription = styled.p`
  margin: 5px 0px;
  color: #7e858e;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const RetryButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-weight: bold;
  background-color: #4f46e5;
  border: none;
  color: #ffffff;
  border-radius: 5px;
`
