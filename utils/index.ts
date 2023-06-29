export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0c3461e8a7msh6631fa2742d23edp1e90f8jsn4de8c2d9cd93",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
