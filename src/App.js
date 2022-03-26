import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';

const App = (props) => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
