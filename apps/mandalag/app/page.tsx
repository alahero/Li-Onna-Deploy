import Navbar from './components/navbar';
import Hero from './components/hero';
import Divisions from './components/divisions';
import Portfolio from './components/portfolio';
import Newsletter from './components/newsletter';
import Press from './components/press';
import Footer from './components/footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divisions />
      <Portfolio />
      <Newsletter />
      <Press />
      <Footer />
    </main>
  );
}
