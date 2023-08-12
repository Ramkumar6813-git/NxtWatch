import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  TrendingBgDiv,
  NavBar,
  MainDisplaySection,
  TrendingBanner,
  TrendingIconDiv,
  TrendingHeading,
  LoaderContainer,
  TrendingVideoList,
  VideosSection,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
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

  displayView = () => {
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
              <TrendingBgDiv
                data-testid="trending"
                bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
              >
                <NavBar>
                  <SideNavBar />
                </NavBar>
                <MainDisplaySection
                  bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}
                >
                  <TrendingBanner bgColor={isDarkTheme ? '#231f20' : '#f1f1f1'}>
                    <TrendingIconDiv
                      data-testid="banner"
                      bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}
                    >
                      <HiFire size="30" />
                    </TrendingIconDiv>
                    <TrendingHeading
                      color={isDarkTheme ? '#f9f9f9' : '#231f20'}
                    >
                      Trending
                    </TrendingHeading>
                  </TrendingBanner>
                  <VideosSection bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
                    {this.displayView()}
                  </VideosSection>
                </MainDisplaySection>
              </TrendingBgDiv>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
