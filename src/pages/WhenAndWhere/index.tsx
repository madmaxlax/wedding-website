import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { MapEmbed } from '../Accommodation/MapEmbed';

export const WhenAndWherePage = () => {
  return (
    <React.Fragment>
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
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skan-brewery.png)' }}></div>
                <div className="desc">
                  <h3>Welcome Drinks &amp; Dinner @ Skaneateles Brewery</h3>
                  <p>
                    <strong>Friday evening, 7PM - 10PM Sep 2 @ Skaneateles Brewery</strong>
                  </p>
                  <p>
                    Join us for welcome drinks and dinner at{' '}
                    <a href="https://skanbrewery.com/" target="_blank" rel="noreferrer">
                      Skaneateles Brewery
                    </a>
                    . Food will be provided by Toss n Fire Pizza food truck
                    <br /> (gf options available of course!) <br />
                    {/* We will have a food truck in for dinner from{' '}
                    <a href="https://www.tossnfirepizza.com/" target="_blank" rel="noreferrer">
                      Toss n Fire
                    </a>
                    . */}
                    <br />
                    <a href="https://g.page/skanbrewery?share" target="_blank" rel="noreferrer">
                      4022 Mill Rd, Skaneateles, NY 13152
                    </a>
                    .{' '}
                    {
                      "It's all ours starting at 8PM but it's open to the public before that so feel free to arrive early!"
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/the-bond.jpg)' }}></div>
                <div className="desc">
                  <h3>Ceremony and Dinner @ The Bond 1835</h3>
                  <p>
                    <strong>
                      Saturday, 4:30PM Sep 3 @{' '}
                      <a href="https://www.thebond1835.com/" target="_blank" rel="noreferrer">
                        The Bond 1835
                      </a>
                    </strong>
                  </p>
                  <p>
                    Ceremony at 4:30PM <i>sharp</i>
                    <br />
                    Drinks, dancing and dinner to follow!
                    <br />
                    <br />
                    <a href="https://g.page/TheBond1835?share" target="_blank" rel="noreferrer">
                      2498 E Lake Rd, Skaneateles, NY 13152
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-6 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/hennigan-lake.jpg)' }}></div>
                <div className="desc">
                  <h3>Sunday Brunch and BBQ @ The Hennigan&apos;s!</h3>
                  <p>
                    <strong>Sunday, Sep 4 Brunch: 10:30AM BBQ starting at 4PM</strong>
                  </p>
                  <p>
                    Come by and be ready for a day hanging by (in) the lake!
                    <br />
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
    </React.Fragment>
  );
};
