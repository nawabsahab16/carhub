export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'aedff815f2mshff4e5da66ca3a11p1d4ce8jsna3fd75571a23',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}


 const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carolla', { headers:headers,});


 const result = await response.json();

 return result;
}