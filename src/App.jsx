import "./App.css";

import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header />
      {data.map((elem, index) => {
        return (
          <Section
            key={index}
            title={elem.category}
            films={elem.images.map((image, i) => {
              return <img src={image} key={i} />;
            })}
          />
        );
      })}
    </>
  );
}

export default App;
