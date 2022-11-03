import {App} from 'interface/layout/App';
import {Home} from 'interface/routes/Home';
import {Settings} from 'interface/routes/Settings';
import {Router, Routes, Route} from 'extensions/navigation';
import {history} from 'store';

export function Navigator() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
