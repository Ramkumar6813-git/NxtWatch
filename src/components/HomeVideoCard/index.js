import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  LinkRouteCard,
  VideoCardDiv,
  VideoThumbnail,
  VideoChannelDetailsSection,
  VideoDetails,
  VideoTitle,
  ChannelDetails,
  ChannelProfileImg,
  ChannelName,
  Span,
  ViewsCount,
  PublishedDate,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoData} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoData
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkRouteCard to={`/videos/${id}`}>
            <VideoCardDiv bgColor={isDarkTheme ? '#000000' : '#f8fafc'}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoChannelDetailsSection>
                <ChannelProfileImg src={profileImageUrl} alt="channel logo" />
                <VideoDetails>
                  <VideoTitle color={isDarkTheme ? '#f1f1f1' : '#212121'}>
                    {title}
                  </VideoTitle>
                  <ChannelDetails>
                    <ChannelName>{name}</ChannelName>
                    <ViewsCount>
                      <Span>&#8226;</Span> {viewCount} views
                    </ViewsCount>
                    <PublishedDate>
                      <Span>&#8226;</Span>
                      {publishedAt}
                    </PublishedDate>
                  </ChannelDetails>
                </VideoDetails>
              </VideoChannelDetailsSection>
            </VideoCardDiv>
          </LinkRouteCard>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
