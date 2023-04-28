import { useState } from "react";
import "./App.css";

function App() {
  const [tb, setTb] = useState();

  const tbChangeHandler = (e) => {
    setTb(e.target.value);
  };

  return (
    <div className="App">
      <h1>TB to Bytes</h1>

      <input
        value={tb}
        onChange={tbChangeHandler}
        type="number"
        placeholder="TB"
      />

      <p>
        {tb
          ? `${tb} TB = ${tb * 1024 * 1024 * 1024 * 1024} bytes`
          : `Please Enter the value in TeraBytes`}
      </p>

      {tb ? (
        <div>
          <p className="sub-heading">Calculation</p>

          <p>{`${tb} * 1024 * 1024 * 1024 * 1024 = ${
            tb * 1024 * 1024 * 1024 * 1024
          } bytes`}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
