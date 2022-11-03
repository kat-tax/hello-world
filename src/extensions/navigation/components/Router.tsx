import React from 'react';
import {useState, useLayoutEffect} from 'react';
import {Router as BaseRouter} from 'react-router';
import type {History} from 'history';

export interface RouterProps {
  history: History;
  basename?: string;
  children?: React.ReactNode;
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 *
 * @see https://reactrouter.com/docs/en/v6/routers/history-router
 */
export function Router({basename, children, history}: RouterProps) {
  const [state, setState] = useState({
    location: history.location,
    action: history.action,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <BaseRouter
      navigator={history}
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
    />
  );
}

if (__DEV__) {
  Router.displayName = 'Router';
}
