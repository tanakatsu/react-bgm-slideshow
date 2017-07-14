export const showLoading = () => {
  return {
    type: 'SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  }
}

export const setPictures = (pictures) => {
  return {
    type: 'SET_PICTURES',
    pictures
  }
}
