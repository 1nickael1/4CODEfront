export function serialize(obj) {
  let queryString = ""; //configurar a busca mongodb
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}
