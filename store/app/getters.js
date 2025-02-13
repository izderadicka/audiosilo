import { sha256 } from 'js-sha256'

export function getServerUrl (state) {
  let url = state.server
  if (state.currentCollection > 0) {
    url = new URL(state.currentCollection + '/', state.server).href
  }
  return url
}

export function getFileUrl (state) {
  return (file) => {
    return getServerUrl(state) + 'audio/' + file + '?trans=' + state.groupDetails.transcode
  }
}

export function hash (state) {
  return (route) => {
    return sha256(route)
  }
}
