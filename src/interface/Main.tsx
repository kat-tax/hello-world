import {App} from 'interface/layout/App';
import {Home} from 'interface/routes/Home';
import {Tasks} from 'interface/routes/Tasks';
import {Notes} from 'interface/routes/Notes';
import {Media} from 'interface/routes/Media';
import {Snippets} from 'interface/routes/Snippets';
import {Settings} from 'interface/routes/Settings';
import {Router, Routes, Route} from 'extensions/navigation';
import {history} from 'store';

export function Main() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="tasks" element={<Tasks/>}/>
          <Route path="notes" element={<Notes/>}/>
          <Route path="media" element={<Media/>}/>
          <Route path="snippets" element={<Snippets/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
