import './App.css';
import Topheader from './page/topheader/Topheader';
import Header from './page/header/Header';
import Production from './page/production/Production';
import Support from './page/support/Support';
import Save from './page/save/Save';
import Anytime from './page/anytime/Anytime';
import Plan from './page/plan/Plan';

function App() {
  return (
    <div className="App">
      <Topheader />
      <Header />
      <Production />
      <Support />
      <Save />
      <Anytime />
      <Plan />
    </div>
  );
}

export default App;
