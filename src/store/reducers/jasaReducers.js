import { SAVE_JASA } from '../actions/jasaActions';

const jasaState = {
  all: [],
};

const jasaReducers = (state = jasaState, action) => {
  switch (action.type) {
    case SAVE_JASA:
      return { ...state, all: action.data };
    default:
      return state;
  }
};

export default jasaReducers;
