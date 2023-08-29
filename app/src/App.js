import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { useCookies } from "react-cookie";

function App() {

  const [name, setName] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handlerChange = (e) => {
    setName(e.target.value);
  };
  const handlerDelete = () => {
    removeCookie("name");
  };
  const handleSubmit = () => {
    setCookie("name", name);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" onChange={handlerChange} />
        </label>
        <input type="submit" value="保存" />
        <button onClick={handlerDelete}>削除</button>
        {cookies.name}
      </form>
    </div>
  );
}

export default App;
