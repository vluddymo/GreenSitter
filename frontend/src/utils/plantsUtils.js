import {getJWTToken} from "./jwt-utils";

export async function fetchAllPlants(){
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

export async function putAPlant(data) {
  const token = getJWTToken();
  return fetch('/api/shelve', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nickName: data.nickName, choiceId: data.choiceId }),
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error('invalid response');
    }

    return response.json();
  });

}