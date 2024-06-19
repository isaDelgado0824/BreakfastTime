import React from 'react'
import types from './types';

const reducer2 = (state = [], action) => {
    switch(action.type) {
      case (types.add):
        return [...state, action.payload];
      case (types.remove):
        return state.filter(product => product.productName !== action.payload)

      case (types.empty):
        return state = [];
      default:
        return state;
    }
}

export default reducer2
