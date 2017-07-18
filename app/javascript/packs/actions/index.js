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

export const loadPictures = () => {
  return (dispatch, getState) => {
    dispatch(showLoading())

    fetch('/api/pictures')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log(data)
      dispatch(hideLoading())
      dispatch(setPictures(data))
    })
    .catch(err => {
      console.error(err)
      dispatch(hideLoading())
    })
  }
}
