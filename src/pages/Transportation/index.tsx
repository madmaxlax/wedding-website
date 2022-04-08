import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const TransportationPage = () => {
  return (
    <>
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
                    is the one of the eastern lakes among the Finger Lakes. It is about a 3.5 to 4 hour drive from NYC.
                    <br />
                    Syracuse is less than 40 minutes away, the easiest airport would be{' '}
                    <a
                      href="https://www.momondo.com/flight-search/TPA-SYR/2022-09-02/2022-09-05?sort=bestflight_a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SYR
                    </a>
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
                  <p>{'We are working on transportation. TBD'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="map" className="fh5co-map">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1XzQSxnPg2KxNUmi35xLiUCDjpRBed58W&ehbc=2E312F"
                  width="100%"
                  height="480"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
