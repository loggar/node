const isOAuthTokenValid = (token) => {
  const BASE_API = "https://www.googleapis.com/oauth2/v1/tokeninfo";
  return new Promise((resolve, reject) => {
    fetch(`${BASE_API}?access_token=${token}`, {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then(({ expires_in: timeout = 0 }) => {
        if (timeout > 0) resolve("Token is valid");
        reject(new Error("Token has expired"));
      });
  });
};

export default isOAuthTokenValid;
