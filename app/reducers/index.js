
import axios from 'axios';
// import Candy from '../../server/api/candy';


const initialState = {
  candies: []
}

const SEE_ALL_CANDY = 'SEE_ALL_CANDY';

export const seeAllCandy = (candies) => ({
  type: SEE_ALL_CANDY,
  candies
})

export const getAllCandy = () => {
  return async (dispatch) => {
    const { data } = await axios.get('./api/candy');
    dispatch(seeAllCandy(data));
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEE_ALL_CANDY: {
      return { ...state, candies: action.candies }
    }
    
    default:
      return state
  }
}

export default rootReducer
