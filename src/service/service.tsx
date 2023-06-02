const API = "https://swapi.dev/api";

export const getPeopleService = async (page?: number) => {
  const response = await fetch(`${API}/people/?page=${page}`);
  const data = await response.json();
  return data.results;
};

export const getVehiclesService = async (urlLit: string[]) => {
  let vehicles = [];
  for (let i = 0; i < urlLit.length; i++) {
    const response = await fetch(`${urlLit[i]}`);
    const data = await response.json();
    vehicles.push(data);
  }
  return vehicles;
};

export const getCharacterService = async (id: string) => {
  const response = await fetch(`${API}/people/${id}`);
  const data = await response.json();
  return data;
};

export const getWorldService = async (homeworld: string) => {
    const response = await fetch(`${homeworld}`);
    const data = await response.json();
    return data.name;
}

export const getSpeciesService = async (species: string) => { 
    const response = await fetch(`${species}`);
    const data = await response.json();
    return data.name;
}