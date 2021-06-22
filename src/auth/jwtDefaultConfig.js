export default {
  // Endpoints
  loginEndpoint: "api/user/login",
  registerEndpoint: "api/user/register",
  logoutEndpoint: "api/user/logout",

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: "Bearer",

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: "token",
  storageRefreshTokenKeyName: "refreshToken",
};
