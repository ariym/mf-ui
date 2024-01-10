export const BASE_URL = import.meta.env.VITE_BASE_API_URL



export async function fetchQueue(){
  return await fetch(`${BASE_URL}/job`, {
    method: 'GET',
    headers: {'Content-Type':'application/json'}
  })
  .then(raw=>raw.json())
  .catch(err => {
    throw err;
  })
}