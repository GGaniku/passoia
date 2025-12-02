import Header from "./components/Header/Header.jsx";
import Lancamentos from "./components/Lancamentos/Lancamentos.jsx";
import banner from "./assets/img/Banner.jpg";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <img className="banner" src={banner} alt="Banner Principal" />
      <Lancamentos />
    </>
  );
}

export default App;