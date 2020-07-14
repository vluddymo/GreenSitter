import {getJWTToken} from "./jwt-utils";

export async function fetchAllPlants(){
  const token = getJWTToken();
  const response = await fetch("/api/plants", {
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