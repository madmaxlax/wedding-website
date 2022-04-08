import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const AccommodationPage = () => {
  return (
    <>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>Accommodation</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skan-lake.jpg)' }}></div>
                <div className="desc">
                  <h3>Lots of Options on Where to Stay</h3>
                  <p>
                    <strong>Inns, Lake House AirBnBs, and Motels!</strong>
                  </p>
                  <p>
                    {
                      'Max and Mary-Ellen snatched up as many AirBnBs in the area that they could and are now "squatting" on them for you! Details to come. Check out the map below:'
                    }
                  </p>
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
