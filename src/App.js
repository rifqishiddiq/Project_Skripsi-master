import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicLayout from './components/LandingPageComponents/BasicLayout';
import routes from './config/routes';
import privateRoutes from './config/privateRoutes';
import AdminLayout from './components/AdminComponents/AdminLayout';

function App() {
  return (
    <div className="bg-main-dark-bg">
      <Routes>
        <Route element={<BasicLayout />}>
          {routes.map((r, index) => (
            <Route
              key={index}
              path={r.path}
              exact={r.exact}
              element={(r.element)}
            />
          ))}
        </Route>
        <Route element={<AdminLayout />}>
          {privateRoutes.map((r, index) => (
            <Route
              key={index}
              path={r.path}
              exact={r.exact}
              element={(r.element)}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
