import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles.sass";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [data, setData] = React.useState([]);
  const dataURL =
    "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";

  React.useEffect(() => {
    fetch(dataURL)
      .then(res => res.json())
      .then(data => setData(data.houses));
  }, [dataURL]);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "3rem" }}>
        <div
          className="tabs is-toggle is-toggle-rounded is-centered"
          style={{ marginBottom: "3rem" }}
        >
          <ul>
            {data.map((house, index) => (
              <li className={index === activeTab ? "is-active" : ""}>
                <a onClick={() => setActiveTab(index)}>{house.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="columns is-centered is-multiline is-mobile">
          {data[activeTab] &&
            data[activeTab].people.map(info => <Card {...info} />)}
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
