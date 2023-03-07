import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile  from "./components/Reg";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
