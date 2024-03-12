// eslint-disable-next-lin
import { Routes, Route } from 'react-router-dom';
import LocationRecommandPage from './component/LocationRecommand.jsx'
import { Main } from './component/main.jsx'
import './bootstrap/dist/css/bootstrap.css';
import './css/index.css';

function App() {
  return (
    <Routes>
      <Route exact path="/myapp" element={<Main />} />
      <Route exact path="" element={<Main />} />
      <Route exact path="/myapp/locationRecommand/recommand" element={<LocationRecommandPage />} />
    </Routes>

  );
}
export default App;


