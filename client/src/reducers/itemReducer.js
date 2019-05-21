import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
import uuid from 'uuid';

const initialState = {
  items: [
    { id: uuid.v4(), name: "Milk" },
    { id: uuid.v4(), name: "Eggs" },
    { id: uuid.v4(), name: "Steak" },
    { id: uuid.v4(), name: "Water" }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS: return {
      ...state
    };
    default: return state;
  }
};