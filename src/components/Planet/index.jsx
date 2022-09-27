import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './index.css'
const Planet = ({englishName, name, updateMenu}) => {
  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

  const updateData = (data) => {
    let {name, avgTemp, perihelion, aphelion, moons, mass, density, gravity, discoveredBy, discoveryDate} = data

    avgTemp = fahrenheitToCelsius(avgTemp).toFixed(2)
    const moonsNumber = moons && moons.length

    mass = mass.massValue

    const planetInfo = {
      name,
      avgTemp,
      perihelion,
      aphelion,
      moonsNumber,
      mass,
      density,
      gravity,
      discoveredBy,
      discoveryDate
    }

    setPlanetData(planetInfo)
  }
 
  const getPlanetInfo = () => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${englishName}`
    fetch(url)
      .then(res => res.json())
      .then(data => updateData(data))
  }

  const [planetData, setPlanetData] = useState({})

  useEffect( () => {
    getPlanetInfo();
    updateMenu()
  }, [name])



  return (
    <main className="planet">
      <div className="wrapper d-grid two-columns rs">
        <div className="planet-data">
          <h2 className="only-mobile mb-20">
            {name}
          </h2>
          <div className="planet-img">
            <img src={`img/${name.toLowerCase()}.png`} alt="Imagen sobre neptuno" />
            <div className="planet-info one">
              <p><span className="mt-0"> {planetData.avgTemp} ° C </span></p>
            </div>
            <div className="planet-info two">
              <p>Distancia mínima al Sol: <span> {planetData.perihelion} </span> </p>
            </div>
            <div className="planet-info three">
              <p>Distancia máxima al Sol: <span> {planetData.aphelion}  </span> </p>
            </div>
          </div>
        </div>
        <div className="extra-data">
          <h1 className='heading-1 t-s only-desktop'> {name}</h1>
          <p className="center-content t-s tac">
            <Icon icon="emojione:full-moon" color="white" width="40" height="40" />
            <span className="ml-10 t-s">Tiene <b>{planetData.moonsNumber || 0}</b> {planetData.moonsNumber === 1 ? 'luna' : 'lunas'} </span>
          </p>
          <div className="grid-info">
            <div className="item">
              <p><Icon icon="fa-solid:weight-hanging" width="30px" height="30px" /></p>
              <p>Masa</p>
              <p>{planetData.mass}</p>
            </div>
            <div className="item">
              <p><Icon icon="fa6-solid:person-falling" width="30px" height="30px" /></p>
              <p>Gravedad</p>
              <p>{planetData.gravity}</p>
            </div>
            <div className="item">
              <p><Icon icon="fluent:text-density-16-filled" width="30px" height="30px" /></p>
              <p>Densidad</p>
              <p>{planetData.density}</p>
            </div>
          </div>
            {planetData.discoveredBy != "" && (
              <div className="discovered">
                <Icon icon="entypo:magnifying-glass" width="60px" height="60px"/>
                <p>
                Fue descubierto por {planetData.discoveredBy} el {planetData.discoveryDate}
                </p>
              </div>
            )}
        </div>
      </div>
    </main>
  )
}

export default Planet