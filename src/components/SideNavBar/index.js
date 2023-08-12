import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  SideBarDiv,
  LgNavLinksSectionList,
  LgNavLinkItem,
  NavLink,
  LgNavLinkButton,
  LgNavLinkText,
  ContactSection,
  ContactUsText,
  SocialMediaLinks,
  MediaIcon,
  ContactImage,
  ContactDescription,
} from './styledComponents'

const SideNavBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab, activeTab} = value
      const activeTabBg = isDarkTheme ? '#606060' : ' #d7dfe9'
      const nonActiveTabBg = isDarkTheme ? '#181818' : '#ffffff'
      const activeTabColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const nonActiveTabColor = isDarkTheme ? '#909090' : '#606060'
      const onClickTabHome = () => {
        changeTab('Home')
      }
      const onClickTabTrending = () => {
        changeTab('Trending')
      }
      const onClickTabGaming = () => {
        changeTab('Gaming')
      }
      const onClickTabSaved = () => {
        changeTab('Saved')
      }
      return (
        <SideBarDiv bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
          <LgNavLinksSectionList>
            <LgNavLinkItem
              bgColor={activeTab === 'Home' ? activeTabBg : nonActiveTabBg}
            >
              <AiFillHome
                size="20"
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
              <LgNavLinkButton onClick={onClickTabHome}>
                <NavLink to="/">
                  <LgNavLinkText
                    color={
                      activeTab === 'Home' ? activeTabColor : nonActiveTabColor
                    }
                    fontWeight={activeTab === 'Home' ? 'bold' : 'normal'}
                  >
                    Home
                  </LgNavLinkText>
                </NavLink>
              </LgNavLinkButton>
            </LgNavLinkItem>

            <LgNavLinkItem
              bgColor={activeTab === 'Trending' ? activeTabBg : nonActiveTabBg}
            >
              <HiFire
                size="20"
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
              <LgNavLinkButton onClick={onClickTabTrending}>
                <NavLink to="/trending">
                  <LgNavLinkText
                    color={
                      activeTab === 'Trending'
                        ? activeTabColor
                        : nonActiveTabColor
                    }
                    fontWeight={activeTab === 'Trending' ? 'bold' : '500'}
                  >
                    Trending
                  </LgNavLinkText>
                </NavLink>
              </LgNavLinkButton>
            </LgNavLinkItem>

            <LgNavLinkItem
              bgColor={activeTab === 'Gaming' ? activeTabBg : nonActiveTabBg}
            >
              <SiYoutubegaming
                size="20"
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
              <LgNavLinkButton onClick={onClickTabGaming}>
                <NavLink to="/gaming">
                  <LgNavLinkText
                    color={
                      activeTab === 'Gaming'
                        ? activeTabColor
                        : nonActiveTabColor
                    }
                    fontWeight={activeTab === 'Gaming' ? 'bold' : 'normal'}
                  >
                    Gaming
                  </LgNavLinkText>
                </NavLink>
              </LgNavLinkButton>
            </LgNavLinkItem>

            <LgNavLinkItem
              bgColor={activeTab === 'Saved' ? activeTabBg : nonActiveTabBg}
            >
              <CgPlayListAdd
                size="20"
                color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
              />
              <LgNavLinkButton onClick={onClickTabSaved}>
                <NavLink to="/saved-videos">
                  <LgNavLinkText
                    color={
                      activeTab === 'Saved' ? activeTabColor : nonActiveTabColor
                    }
                    fontWeight={activeTab === 'Saved' ? 'bold' : 'normal'}
                  >
                    SavedVideos
                  </LgNavLinkText>
                </NavLink>
              </LgNavLinkButton>
            </LgNavLinkItem>
          </LgNavLinksSectionList>
          <ContactSection>
            <ContactUsText color={activeTabColor}>CONTACT US</ContactUsText>
            <SocialMediaLinks>
              <MediaIcon>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </MediaIcon>
              <MediaIcon>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </MediaIcon>
              <MediaIcon>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaIcon>
            </SocialMediaLinks>
            <ContactDescription color={activeTabColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactSection>
        </SideBarDiv>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SideNavBar
