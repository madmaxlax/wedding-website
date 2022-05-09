import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { MapEmbed } from '../Accommodation/MapEmbed';

export const ActivitiesPage = () => {
  return (
    <>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>Activities while in town</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/max-claire-roof.jpg)' }}></div>
                <div className="desc">
                  <h3>Still working on this page! </h3>
                  <p>But have a look at some things we&apos;ve listed on the map below:</p>
                  <p style={{ textAlign: 'left' }}>
                    <br />
                    Check out the main street of town for shopping and food
                    <br />
                    Food: Doug&apos;s Fish Fry is a popular spot for some quick but good seafood as well as milkshakes!
                    <br />
                    <br />
                    Hiking: there are a decent amount of hikes in the area, an easy close one is Carpenter Falls on the
                    west side of the lake.{' '}
                    <a
                      href="https://www.alltrails.com/trail/us/new-york/carpenter-falls-via-white-trail?u=m"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out the hike on All-Trails
                    </a>
                    <br />
                    <br />
                    Golf: there are a few golf courses in the area.{' '}
                    <a href="https://www.google.com/maps?cid=9761986232229669925" target="_blank" rel="noreferrer">
                      Pearl Lakes
                    </a>{' '}
                    is a fun and easy, short course that is better for all levels, and likely wouldn&apos;t need a
                    tee-time.{' '}
                    <a href="https://www.google.com/maps?cid=4830852398095853199" target="_blank" rel="noreferrer">
                      Vesper Hills
                    </a>{' '}
                    is a nicer public course nearby.
                    <br />
                    <br />
                    Lake Stuff! It&apos;s prime season for doing things at the lake. From town there is a boat tour{' '}
                    <a href="https://www.midlakesnavigation.com/" target="_blank" rel="noreferrer">
                      Midlakes Navigation (formerly the mail boat for the lake!)
                    </a>
                    . Kayaking, swimming, all kinds of other options too!
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
