export const isAuthSelector = state => state.auth.isLoggedIn;
export const userSelector = state => state.auth.user;
export const tokenSelector = state => state.auth.token;
export const isRefreshingSelector = state => state.auth.isRefreshing;
