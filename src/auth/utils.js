/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */

import store from "@/store";

// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = async () => {
  return true;
};

/**
 * Return User
 */

// eslint-disable-next-line arrow-body-style
export const getUserData = () => {
  return store.state.user.AppActiveUser;
};
