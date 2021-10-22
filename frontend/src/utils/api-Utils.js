import {getJWTToken} from "./jwt-utils";


export async function fetchSearchQuery(image) {

  const token = getJWTToken();
  const response = await fetch(`/api/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({base64String: image.toLocaleString()}),
  });
    if (response.status !== 200) {
      throw new Error('invalid response');
    }

    return response.json();
}
