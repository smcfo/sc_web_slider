import "./App.css";
import { useState } from "react";
import data from "./pages.json";
function App() {
  console.log(data);
  const { pages, refeshTime, transitionTime } = data;
  const [pos, setPos] = useState(0);
  setTimeout(function () {
    document.location.reload(true);
  }, refeshTime);
  setTimeout(function () {
    if (pos < pages.length - 1) setPos(pos + 1);
    else setPos(0);
  }, transitionTime);
  return (
    <div className="App">
      {pages.map((page, index) => {
        if (page.type === "wpage")
          return (
            <iframe
              key={index}
              src={page.url}
              title="description"
              style={{ display: index === pos ? "block" : "none" }}
            />
          );
        if (page.type === "img")
          return (
            <img
              src={page.url}
              key={index}
              alt={page.name}
              style={{ display: index === pos ? "block" : "none" }}
            />
          );
        return <div key={index} />;
      })}
    </div>
  );
}

export default App;
