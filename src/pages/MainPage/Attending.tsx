import React, { useState } from 'react';

export const Attending = () => {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  return (
    <>
      <div
        id="fh5co-started"
        style={{ backgroundImage: 'url(images/cover_bg_2.jpg)' }}
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
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={emailAddress}
                      onChange={(event) => {
                        setEmailAddress(event.target.value);
                      }}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <a
                    target="_blank"
                    href={`https://docs.google.com/forms/d/e/1FAIpQLScxtjYS0fPIHXClUlyRgmL6hZ3VZQUDtnNbWIwC1b-hs9iogw/viewform?entry.913552789=${name}&entry.1391953179=${emailAddress}`}
                    className="btn btn-primary btn-block"
                    rel="noreferrer"
                  >
                    RSVP
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
