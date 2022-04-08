import React from 'react';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const Attending = () => {
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
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScxtjYS0fPIHXClUlyRgmL6hZ3VZQUDtnNbWIwC1b-hs9iogw/viewform?entry.913552789=name&entry.1391953179=maxstruever@gmail"
                    className="btn btn-primary btn-block"
                    rel="noreferrer"
                  >
                    I am Attending
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
