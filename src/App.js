import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import hero from './assets/hero.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="hero" style={{backgroundImage: `url(${hero})`}}>
        <div className="hero__content">
          <h1>Vous recherchez une pièce automobile?</h1>
          <h2>Forts d’un stock de plus de 60 000 pièces de réemploi, démontées étiquetées garanties, d’un stock de plus de 1000 véhicules en cours de démontage et des arrivages quotidiens, nous nous efforçons de vous trouver les pièces qui correspondent à votre demande.</h2>
          <button>Trouver une pièce</button>
        </div>
        <div className="box"></div>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
