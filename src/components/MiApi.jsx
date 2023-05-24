import React, { useState, useEffect, Fragment } from "react";

const Busqueda = () => {
  
  //cofigurar hooks, seteo useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Funcion que trae datos de la api
  const url = "https://api.sampleapis.com/simpsons/characters";
  const showData = async () => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setUsers(data);
  };

  //Busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  //filtrado
  const resultado = !search
    ? users
    : users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  useEffect(() => {
    showData();
  }, []);

  //rederizado de la vista
  return (
    <Fragment>
      <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
          className="form-control"
        />
         <div className="table-responsive-sm">
          <table className="table table-warning table-striped table-hover table-bordered mt-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Nombre Común</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.normalized_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Busqueda;
