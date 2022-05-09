import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main/Main';
import { AccommodationPage } from './pages/Accommodation';
import { ActivitiesPage } from './pages/Activities';
import { MainPage } from './pages/MainPage';
import { NotMadeYet } from './pages/NotMadeYet';
import { OurStoryPage } from './pages/OurStory';
import { TransportationPage } from './pages/Transportation';
import { WhenAndWherePage } from './pages/WhenAndWhere';

const Routing = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <>
            <Main
              headerBackgroundImages={['/images/ring-pose.jpg']}
              headerContent={
                <>
                  <h1>We&apos;re Getting married!</h1>
                  <h2>Claire Hennigan &amp; Max Struever</h2>
                  <p>
                    <span>3.Sep.2022</span>
                  </p>
                </>
              }
            >
              <MainPage />
            </Main>
          </>
        }
      />

      <Route
        path={'/when-and-where'}
        element={
          <>
            <Main
              headerContent={
                <>
                  {/* <h1>Mawiage</h1> */}
                  <h2>Weekend Details!</h2>
                  <p>
                    <span>When and Where</span>
                  </p>
                </>
              }
            >
              <WhenAndWherePage />
            </Main>
          </>
        }
      />
      <Route
        path={'/transportation'}
        element={
          <>
            <Main
              headerContent={
                <>
                  {/* <h1>Mawiage</h1> */}
                  <h2>Transportation</h2>
                  <p>
                    <span>Getting to and around in the Finger Lakes</span>
                  </p>
                </>
              }
            >
              <TransportationPage />
            </Main>
          </>
        }
      />
      <Route
        path={'/activities'}
        element={
          <>
            <Main
              headerContent={
                <>
                  {/* <h1>Mawiage</h1> */}
                  <h2>Activities</h2>
                  <p>
                    <span>Ideas on what to do while yall are in town besides wedding things</span>
                  </p>
                </>
              }
            >
              <ActivitiesPage />
            </Main>
          </>
        }
      />
      <Route
        path={'/accommodation'}
        element={
          <>
            <Main
              headerContent={
                <>
                  {/* <h1>Mawiage</h1> */}
                  <h2>Accommodation Options</h2>
                  <p>
                    <span>Where to stay for Labor Day Weekend</span>
                  </p>
                </>
              }
            >
              <AccommodationPage />
            </Main>
          </>
        }
      />
      <Route
        path={'/our-story'}
        element={
          <>
            <Main
              headerContent={
                <>
                  {/* <h1>Mawiage</h1> */}
                  <h2>Our Story</h2>
                  <p>
                    <span>Met before the pandy and got stuck together</span>
                  </p>
                </>
              }
            >
              <OurStoryPage />
            </Main>
          </>
        }
      />
      {/*
      <RouteWithLayout component={MainPage} exact layout={Main} path="/main/:pageName" />
      <RouteWithLayout component={NotMadeYet} exact layout={Minimal} 
      layoutprops={{}} path="/404-not-found" /> */}
      <Route
        path={'/404-not-found'}
        element={
          <Main
            headerContent={
              <>
                <h2>Page not found</h2>
                <p>
                  <span>URL no bueno</span>
                </p>
              </>
            }
          >
            <NotMadeYet />
          </Main>
        }
      />
      <Route
        path="*"
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
