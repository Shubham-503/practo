import "./App.css";
import Appointment from "./components/Appointment";
import Article from "./components/Article";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Consult from "./components/Consult";
import Footer from "./components/Footer";
import Header from "./components/Header";
import H_card from "./components/H_card";
import Review from "./components/Review";
import Download from "./Download";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <H_card />
      <Cards />
      <Consult button={true} />
      <Appointment />
      <Article />
      <hr />
      <Review />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
