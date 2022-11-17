export  const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY2
  },
}

export const fetchData = async (url,options) => {
  console.log("🚀 ~ file: fetchData.js ~ line 18 ~ fetchData ~ options", options)

  const response = await fetch(url, options);
  const data = await response.json();

  return data

}