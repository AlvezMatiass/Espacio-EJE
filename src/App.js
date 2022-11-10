import "./App.css";
import Title from "./componets/title";

function App() {
  const categories = ["Home", "Food", "Wather"];
  return (
    <div className="App">
      <header className="App-header">
        <Title title='Mercado Libre'categories={categories}/>
      </header>
    </div>
  );
}

export default App;
