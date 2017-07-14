const pictures = (state = [], action) => {
  switch (action.type) {
    case 'SET_PICTURES':
      return [].concat(action.pictures)
    default:
      return state
  }
}

export default pictures
