import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { Attending } from './Attending';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const MainPage = () => {
  return (
    <>
      {/* <!-- end:header-top --> */}

      <div id="fh5co-couple" className="fh5co-section-gray">
        <div className="container">
          <div className="row row-bottom-padded-md animate-box">
            <div className="col-md-6 col-md-offset-3 text-center">
              <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                <img src="/images/max-tux.png" className="img-responsive" alt="Max" />
                <h3>Max Struever</h3>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
                <h2 className="amp-center">
                  <i className="icon-heart"></i>
                </h2>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                <img src="/images/claire-dress.png" className="img-responsive" alt="Claire" />
                <h3>Claire Hennigan</h3>
              </div>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2">
              <div className="col-md-12 text-center heading-section">
                <h2>Are Getting Married!</h2>
                <p>
                  {/* // eslint-disable-next-line max-len */}
                  <strong>Labor day weekend, Sep 3, 2022 &mdash; Skaneateles, Upstate NY</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-countdown">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center animate-box">
            <p className="countdown">
              <span id="days"></span>
              <span id="hours"></span>
              <span id="minutes"></span>
              <span id="seconds"></span>
            </p>
          </div>
        </div>
      </div>
      <Attending />
    </>
  );
};
