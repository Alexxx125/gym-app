export  const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': `f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa`
  }
};

export const fetchData = async (url,options) => {
  console.log("🚀 ~ file: fetchData.js ~ line 18 ~ fetchData ~ options", options)

  const response = await fetch(url, options);
  const data = await response.json();

  return data

}