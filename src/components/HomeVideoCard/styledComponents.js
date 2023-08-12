import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkRouteCard = styled(Link)`
  text-decoration: none;
`

export const VideoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: transparent;
  @media (min-width: 576px) {
    width: 300px;
    margin-right: 10px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoChannelDetailsSection = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 15px;
`
export const ChannelProfileImg = styled.img`
  width: 40px;
  margin-right: 10px;
`
export const VideoDetails = styled.div``
export const VideoTitle = styled.p`
  margin: 0px 0px 3px 0px;
  font-weight: 500;
  color: ${props => props.color};
  font-size: 15px;
`
export const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #616e7c;
`
export const ChannelName = styled.p`
  margin: 4px 0px;
  font-size: 13px;
  font-weight: 500;
  margin-right: 10px;
`
export const ViewsCount = styled.p`
  margin: 4px 0px;
  font-size: 13px;
  font-weight: 500;
  margin-right: 10px;
`
export const PublishedDate = styled.p`
  margin: 4px 0px;
  font-size: 13px;
  font-weight: 500;
`
export const Span = styled.span`
  font-size: 15px;
  margin-right: 5px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
