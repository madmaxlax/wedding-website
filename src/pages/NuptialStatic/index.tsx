import React, { useEffect } from 'react';
// import '../../assets/sass/bootstrap.scss';
// import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';
declare global {
  function whenLoaded(): void;
}
export const NuptialStatic = () => {
  useEffect(() => {
    whenLoaded();
  }, []);
  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <div className="fh5co-hero" data-section="home">
            <div className="fh5co-overlay"></div>
            <div
              className="fh5co-cover text-center"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: 'url(/images/ring-pose.jpg)' }}
            >
              <div className="display-t">
                <div className="display-tc">
                  <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                      <div className="animate-box">
                        <h1>Mawiage</h1>
                        <h2>Doctors Clairence &amp; Max</h2>
                        <p>
                          <span>3.Sep.2022</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <header id="fh5co-header-section" className="sticky-banner">
            <div className="container">
              <div className="nav-header">
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark">
                  <i></i>
                </a>
                <h1 id="fh5co-logo">
                  <a href="/">Home</a>
                </h1>
                {/* <!-- START #fh5co-menu-wrap --> */}
                <nav id="fh5co-menu-wrap" role="navigation">
                  <ul className="sf-menu" id="fh5co-primary-menu">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="groom-bride.html" className="fh5co-sub-ddown">
                        Groom &amp; Bride
                      </a>
                      <ul className="fh5co-sub-menu">
                        <li>
                          <a href="https://freehtml5.co/wedding-free-html5-bootstrap-template-for-wedding-websites/">
                            Wedding Template
                          </a>
                        </li>
                        <li>
                          <a href="https://freehtml5.co/marble-free-html5-bootstrap-template-for-portfolio-or-multi-purpose-websites/">
                            Marble Template
                          </a>
                        </li>
                        <li>
                          <a href="https://freehtml5.co/tasty-free-bootstrap-html5-template-for-restaurant-websites/">
                            Tasty Template
                          </a>
                        </li>
                        <li>
                          <a href="https://freehtml5.co/education-free-html5-bootstrap-template-elearning-school-websites/">
                            Education Template
                          </a>
                        </li>
                        <li>
                          <a href="https://freehtml5.co/words-free-html5-bootstrap-template-multi-purpose/">
                            Words Template
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="when-where.html">When &amp; Where</a>
                    </li>
                    <li>
                      <a href="guest.html">Guest</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          {/* <!-- end:header-top --> */}

          <div id="fh5co-couple" className="fh5co-section-gray">
            <div className="container">
              <div className="row row-bottom-padded-md animate-box">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                    <img src="/images/max-lobster.jpg" className="img-responsive" alt="Max" />
                    <h3>Max Struever</h3>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
                    <h2 className="amp-center">
                      <i className="icon-heart"></i>
                    </h2>
                  </div>
                  <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                    <img
                      src="/images/sleepy-doctor.png
                      "
                      className="img-responsive"
                      alt="Claire"
                    />
                    <h3>Clairence Hennigan</h3>
                  </div>
                </div>
              </div>
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2">
                  <div className="col-md-12 text-center heading-section">
                    <h2>Are Getting Married</h2>
                    <p>
                      <strong>Labor day weekend, on Sep 3, 2022 &mdash; Skaneateles, Upstate NY</strong>
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

          <div
            id="fh5co-started"
            style={{ backgroundImage: 'url(images/cover_bg_2.jpg);' }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center heading-section">
                  <h2>Are You Attending?</h2>
                  <p>Please Fill-up the form to notify you that you&apos;re attending. Thanks.</p>
                </div>
              </div>
              <div className="row animate-box">
                <div className="col-md-10 col-md-offset-1">
                  <form className="form-inline">
                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input type="name" className="form-control" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button type="submit" className="btn btn-primary btn-block">
                        I am Attending
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div id="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2>Claire &amp; Max</h2>
                  </div>
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <p className="fh5co-social-icons">
                      <a href="#">
                        <i className="icon-twitter2"></i>
                      </a>
                      <a href="#">
                        <i className="icon-facebook2"></i>
                      </a>
                      <a href="#">
                        <i className="icon-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="icon-dribbble2"></i>
                      </a>
                      <a href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </p>
                    <p>
                      Template courtesy of
                      <a href="https://freehtml5.co/preview/?item=nuptial-free-wedding-html5-template-using-bootstrap">
                        Nuptial Html
                      </a>
                      <br />
                      Copyright 2022. All Rights Reserved. Made with derp and <i className="icon-heart3"></i> by{' '}
                      <a href="https://maxstruever/">Max Struever</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <!-- END fh5co-page --> */}
      </div>
    </>
  );
};
