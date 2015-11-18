import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import BadgesPage from './BadgesPage';
import ButtonsPage from './ButtonsPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import CardsPage from './CardsPage';

export default
<Route path='/' component={Root}>
  <IndexRoute component={GettingStartedPage} />
  <Route path='index.html' component={HomePage} />
  <Route path='getting-started.html' component={GettingStartedPage} />
  <Route path='badges.html' component={BadgesPage} />
  <Route path='buttons.html' component={ButtonsPage} />
  <Route path='breadcrumbs.html' component={BreadcrumbsPage} />
  <Route path='cards.html' component={CardsPage} />
</Route>;
