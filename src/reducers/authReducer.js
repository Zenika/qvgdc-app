export const initialAuthState = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
  user: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('token'),
};

export const initialPlayerState = {
  player: localStorage.getItem('player') ? JSON.parse(localStorage.getItem('player'))['name'] : null,
  id: localStorage.getItem('player') ? JSON.parse(localStorage.getItem('player'))['id'] : null,
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

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'JOIN':
      return {
        player: action.payload.name,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
