const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectItems = state => state.contacts.items;

export {selectIsLoggedIn, selectUser, selectIsRefreshing, selectItems};