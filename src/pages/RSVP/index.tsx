import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const RSVP = () => {
  return (
    <React.Fragment>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>How it all came together</h2>
            </div> */}
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSewZWhwn4ZYCP4ao0L7zdP-mkLn_U1lLcZqSvphsxpWEgCjqw/viewform?embedded=true"
                  width="100%"
                  height={400}
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
