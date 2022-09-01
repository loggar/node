//node 18
const getAPI = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");

  if (res.ok) {
    const data = await res.json();

    console.log(data);
  }
};
