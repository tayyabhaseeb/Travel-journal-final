import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

const mainComponents = data.map((obj) => {
  return <Main obj={obj} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      <div>{mainComponents}</div>
    </div>
  );
}

export default App;
