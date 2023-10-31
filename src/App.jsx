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
            title={elem.category}
            films={elem.images.map((image) => {
              return <img src={image} />;
            })}
          />
        );
      })}
    </>
  );
}

export default App;
