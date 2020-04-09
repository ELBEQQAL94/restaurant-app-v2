export function parseJwt(token) {
  localStorage.token = token;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const dataJWT = JSON.parse(window.atob(base64));
  return dataJWT;
}
