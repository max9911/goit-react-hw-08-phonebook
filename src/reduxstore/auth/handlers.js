export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};
export const handleLogout = state => {
  state.token = '';
  state.profile = null;
};
