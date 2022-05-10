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
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skan-lake.jpg)' }}></div>
                <div className="desc" style={{ textAlign: 'left' }}>
                  <h3>Some suggestions, we will add more!</h3>
                  <br />
                  <p>
                    Stroll around the village - Lots of cute shops and boutiques, as well as a few quintessential
                    Skaneateles food spots
                    <br />
                    Food: Doug&apos;s Fish Fry is a popular spot for some quick but good seafood as well as milkshakes!
                    <br />
                    Valentine&#39;s Pizzeria
                    <br />
                    <br />
                    Hiking: there are a decent amount of hikes in the area, an easy close one is Carpenter&#39;s Falls
                    on the west side of the lake.{' '}
                    <a
                      href="https://www.alltrails.com/trail/us/new-york/carpenter-falls-via-white-trail?u=m"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out the hike on All-Trails
                    </a>{' '}
                    -{' '}
                    <a href="https://nyfalls.com/waterfalls/carpenter-falls/">
                      {' '}
                      NY Falls link - Carpenter&#39;s Falls{' '}
                    </a>
                    <br />
                    <a href="https://www.fllt.org/preserves/hinchcliff-family-preserve/">
                      Hinchcliff Family Preserve
                    </a>{' '}
                    - Nature preserve with hiking trails located on Southeast side of lake
                  </p>
                  <p>
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
                  </p>
                  <p>
                    Lake Stuff! It&apos;s prime season for doing things at the lake. From town there is a boat tour{' '}
                    <a href="https://www.midlakesnavigation.com/" target="_blank" rel="noreferrer">
                      Midlakes Navigation (formerly the mail boat for the lake!)
                    </a>
                    . Kayaking, swimming, all kinds of other options too!
                    <p>Public swimming area in the village - Clift Park</p>
                  </p>
                  <p>
                    Events for labor day - parade, fireworks, &quot;World&#39;s Fair!&quot; - fair with games and rides
                    in town (fundraiser for the Skaneateles Fire Dept) - will update with more details on locations and
                    timing as we get closer!
                  </p>
                  <p>
                    <a href="https://www.anyelasvineyards.com/">Anyela&#39;s Vineyard </a> - Lovely place for wine
                    tasting with a fantastic view of the lake <br />
                    2433 W Lake Rd, Skaneateles (on the West side)
                  </p>

                  <p>
                    <a href="https://skanellusdrivein.com/">Skanellus Drive-In </a>
                    Best place for soft serve on a warm (or cool) summer night! Located on Route 20 when driving East
                    out of the village
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
