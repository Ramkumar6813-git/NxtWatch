import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomeVideoCard from '../HomeVideoCard'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  BgContainer,
  NavBar,
  MainDisplaySection,
  BannerDiv,
  BannerDetails,
  WebsiteLogo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  VideosSection,
  SearchInputDiv,
  SearchInput,
  SearchIconButton,
  VideosList,
  LoaderContainer,
  NoDataContainer,
  NoDataImage,
  NoDataHeading,
  NoDataDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideosData: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    if (response.ok === true) {
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
        homeVideosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.setState(
      {
        searchInput: '',
      },
      this.getVideos,
    )
  }

  renderVideosView = isDarkTheme => {
    const {homeVideosData} = this.state
    return homeVideosData.length > 0 ? (
      <VideosList>
        {homeVideosData.map(eachData => (
          <HomeVideoCard videoData={eachData} key={eachData.id} />
        ))}
      </VideosList>
    ) : (
      <NoDataContainer>
        <NoDataImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoDataHeading color={isDarkTheme ? '#f1f1f1' : '#212121'}>
          No Search results found
        </NoDataHeading>
        <NoDataDescription>
          Try different key words or remove search filter
        </NoDataDescription>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </NoDataContainer>
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

  closeBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onKeyDown = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  displayView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <BgContainer
                data-testid="home"
                bgColor={isDarkTheme ? '#181818 ' : '#f9f9f9'}
              >
                <NavBar>
                  <SideNavBar />
                </NavBar>
                <MainDisplaySection
                  bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}
                >
                  {showBanner ? (
                    <BannerDiv data-testid="banner">
                      <BannerDetails>
                        <WebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton>GET IT NOW</BannerButton>
                      </BannerDetails>
                      <BannerCloseButton
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <AiOutlineClose size="20" />
                      </BannerCloseButton>
                    </BannerDiv>
                  ) : (
                    ''
                  )}

                  <VideosSection bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
                    <SearchInputDiv>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onKeyDown}
                        bgColor={isDarkTheme ? 'transparent' : '#ffffff'}
                        color={isDarkTheme ? '#f1f1f1' : '#212121'}
                      />
                      <SearchIconButton
                        data-testid="searchButton"
                        bgColor={isDarkTheme ? '#606060' : '#f1f1f1'}
                        color={isDarkTheme ? '#909090;' : '#383838'}
                        onClick={() => this.getVideos()}
                      >
                        <AiOutlineSearch size="23" />
                      </SearchIconButton>
                    </SearchInputDiv>
                    {this.displayView(isDarkTheme)}
                  </VideosSection>
                </MainDisplaySection>
              </BgContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
