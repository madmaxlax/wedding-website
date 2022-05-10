import React from 'react';
import '../../assets/sass/bootstrap.scss';
import '../../assets/sass/style.scss';
// import '../../assets/sass/_bootstrap-compass.scss';
// import '../../assets/sass/_bootstrap-mincer.scss';
// import '../../assets/sass/_bootstrap-sprockets.scss';

export const GiftsPage = () => {
  return (
    <>
      <div id="fh5co-when-where" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h2>How it all came together</h2>
            </div> */}
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12 text-center animate-box">
              <div className="wedding-events">
                {/* <div className="ceremony-bg" style={{ backgroundImage: 'url(images/max-claire-roof.jpg)' }}></div> */}
                <div className="desc">
                  <h3>Just bring yourselves! </h3>
                  <p>
                    <strong>
                      We are fortunate enough to live in a lovely and full NYC apartment and haven&apos;t set up a
                      registry and we are not expecting any gifts.
                    </strong>
                  </p>
                  <p>
                    Here are some of our favorite charities if you&apos;d like to make a donation in our names!
                    <br />
                    🔨{' '}
                    <a href="https://www.habitatchesapeake.org/" target="_blank" rel="noreferrer">
                      Chesapeake (Baltimore Area) Habitat for Humanity
                    </a>
                    <br />
                    <a href="https://www.plannedparenthood.org/" target="_blank" rel="noreferrer">
                      Planned Parenthood
                    </a>
                    <br />
                    ⚖️{' '}
                    <a href="https://www.splcenter.org/" target="_blank" rel="noreferrer">
                      Southern Poverty Law Center
                    </a>
                  </p>
                  <p>
                    <br />
                    <br />
                    {
                      'If you still feel so inclined, we do have some big life things coming up that we will need to put money toward:'
                    }
                    <br />
                    Dr. Claire Hennigan has to pay for her medical board examinations this fall ($3000 😱 )
                    <br />
                    Our honeymoon
                    <br />
                    Down payment on our future home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
