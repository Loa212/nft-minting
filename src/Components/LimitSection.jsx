import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
function LimitSection({ setBuyCase }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [swiper, setSwiper] = useState();

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 2);
    swiper.slideToLoop(currentIndex);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1) % 2);
    swiper.slideToLoop(currentIndex);
  };
  return (
    <>
      <section className="limit___section position-relative">
        <div className="container">
          <img
            src="/assets/images/legendary1.png"
            className="lagendary___img d-lg-block d-none"
            alt="image"
          />

          <div className="text-center position-relative d-lg-block d-none">
            <h1 className="fw-500 rent__h1">
              For Sale{" "}
              <span className="text-red limit__edi">LIMIT EDITION</span>
            </h1>
          </div>
          <div className="d-lg-block d-none">
            <div
              className="row my-5"
              style={{ justifyContent: "space-evenly" }}
            >
              <div className="limit__card">
                <div className="limit__img">
                  <img src="/assets/images/limit-card1.png" alt="image" />
                </div>
                <div className="limit__dtls text-center py-2 mt-2">
                  <div className="card__boxbolt">
                    <img
                      src="/assets/images/bolt_yellowbig.png"
                      className="bolt_space"
                      alt="images"
                    />
                    <p className="text-white mt-3">200 Kh/s</p>
                  </div>
                  <h4 className="text-yellow">18000 USDT</h4>
                </div>
                <div className="limit__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    onClick={() => setBuyCase(200)}
                  >
                    BUY
                  </button>
                </div>
              </div>
              <div className="limit__card">
                <div className="limit__img">
                  <img src="/assets/images/limit-card2.png" alt="image" />
                </div>
                <div className="limit__dtls text-center py-2 mt-2">
                  <div className="card__boxbolt">
                    <img
                      src="/assets/images/bolt_yellowbig.png"
                      className="bolt_space"
                      alt="images"
                    />
                    <p className="text-white mt-3">500 Kh/s</p>
                  </div>
                  <h4 className="text-yellow">40000 USDT</h4>
                </div>
                <div className="limit__btn d-flex justify-content-center mb-3">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    onClick={() => setBuyCase(500)}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-5 justify-content-center my-5 d-lg-none d-block">
            <div className="swiper swiper3 py-3 overflow-visible">
              <img
                src="/assets/images/legendary2.png"
                className="lagendary___img d-lg-none d-block"
                alt="image"
              />
              <div className="swiper-wrapper">
                <div className="limit__edition__mb d-lg-none d-block">
                  <p className="limit_p_bottom pfont">LIMIT EDITION</p>
                </div>
                <Swiper
                  navigation={true}
                  slidesPerView={1}
                  loop={1}
                  onSwiper={(swiper) => {
                    setSwiper(swiper);
                  }}
                >
                  <SwiperSlide key={0}>
                    <div className="swiper-slide">
                      <div className="limit__card mx-auto">
                        <div className="limit__img">
                          <img
                            src="/assets/images/limit-card1.png"
                            alt="image"
                          />
                        </div>
                        <div className="limit__dtls text-center py-2 mt-2">
                          <div className="card__boxbolt">
                            <img
                              src="/assets/images/bolt_yellowbig.png"
                              className="bolt_space bolt_sizebig"
                              alt="images"
                            />
                            <p className="text-white mt-3">200 Kh/s</p>
                          </div>
                          <h4 className="text-yellow">18000 USDT</h4>
                        </div>
                        <div className="limit__btn d-flex justify-content-center mb-3">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setBuyCase(200)}
                          >
                            BUY
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={1}>
                    <div className="swiper-slide">
                      <div className="limit__card mx-auto">
                        <div className="limit__img">
                          <img
                            src="/assets/images/limit-card2.png"
                            alt="image"
                          />
                        </div>
                        <div className="limit__dtls text-center py-2 mt-2">
                          <div className="card__boxbolt">
                            <img
                              src="/assets/images/bolt_yellowbig.png"
                              className="bolt_space bolt_sizebig"
                              alt="images"
                            />
                            <p className="text-white mt-3">500 Kh/s</p>
                          </div>
                          <h4 className="text-yellow">40000 USDT</h4>
                        </div>
                        <div className="limit__btn d-flex justify-content-center mb-3">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setBuyCase(500)}
                          >
                            BUY
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div
                className="swiper-button-prev prev-button-2"
                onClick={handlePreviousClick}
              >
                <img src="/assets/images/arrow-left_red.png" alt="image" />
              </div>
              <div
                className="swiper-button-next next-button-2"
                onClick={handleNextClick}
              >
                <img src="/assets/images/arrow-right_red.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LimitSection;
