import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/tabs';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>}></Route>

        <Route path="tabs/">
          <Route index element={<Tabs />} />
          <Route path=":tabsId" element={<Tabs />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        ></Route>
      </Route>
    </Routes>
  </Router>
);
