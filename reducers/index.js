import { combineReducers } from 'redux'

const dataApps = {

}

const applicationReducers = (state = dataApps, action) => {
  switch (action.type) {
    case '':
      // return {...state, dataUser: action.value}
    default:
      return state;
  }
}

export default combineReducers({
  applicationReducers
})
