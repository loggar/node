const resp = await fetch("https://jsonplaceholder.typicode.com/users");
const users = resp.json();
export { users };