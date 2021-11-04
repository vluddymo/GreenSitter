import {getJWTToken} from "./jwt-utils";

export async function fetchPlantById(id) {
  const token = getJWTToken();
  const response = await fetch(`/api/shelve/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchAllPlants() {
  const token = getJWTToken();
  const response = await fetch("/api/shelve", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function putAPlant(plantData) {
  const token = getJWTToken();
  return fetch('/api/shelve', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(plantData),
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error('invalid response');
    }

    return response.json();
  });
}

export async function removeAPlant(id) {
  const token = getJWTToken();
  const response = await fetch("/api/shelve/" + id, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Deletion of plant failed")
  }
}
