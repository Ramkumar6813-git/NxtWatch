import styled from 'styled-components'

export const SavedVideosBgDiv = styled.div`
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

export const SavedVideosBanner = styled.div`
  background-color: #e2e8f0;
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
  background-color: ${props => props.bgColor};
`

export const TrendingIconDiv = styled.div`
  background-color: #d7dfe9;
  padding: 10px 15px;
  border-radius: 50%;
  margin-right: 10px;
  color: #ff0000;
  background-color: ${props => props.bgColor};
`
export const SavedVideosHeading = styled.h1`
  color: ${props => props.color};
  font-size: 28px;
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: ${props => props.bgColor};
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 58px;
  padding-left: 30px;
  margin-bottom: 20px;
  height: 80vh;
`

export const NoSavedVideosImage = styled.img`
  width: 250px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 28px;
  margin-bottom: 0px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
