import About from './components/About';
import Banner from './components/Banner';
import Donations from './components/Donations';
import Header from './components/Header';
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
      </main>
      <footer></footer>
    </>
  );
};

export default App;
