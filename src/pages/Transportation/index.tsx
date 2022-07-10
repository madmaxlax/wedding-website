import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { MapEmbed } from '../Accommodation/MapEmbed';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const TransportationPage = () => {
  return (
    <React.Fragment>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>Transportation</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skantown.jpg)' }}></div>
                <div className="desc">
                  <h3>Getting to Skaneateles, NY!</h3>
                  <p>
                    <strong>The Finger Lakes</strong>
                  </p>
                  <p>
                    <a href="https://goo.gl/maps/8UVgHcK3538sso6A7" target="_blank" rel="noreferrer">
                      Skaneateles
                    </a>{' '}
                    is the one of the eastern most Finger Lakes. It is about a 3.5 to 4 hour drive from NYC.
                    <br />
                    <br />
                    The closest airport is Syracuse{' '}
                    <a
                      href="https://www.momondo.com/flight-search/TPA-SYR/2022-09-02/2022-09-05?sort=bestflight_a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SYR
                    </a>{' '}
                    (less than 40 minutes away).
                    <br />
                    <br />
                    For more flight options, Rochester is about an hour away.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skan-lake.jpg)' }}></div>
                <div className="desc">
                  <h3>Getting around at the Lake</h3>
                  <p>
                    <strong>Lots of driving!</strong>
                  </p>
                  <p>
                    <strong>You will need a car to get around Skaneateles.</strong> Ubers are rarely available in the
                    area.
                  </p>
                  <p>
                    {
                      'We will have transportation for the wedding and reception on Saturday Sept 3. More details to come.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
