export const initialAuthState = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
  user: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('token'),
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
