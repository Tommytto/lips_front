import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'common/style/main.scss';
import { HeaderRouter } from 'app/header-router';
import { Router } from 'app/router';

const App = () => (
  <div className="h-100 d-flex flex-column">
    <header>
      <HeaderRouter />
    </header>
    <main className="col">
      <Router />
    </main>
    <footer>
        Footer
    </footer>
  </div>
);

export { App };
