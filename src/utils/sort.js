const sort = edges => {
  return edges.sort((a, b) => {
    const aDownloads = a.node.collected.npm.downloads[1].count
    const bDownloads = b.node.collected.npm.downloads[1].count

    return bDownloads - aDownloads
  })
}

export default sort
