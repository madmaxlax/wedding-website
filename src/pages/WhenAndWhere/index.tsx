import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { MapEmbed } from '../Accommodation/MapEmbed';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const WhenAndWherePage = () => {
  return (
    <>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>When &amp; Where</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/the-bond.jpg)' }}></div>
                <div className="desc">
                  <h3>Rehearsal Dinner @ The Bond 1835</h3>
                  <p>
                    <strong>Friday, Sep 3, 5.00 PM - 9.00PM @ The Bond 1835</strong>
                  </p>
                  <p>
                    Drinks and rehearsal dinner at{' '}
                    <a href="https://www.thebond1835.com/" target="_blank" rel="noreferrer">
                      The Bond 1835
                    </a>
                    . <br />
                    It is on the east side of the lake, between the Hennigan home and the town of Skaneateles at the
                    north tip of the lake.
                    <br />
                    <a href="https://g.page/TheBond1835?share" target="_blank" rel="noreferrer">
                      2498 E Lake Rd, Skaneateles, NY 13152
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/the-bond.jpg)' }}></div>
                <div className="desc">
                  <h3>Ceremony and Dinner also @ The Bond 1835</h3>
                  <p>
                    <strong>Saturday, Sep 3, 5.00 PM - 9.00PM @ The Bond 1835</strong>
                  </p>
                  <p>
                    Mawwiage and drinks and dancing at{' '}
                    <a href="https://www.thebond1835.com/" target="_blank" rel="noreferrer">
                      The Bond 1835
                    </a>
                    . <br />
                    It is on the east side of the lake, between the Hennigan home and the town of Skaneateles at the
                    north tip of the lake.
                    <br />
                    <a href="https://g.page/TheBond1835?share" target="_blank" rel="noreferrer">
                      2498 E Lake Rd, Skaneateles, NY 13152
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/hennigan-lake.jpg)' }}></div>
                <div className="desc">
                  <h3>Sunday BBQ @ The Hennigan&apos;s!</h3>
                  <p>
                    <strong>Sunday, Sep 4, 5.00 PM - 9.00PM @ The Bond 1835</strong>
                  </p>
                  <p>
                    Details TBD but we will be partying at the field or vineyard or by the lake, with foor from dinosaur
                    BBQ <br />
                    <a href="https://goo.gl/maps/xeVZ9XFCjvdMEFE68" target="_blank" rel="noreferrer">
                      1557 Red Tail Ln, Skaneateles, NY 13152
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skantown.jpg)' }}></div>
                <div className="desc">
                  <h3>Labor Day in Skaneateles!</h3>
                  <p>
                    <strong>Sunday All Day</strong>
                  </p>
                  <p>
                    It&apos;s labor day, so there are all kinds of activities going on in town!
                    <br />
                    🎉&nbsp;&nbsp;&nbsp; Parade
                    <br />
                    🎶&nbsp;&nbsp;&nbsp; Music
                    <br />
                    🛍&nbsp;&nbsp;&nbsp; Special Shopping Events
                    <br />
                    🎆&nbsp;&nbsp;&nbsp; Fireworks
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
    </>
  );
};
