import types from './types'


const reducer = (state, action) => {
  switch(action.type){
    case types.logged:  
      return {
        logstate: true
      }
    case types.unlogged:
      return {
        logstate: false
      }
    default:
      return state
  }
}

export default reducer
