

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const url = `https://bing-news-search1.p.rapidapi.com/news/`


export const fetchNewsApi = async (location) => {
    const res = await fetch(`${url}search?q=${location}%20Weather&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
    const data = await res.json()
    return data
}


