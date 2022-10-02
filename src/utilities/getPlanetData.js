const getPlanetData = (id) => {
  const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`
  fetch(url)
    .then(res => { return res.json() }) 
}

export default getPlanetData