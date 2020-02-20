import React from "react"
import image from "./glas-metohije-logo-300x287.jpg"

const Donacija = () => {
  return (
    <div className="l-about-content">
      <div className="l-img">
        <img src={image} alt="o nama" />
      </div>
      <div className="l-content">
        <p>
          Молимо људе добре воље који су у могућности да помогну својом уплатом
          на рачун и покажу да нису заборављена наша браћа и сестре са Косова и
          Метохије.
        </p>
        <h3 style={{ marginTop: "30px" }}>ГЛАС МЕТОХИЈЕ</h3>
        <p>
          <strong>динарски рачун 265176031000084146</strong>
          <br />
          <strong>Raifaisen banka</strong>
        </p>
        <p>
          <strong>девизни рачун 265100000020018620</strong>
          <br />
          <strong>Raifaisen banka</strong>
        </p>
      </div>
    </div>
  )
}

export default Donacija
