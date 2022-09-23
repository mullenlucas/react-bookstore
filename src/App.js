import { Outlet } from 'react-router-dom';
import Header from './components/Nav';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="main-sec">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
