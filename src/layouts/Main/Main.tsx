import React, { PropsWithChildren, ReactChild, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../components';

declare global {
  // jquery stuff leftover from the template
  function whenLoaded(): void;
}
const Main = (
  props: PropsWithChildren<ReactNode> & {
    headerContent: ReactChild;
    headerBackgroundImages?: string[];
  }
) => {
  const { headerContent, children, headerBackgroundImages = ['/images/ring-pose.jpg'] } = props;
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
                <Link to="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark">
                  <i></i>
                </Link>
                <h1 id="fh5co-logo">
                  <Link underline="hover" to="/">
                    Gettin&apos; Hitched Upstate
                  </Link>
                </h1>
                {/* <!-- START #fh5co-menu-wrap --> */}
                <nav id="fh5co-menu-wrap" role="navigation">
                  <ul className="sf-menu" id="fh5co-primary-menu">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/when-and-where' ? 'active' : ''}>
                      <Link to="/when-and-where">When &amp; Where</Link>
                    </li>
                    <li className={location.pathname === '/accommodation' ? 'active' : ''}>
                      <Link to="/accommodation">Accommodation</Link>
                    </li>

                    <li className={location.pathname === '/transportation' ? 'active' : ''}>
                      <Link to="/transportation">Transportation</Link>
                    </li>

                    <li className={location.pathname === '/activities' ? 'active' : ''}>
                      <Link to="/activities">Activities</Link>
                    </li>
                    <li className={location.pathname === '/photo-gallery' ? 'active' : ''}>
                      <Link to="/photo-gallery">Photo Gallery</Link>
                      <ul className="fh5co-sub-menu">
                        <li>
                          <Link to="/need-link">Serious Photos</Link>
                        </li>
                        <li>
                          <Link to="/funny-pics">Fun Ones</Link>
                        </li>

                        <li>
                          <Link to="/add-your-own-photos">Add Your Own!</Link>
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
                      Copyright 2022. All Rights Reserved. Made with derp and <i className="icon-heart3"></i> by{' '}
                      <Link to="https://maxstruever/">Max Struever</Link>
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
