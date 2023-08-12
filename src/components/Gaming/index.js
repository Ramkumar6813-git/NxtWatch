import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import GameVideoCard from '../GameVideoCard'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  GamingBgDiv,
  NavBar,
  MainDisplaySection,
  GamingBanner,
  GamingIconDiv,
  GamingHeading,
  LoaderContainer,
  GamingVideoList,
  GamingSection,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GameVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <GamingBgDiv
                data-testid="gaming"
                bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
              >
                <NavBar>
                  <SideNavBar />
                </NavBar>
                <MainDisplaySection
                  bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}
                >
                  <GamingBanner bgColor={isDarkTheme ? '#231f20' : '#f1f1f1'}>
                    <GamingIconDiv
                      data-testid="banner"
                      bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}
                    >
                      <SiYoutubegaming size="30" />
                    </GamingIconDiv>
                    <GamingHeading color={isDarkTheme ? '#f9f9f9' : '#231f20'}>
                      Gaming
                    </GamingHeading>
                  </GamingBanner>
                  <GamingSection bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
                    {this.renderGamingVideos()}
                  </GamingSection>
                </MainDisplaySection>
              </GamingBgDiv>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
