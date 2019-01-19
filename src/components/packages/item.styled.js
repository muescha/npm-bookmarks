import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const bgHover = `#f8f8f8`
const padding = `24px`

const ListItem = styled.li`
  list-style: none;
`

const ItemLink = styled.a`
  position: relative;
  display: block;
  background: #fefefe;
  border: 1px solid #eee;
  border-bottom-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;

  &:hover,
  &:focus {
    background: ${bgHover};
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  li:first-child > & {
    border-top-color: ${props => props.theme.mainColor};
  }

  li:last-child > & {
    border-bottom-style: solid;
  }
`

const ItemTitle = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #666;
  margin: 0 ${padding};
  padding: ${padding} 0 0;
`

const ItemVersion = styled.small`
  font-size: 0.6em;
  font-weight: normal;
  color: #888;
  white-space: nowrap;

  & > em {
    color: #ccc;
  }
`

const ItemTags = styled.small`
  display: block;
  font-size: 0.8em;
  font-style: italic;
  color: #888;
  padding: 4px ${padding};

  & > svg {
    top: 1px;
    color: #666;
    width: 0.9em !important;
  }
`

const ItemDownloads = styled.div`
  font-size: 1.1em;
  color: #666;
  padding: ${padding};

  & > svg {
    width: 0.7em !important;
  }
`

const DownloadsNumber = styled.span`
  color: ${props => props.theme.mainColor};
`

const DownloadsPeriod = styled.small`
  display: block;
  font-size: 0.6em;
  color: #888;

  & > svg {
    top: -1px;
  }
`

const ItemAnalyzed = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8em;
  color: #888;
  background: #f3f3f3;
  padding: 4px 16px;
  padding-top: 7px;
  line-height: 1;

  & > svg {
    color: #666;
    font-size: 0.8em;
    top: -1px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  position: relative !important;
  margin-right: 4px;
`

export {
  ListItem,
  ItemLink,
  ItemTitle,
  ItemVersion,
  ItemTags,
  ItemDownloads,
  DownloadsNumber,
  DownloadsPeriod,
  ItemAnalyzed,
  Icon,
}
