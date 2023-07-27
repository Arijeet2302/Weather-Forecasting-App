

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '9b1a72d15emshd433e494e613ca8p147134jsn08e961dc50bf',
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


