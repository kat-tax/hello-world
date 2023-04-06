import {Router, Routes, Route} from 'extensions/navigation';
import {App} from 'interface/layout/App';
import {Home} from 'interface/routes/Home';
import {Icons} from 'interface/routes/Icons';
import {Settings} from 'interface/routes/Settings';
import {history} from 'store';

export function Navigator() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="icons" element={<Icons/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
