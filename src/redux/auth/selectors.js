export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;