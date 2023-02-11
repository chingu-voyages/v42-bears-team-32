export async function apiFetchAllFoods() {
  let response = await fetch("http://localhost:8000/api/v1/foods");
  console.log("api", response);
  return response.json();
}
