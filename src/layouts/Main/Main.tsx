import React, { PropsWithChildren, ReactChild, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../components';

declare global {
  // jquery stuff leftover from the template
  function whenLoaded(): void;
}

const Main = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: PropsWithChildren<any> & {
    headerContent: ReactChild;
    headerBackgroundImages?: string[];
  }
) => {
  const {
    headerContent,
    children,
    headerBackgroundImages = [
      '/images/hawaii.jpeg',
      '/images/ring-pose.jpg',
      '/images/halloween.jpg',
      '/images/halloween2.jpg',
      '/images/hennigan-lake.jpg',
      '/images/skantown.jpg',
      '/images/max-claire-lake.jpg',
      '/images/max-claire-roof.jpg',
      '/images/max-claire-ravens.jpg',
      '/images/max-claire-upside-down.jpg',
      '/images/max-claire-nasty-women.jpg',
      '/images/biden-haris-day.jpg',
    ],
  } = props;
  const location = useLocation();
  useEffect(() => {
    // jquery stuff leftover from the template
    whenLoaded();
  }, [location.pathname]);
  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <div className="fh5co-hero" data-section="home">
            <div className="fh5co-overlay"></div>
            <div
              className="fh5co-cover text-center"
              data-stellar-background-ratio="0.5"
              style={{
                backgroundImage: `url(${
                  headerBackgroundImages[Math.floor(Math.random() * headerBackgroundImages.length)]
                })`,
                backgroundPosition: 'center',
              }}
            >
              <div className="display-t">
                <div className="display-tc">
                  <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                      <div className="animate-box">{headerContent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <header id="fh5co-header-section" className="sticky-banner">
            <div className="container">
              <div className="nav-header">
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark" style={{ marginTop: 40 }}>
                  <i></i>
                </a>
                <h1 id="fh5co-logo">
                  <Link underline="hover" to="/">
                    Gettin&apos; Hitched Upstate
                  </Link>
                </h1>
                {/* <!-- START #fh5co-menu-wrap --> */}
                <nav id="fh5co-menu-wrap" role="navigation">
                  <ul className="sf-menu" id="fh5co-primary-menu">
                    {/* <li className={location.pathname === '/' ? 'active' : ''}>
                      <Link to="/">Home</Link>
                    </li> */}
                    <li className={location.pathname === '/when-and-where' ? 'active' : ''}>
                      <Link to="/when-and-where">When &amp; Where</Link>
                    </li>
                    <li className={location.pathname === '/accommodation' ? 'active' : ''}>
                      <Link to="/accommodation">Accommodation</Link>
                    </li>
                    <li className={location.pathname === '/transportation' ? 'active' : ''}>
                      <Link to="/transportation">Transportation</Link>
                    </li>
                    {/* <li className={location.pathname === '/wedding-party' ? 'active' : ''}>
                      <Link to="/wedding-party">Wedding-Party</Link>
                    </li> */}
                    <li className={location.pathname === '/activities' ? 'active' : ''}>
                      <Link to="/activities">Activities</Link>
                    </li>
                    <li className={location.pathname === '/our-story' ? 'active' : ''}>
                      <Link to="/our-story">Our Story</Link>
                    </li>
                    <li className={location.pathname === '/gifts' ? 'active' : ''}>
                      <Link to="/gifts">Gifts?</Link>
                    </li>
                    <li className={location.pathname === '/photo-gallery' ? 'active' : ''}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Photo Gallery
                      </a>
                      <ul className="fh5co-sub-menu" style={{ width: '500' }}>
                        <li>
                          <a href="https://photos.app.goo.gl/PvqSWbQD7JycNDuq8" target="_blank" rel="noreferrer">
                            Fun photos
                          </a>
                        </li>
                        <li>
                          <a href="https://photos.app.goo.gl/gr2JLo4v2Nt3cbSB9" target="_blank" rel="noreferrer">
                            Upload yours!
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          {children}

          <footer>
            <div id="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2>Claire &amp; Max</h2>
                  </div>
                  <div className="col-md-6 col-md-offset-3 text-center">
                    {/* <p className="fh5co-social-icons">
                    <Link to="#">
                      <i className="icon-twitter2"></i>
                    </Link>
                    <Link to="#">
                      <i className="icon-facebook2"></i>
                    </Link>
                    <Link to="#">
                      <i className="icon-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="icon-dribbble2"></i>
                    </Link>
                    <Link to="#">
                      <i className="icon-youtube"></i>
                    </Link>
                  </p> */}
                    <p>
                      Template courtesy of{' '}
                      <Link to="https://freehtml5.co/preview/?item=nuptial-free-wedding-html5-template-using-bootstrap">
                        Nuptial Html
                      </Link>
                      <br />
                      Copyright 2022. All Rights Reserved. Made with <i className="icon-heart3"></i> by{' '}
                      <Link to="https://maxstruever.com/">Max Struever</Link>
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

export default Main;
