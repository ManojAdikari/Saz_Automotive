import React from 'react';


const Home = () => {

  return (
    <div className="container" >
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-12  order-lg-1 d-flex flex-column justify-content-center text-center caption">
                <h2>Welcome to <br/><span>SAZ Automotive</span><span className="circle">.</span></h2>
                <p>A className Of Its Own</p>
              </div>
            </div>
          </div>

          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">

                <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-taxi-front-fill"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Professional 4 X 4</a></h4>
                  </div>
                </div>


                <div className="col-xl-4 col-md-4 card-two" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-headset"></i></div>
                    <h2 className="title"><a href="" className="stretched-link"></a></h2>
                    <h4 className="title"><a href="" className="stretched-link">Quick Support For All Clients</a></h4>
                  </div>
                </div>


                <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-person-check"></i></div>
                    <h4 className="title"><a href="" className="stretched-link">Satisfaction Guranteed</a></h4>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </section>

      </section>
    </div >

  );
};

export default Home;
