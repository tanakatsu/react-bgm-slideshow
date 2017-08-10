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
    console.log('load pictures..')
    dispatch(showLoading())

    fetch('/api/pictures')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('loaded')
      console.log(data)
      dispatch(hideLoading())
      dispatch(setPictures(data))
    })
    .catch(err => {
      console.error(err)
      dispatch(hideLoading())
    })
  }
}

export const loadJson = (url) => {
  return (dispatch, getState) => {
    console.log('load json..')
    dispatch(showLoading())

    let formData = new FormData();
    formData.append("url", url)

    fetch("/api/json_download", {
      method: 'POST',
      body: formData
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('loaded')
      console.log(data)
      dispatch(hideLoading())
      dispatch(setPictures(data))
    })
    .catch(err => {
      console.error(err)
      dispatch(hideLoading())
    })
  }
}

export const login = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const logout = () => {
  return {
    type: 'SIGN_OUT'
  }
}
