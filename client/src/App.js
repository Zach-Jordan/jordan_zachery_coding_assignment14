import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="fade-in">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
