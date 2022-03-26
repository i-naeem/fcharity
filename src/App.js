import About from './components/About';
import Banner from './components/Banner';
import Donations from './components/Donations';
import Footer from './components/Footer';
import Header from './components/Header';
import Mission from './components/Mission';
import Support from './components/Support';

const App = (props) => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Donations />
        <Support />
        <Mission />
      </main>
      <Footer />
    </>
  );
};

export default App;
