import React from 'react';
import { Router, RouteComponentProps } from "@reach/router";
import Canvas from './page/canvas';

const App : React.FC = () => (

    <Router>
      <RouterPage  path="/" pageComponent={<Canvas />} />
    </Router>
);

export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;
