import React from 'react';
import {Router, Routes, Route} from 'extensions/navigation';
import {App} from 'interface/layout/App';
import {Home} from 'interface/routes/Home';
import {history} from 'store';

export function Navigator() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
