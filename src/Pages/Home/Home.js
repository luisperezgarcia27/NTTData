import React from "react";
import { useState } from "react";

import "./Home.css";
const Home = () => {
  const dataJson = {
    status: 200,
    data: [
      {
        tipoDocumento: "cedula",
        numeroDocumento: "123456789",
        primerNombre: "Luis",
        segundoNombre: "Eduardo",
        primerApellido: "Pérez",
        segundoNombre: "García",
      },
    ],
  };

  const [data, setData] = useState({
    tipoDocumento: "cedula",
    numeroDocumento: "",
  });

  const [dataForm, setDataForm] = useState({
    primerApellido: "",
    primerNombre: "",
  });

  const [currentTab, setCurrentTab] = useState("form");

  const HandleData = () => {
    let flagData = false;
    if (data.numeroDocumento.length > 8 && data.numeroDocumento.length < 11) {
      dataJson.data.forEach((item) => {
        if (
          data.numeroDocumento === item.numeroDocumento &&
          data.tipoDocumento === item.tipoDocumento
        ) {
          flagData = true;
          setDataForm({
            primerApellido: item.primerApellido,
            primerNombre: item.primerNombre,
          });
          setCurrentTab("container");
        } else {
          alert("No se encontro ese numero de documento");
        }
      });
    } else {
      alert("El numero deber ser mayor a 8 y menor a 11 caracteres");
    }
  };

  if (currentTab === "form") {
    return (
      <div className="Home">
        <div className="Home__Container">
          <div className="Home__Container__Form">
            <label>Tipo de documento</label>
            <select
              onChange={(e) =>
                setData({
                  ...data,
                  tipoDocumento: e.target.value,
                })
              }
              value={data.tipoDocumento}
            >
              <option value="cedula">Cédula de ciudadanía</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="Home__Container__Form">
            <label>Número de documento</label>
            <input
              type="text"
              onChange={(e) =>
                setData({
                  ...data,
                  numeroDocumento: e.target.value,
                })
              }
              value={data.numeroDocumento}
            />
          </div>
          <div
            className={`Home__Container__Button ${
              data.numeroDocumento === "" ? "ButtonDisabled" : "ButtonEnabled"
            } `}
          >
            <button
              disabled={data.numeroDocumento === ""}
              onClick={() => HandleData()}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Home">
        <div className="Home__Container">
          <div className="Home__Container__Content">
            <label>Primer apellido</label>
            <input readOnly type="text" value={dataForm.primerApellido} />
          </div>
          <div className="Home__Container__Content">
            <label>Primer nombre</label>
            <input readOnly type="text" value={dataForm.primerNombre} />
          </div>
          <div className="Home__Container__Button ButtonEnabled">
            <button onClick={() => setCurrentTab("form")}>Volver</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
