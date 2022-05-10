import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const OurStoryPage = () => {
  return (
    <>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>How it all came together</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/max-claire-roof.jpg)' }}></div>
                <div className="desc">
                  <h3>Thea and JG set us up! </h3>
                  <p>
                    <strong>Took us a couple of hangs then we got it goin&apos;</strong>
                  </p>
                  <p>{'...still working on this'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
