import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Minimal from './layouts/Minimal/Minimal';
import { MinimalPage } from './pages/MinimalPage';

const Routing = () => {
  return (
    <Routes>
      <Route
        element={
          <Minimal>
            <MinimalPage />
          </Minimal>
        }
        path={'/'}
      />
      {/*
      <RouteWithLayout component={MainPage} exact layout={Main} path="/main/:pageName" />
      <RouteWithLayout component={NotMadeYet} exact layout={Minimal} layoutprops={{}} path="/404-not-found" /> */}
      <Route
        element={
          <Navigate
            to={{
              pathname: '/404-not-found',
              search: '?from=' + encodeURIComponent(window.location.href),
            }}
          />
        }
      />
    </Routes>
  );
};

export default Routing;
