import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';
import MainLayout from 'layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map(({ path, component }, index) => (
          <Route path={path} element={component} key={index} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
