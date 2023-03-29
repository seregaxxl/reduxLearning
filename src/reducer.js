const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC' :
      return {
        ...state,
        value: state.value + 1
      }
    case 'DEC' :
      return {
        ...state,
        value: state.value - 1
      }
    case 'RND' :
      if (state.value === 0) {
        return {
          ...state,
          value: action.payload
        }
      }
      return {
        ...state,
        value: state.value * action.payload
      }
    default :
      return state
  }
}

export default reducer