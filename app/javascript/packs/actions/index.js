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

export const loadPictures = (pictures) => {
  return (dispatch, getState) => {
    dispatch(showLoading())
    setTimeout(() => {
      dispatch(hideLoading())
      dispatch(setPictures(pictures))
    }, 2000)
  }
}
