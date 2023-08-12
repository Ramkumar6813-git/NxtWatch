import Header from '../Header'
import SideNavBar from '../SideNavBar'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  NotFoundDiv,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  BgContainer,
  NavBar,
  MainDisplaySection,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <BgContainer>
            <NavBar>
              <SideNavBar />
            </NavBar>
            <MainDisplaySection bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
              <NotFoundDiv>
                <NotFoundImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundHeading color={isDarkTheme ? '#f1f5f9' : '#1e293b'}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDescription
                  color={isDarkTheme ? '#e2e8f0' : '#475569'}
                >
                  We are sorry,the page you requested could not be found.
                </NotFoundDescription>
              </NotFoundDiv>
            </MainDisplaySection>
          </BgContainer>
        </>
      )
    }}
  </ThemeAndVideoContext>
)

export default NotFound
