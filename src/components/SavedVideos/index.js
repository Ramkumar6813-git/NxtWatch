import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedVideosBgDiv,
  NavBar,
  MainDisplaySection,
  SavedVideosBanner,
  TrendingIconDiv,
  SavedVideosHeading,
  SavedVideosList,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <SavedVideosBgDiv>
            <NavBar>
              <SideNavBar />
            </NavBar>
            <MainDisplaySection bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
              {savedVideos.length > 0 ? (
                <>
                  <SavedVideosBanner
                    data-testid="banner"
                    bgColor={isDarkTheme ? '#231f20' : '#f1f1f1'}
                  >
                    <TrendingIconDiv
                      bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}
                    >
                      <HiFire size="30" />
                    </TrendingIconDiv>
                    <SavedVideosHeading
                      color={isDarkTheme ? '#f9f9f9' : '#231f20'}
                    >
                      Trending
                    </SavedVideosHeading>
                  </SavedVideosBanner>
                  <SavedVideosList
                    bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}
                  >
                    {savedVideos.map(eachVideo => (
                      <TrendingVideoCard
                        key={eachVideo.id}
                        videoDetails={eachVideo}
                      />
                    ))}
                  </SavedVideosList>
                </>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote noteColor={noteColor}>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </MainDisplaySection>
          </SavedVideosBgDiv>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
