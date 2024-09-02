import './App.css';
import { About } from './components/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { Portifolio } from './components/Portifolio/Portifolio';
import { Profile } from './components/Profile/Profile';
import { Services } from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <hr/>
      <About/>
      <hr/>
      <Services/>
      <hr/>
      <Portifolio/>
    </div>
  );
}

export default App;
