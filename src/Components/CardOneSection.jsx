function CardOneSection({ setBuyCase }) {
  return (
    <>
      <section className="cards___section position-relative">
        <div className="container">
          <img
            src="/assets/images/EASY.png"
            className="easy___img d-lg-block rare_small"
            alt="image"
          />
          <div>
            <h1 className="fw-500 rent__h1 d-lg-block d-none">
              For<span className="text-red"> Rent One Month</span>
            </h1>
            <h1 className="fw-500 rent__h1 rent___h1 d-lg-none d-block">
              For<span className="text-red"> Rent One Month</span>
            </h1>
          </div>
          <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
            <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1">
              <div className="rent__card">
                <div className="limit__img">
                  <img src="/assets/images/card0.png" alt="image" />
                </div>
                <div className="limit__dtls text-center py-2 mt-2">
                  <div
                    className="card__boxbolt"
                    style={{ marginTop: "-1rem", marginBottom: "1rem" }}
                  >
                    <img
                      src="/assets/images/bolt_yellowbig.png"
                      className="bolt_space"
                      alt="images"
                    />
                    <p className="text-white mt-3">25 Kh/s</p>
                  </div>
                  <h4 className="text-yellow">666 USDT</h4>
                </div>
                <div className="rent__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    style={{ marginTop: "10px" }}
                    onClick={() => setBuyCase(255)}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
            <div className="swiper2 overflow-hidden col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="rent__card mx-auto">
                    <div className="limit__img">
                      <img src="/assets/images/card0.png" alt="image" />
                    </div>
                    <div className="limit__dtls text-center py-2 mt-2">
                      <div
                        className="card__boxbolt"
                        style={{ marginTop: "-1rem", marginBottom: "1rem" }}
                      >
                        <img
                          src="/assets/images/bolt_yellowbig.png"
                          className="bolt_space bolt_sizebig"
                          alt="images"
                        />
                        <p className="text-white mt-3">25 Kh/s</p>
                      </div>
                      <h4 className="text-yellow">666 USDT</h4>
                    </div>
                    <div className="rent__btn d-flex justify-content-center mb-3">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        style={{ marginTop: "10px" }}
                        onClick={() => setBuyCase(255)}
                      >
                        BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardOneSection;
