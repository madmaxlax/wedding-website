import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
import { MapEmbed } from './MapEmbed';

export const AccommodationPage = () => {
  return (
    <React.Fragment>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>Accommodation</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md" style={{ textAlign: 'center' }}>
            <iframe
              width="100%"
              style={{ maxWidth: 850 }}
              height={1000}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              src="https://docs.google.com/document/d/e/2PACX-1vS4K8_wYda0eYNpUrdjHEy0ZrCQ9LBEYMTq1X4YPeoo_Ez7u5Tu6p9YjgBLqPmu7ke5MwFVUo8VSQRY/pub?embedded=true"
            ></iframe>
            {/* <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                <div className="ceremony-bg" style={{ backgroundImage: 'url(images/skan-lake.jpg)' }}></div>
                <div className="desc">
                  <h3>Hold off on booking for now!</h3>
                  <p>
                    <strong>Inns, Lake House AirBnBs, and Motels!</strong>
                  </p>
                  <p>
                    {
                      'Max and Mary-Ellen scooped up as many AirBnBs in the area that they could and are now "squatting" on them for everyone! Details to come.'
                    }
                  </p>
                  {/* <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div> 
                </div>
              </div>
            </div> */}
          </div>
          <div className="row">
            <MapEmbed />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
