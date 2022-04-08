import React from 'react';

export const MapEmbed = () => {
  return (
    <>
      <div id="map" className="fh5co-map" style={{ height: 480 }}>
        <iframe
          frameBorder="0"
          src="https://www.google.com/maps/d/u/0/embed?mid=1XzQSxnPg2KxNUmi35xLiUCDjpRBed58W&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </div>
    </>
  );
};
