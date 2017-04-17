export default function catsReducer(state = {loading: false, pictures: []}, action){
  switch(action.type){
    case 'FETCH_CATS':
      return {...state, pictures: [...state.pictures, ...action.payload]}
    default:
      return state
  }
}
