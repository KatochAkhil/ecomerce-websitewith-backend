import { LOGIN, REGISTER } from "./constant";

const initialState = {
  user: {},
};

const mainreducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: { ...payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default mainreducer;
