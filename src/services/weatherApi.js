import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://weatherapi-com.p.rapidapi.com/'

const weatherHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}

// const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';


const requestWeather = (url) => ({url, headers: weatherHeaders})

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getForecastWeather: builder.query({
            query: (location) => requestWeather(`forecast.json?q=${location}&days=3`)
        }),
        getSearchWeather: builder.query({
            query: (search) => requestWeather(`search.json?q=${search}&days=3`)
        })
    })
})

export const { useGetForecastWeatherQuery, useGetSearchWeatherQuery } = weatherApi

// 
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
