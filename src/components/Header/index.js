import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {SiYoutubegaming} from 'react-icons/si'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  RouteLink,
  HeaderDiv,
  WebsiteLogo,
  NavHeaderLinks,
  NavIconLink,
  ThemeButton,
  ProfileImg,
  SmLogoutButton,
  LgLogoutButton,
  NavLinkButton,
  ModalContainer,
  ModalDescription,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  SmDevicePopupRouteLinksDiv,
  SmDeviceNavLinks,
  SmDeviceLinkItem,
  SmNavLinkButton,
  SmDeviceLinkText,
  PopupCloseButton,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme, activeTab, changeTab} = value
          const activeTabBg = isDarkTheme ? '#606060' : ' #d7dfe9'
          const nonActiveTabBg = isDarkTheme ? '#181818' : '#ffffff'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const onClickToggleTheme = () => {
            toggleTheme()
          }

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
            <>
              <HeaderDiv bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
                <RouteLink to="/">
                  <WebsiteLogo
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </RouteLink>
                <NavHeaderLinks>
                  <NavIconLink>
                    <ThemeButton
                      onClick={onClickToggleTheme}
                      data-testid="theme"
                    >
                      {isDarkTheme ? (
                        <BsBrightnessHigh size="25" color="#ffffff" />
                      ) : (
                        <BsMoon size="25" />
                      )}
                    </ThemeButton>
                  </NavIconLink>
                  <NavIconLink>
                    <Popup
                      modal
                      trigger={
                        <NavLinkButton onClick={this.onClickShowSmNavLinks}>
                          <GiHamburgerMenu
                            size="23"
                            color={isDarkTheme ? '#ffffff' : '#181818'}
                          />
                        </NavLinkButton>
                      }
                    >
                      {close => (
                        <SmDevicePopupRouteLinksDiv
                          bgColor={isDarkTheme ? '#181818' : '#ffffff'}
                        >
                          <PopupCloseButton onClick={() => close()}>
                            <AiOutlineClose
                              size="25"
                              color={isDarkTheme ? '#ffffff' : '#181818'}
                            />
                          </PopupCloseButton>
                          <SmDeviceNavLinks>
                            <SmDeviceLinkItem
                              bgColor={
                                activeTab === 'Home'
                                  ? activeTabBg
                                  : nonActiveTabBg
                              }
                            >
                              <AiFillHome
                                size="20"
                                color={
                                  activeTab === 'Home' ? '#ff0b37' : '#909090'
                                }
                              />
                              <SmNavLinkButton onClick={onClickTabHome}>
                                <RouteLink to="/">
                                  <SmDeviceLinkText color={textColor}>
                                    Home
                                  </SmDeviceLinkText>
                                </RouteLink>
                              </SmNavLinkButton>
                            </SmDeviceLinkItem>

                            <SmDeviceLinkItem
                              bgColor={
                                activeTab === 'Trending'
                                  ? activeTabBg
                                  : nonActiveTabBg
                              }
                            >
                              <HiFire
                                size="25"
                                color={
                                  activeTab === 'Trending'
                                    ? '#ff0b37'
                                    : '#909090'
                                }
                              />
                              <SmNavLinkButton onClick={onClickTabTrending}>
                                <RouteLink to="/trending">
                                  <SmDeviceLinkText color={textColor}>
                                    Trending
                                  </SmDeviceLinkText>
                                </RouteLink>
                              </SmNavLinkButton>
                            </SmDeviceLinkItem>

                            <SmDeviceLinkItem
                              bgColor={
                                activeTab === 'Gaming'
                                  ? activeTabBg
                                  : nonActiveTabBg
                              }
                            >
                              <SiYoutubegaming
                                size="25"
                                color={
                                  activeTab === 'Gaming' ? '#ff0b37' : '#909090'
                                }
                              />
                              <SmNavLinkButton onClick={onClickTabGaming}>
                                <RouteLink to="/gaming">
                                  <SmDeviceLinkText color={textColor}>
                                    Gaming
                                  </SmDeviceLinkText>
                                </RouteLink>
                              </SmNavLinkButton>
                            </SmDeviceLinkItem>

                            <SmDeviceLinkItem
                              bgColor={
                                activeTab === 'Saved'
                                  ? activeTabBg
                                  : nonActiveTabBg
                              }
                            >
                              <CgPlayListAdd
                                size="25"
                                color={
                                  activeTab === 'Saved' ? '#ff0b37' : '#909090'
                                }
                              />
                              <SmNavLinkButton onClick={onClickTabSaved}>
                                <RouteLink to="/saved-videos">
                                  <SmDeviceLinkText color={textColor}>
                                    SavedVideos
                                  </SmDeviceLinkText>
                                </RouteLink>
                              </SmNavLinkButton>
                            </SmDeviceLinkItem>
                          </SmDeviceNavLinks>
                        </SmDevicePopupRouteLinksDiv>
                      )}
                    </Popup>
                  </NavIconLink>
                  <NavIconLink>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavIconLink>
                  <NavIconLink>
                    <Popup
                      modal
                      trigger={
                        <SmLogoutButton
                          color={isDarkTheme ? '#ffffff' : '#181818'}
                        >
                          <FiLogOut size="23" />
                        </SmLogoutButton>
                      }
                    >
                      {close => (
                        <ModalContainer
                          bgColor={isDarkTheme ? '#212121' : '#ffffff'}
                        >
                          <ModalDescription
                            color={isDarkTheme ? '#ebebeb' : '#00306e'}
                          >
                            Are you sure, you want to logout?
                          </ModalDescription>
                          <ButtonsContainer>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                              color={isDarkTheme ? '#cbd5e1' : '#94a3b8'}
                              borderColor={isDarkTheme ? '#cbd5e1' : '#94a3b8'}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainer>
                        </ModalContainer>
                      )}
                    </Popup>
                  </NavIconLink>
                  <NavIconLink>
                    <Popup
                      modal
                      trigger={<LgLogoutButton>Logout</LgLogoutButton>}
                    >
                      {close => (
                        <ModalContainer
                          bgColor={isDarkTheme ? '#212121' : '#ffffff'}
                        >
                          <ModalDescription
                            color={isDarkTheme ? '#ebebeb' : '#00306e'}
                          >
                            Are you sure, you want to logout?
                          </ModalDescription>
                          <ButtonsContainer>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                              color={isDarkTheme ? '#cbd5e1' : '#94a3b8'}
                              borderColor={isDarkTheme ? '#cbd5e1' : '#94a3b8'}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainer>
                        </ModalContainer>
                      )}
                    </Popup>
                  </NavIconLink>
                </NavHeaderLinks>
              </HeaderDiv>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(Header)
