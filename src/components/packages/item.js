import React from 'react'
import PropTypes from 'prop-types'

import {
  faTags,
  faDownload,
  // faCalendar,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
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
} from './item.styled'
import date from '../../utils/date'

const Item = ({ node, tags, show }) => {
  if (!show) return false

  const metadata = node.collected.metadata
  const downloads = node.collected.npm.downloads[1]
  const analyzedAt = date(node.analyzedAt)

  return (
    <ListItem>
      <ItemLink
        href={metadata.links.npm}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ItemTitle>
          {metadata.name}
          {` `}
          <ItemVersion>
            v{metadata.version} <em>({date(metadata.date)})</em>
          </ItemVersion>
        </ItemTitle>

        <ItemTags>
          <Icon icon={faTags} />
          {tags.join(`, `)}
        </ItemTags>

        <ItemDownloads>
          <Icon icon={faDownload} />

          <DownloadsNumber>{downloads.count.toLocaleString()}</DownloadsNumber>

          <DownloadsPeriod>
            {/* <Icon icon={faCalendar} /> */}
            {date(downloads.from)} - {date(downloads.to)}
          </DownloadsPeriod>
        </ItemDownloads>

        <ItemAnalyzed>
          <Icon icon={faSyncAlt} />
          {analyzedAt}
        </ItemAnalyzed>
      </ItemLink>
    </ListItem>
  )
}

Item.propTypes = {
  node: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Item
