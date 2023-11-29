function Footer() {
  return (
    <>
      <section className="footer__section">
        <footer>
          <div className="container">
            <div className="row footer__row flex-lg-column flex-column-reverse  py-5 position-relative">
              <div
                className="col-lg-2 d-lg-block d-none"
                style={{ textAlign: "center" }}
              >
                <img
                  src="/assets/images/FOLLOW.png"
                  className="hideimg"
                  alt="image"
                  style={{ marginLeft: "-1rem" }}
                />
                <div className="d-flex gap-lg-4 gap-3 footer_up ">
                  <img
                    src="/assets/images/star-redsmall.png"
                    className="footer_icon_img"
                    alt="image"
                    style={{ margin: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-lg-8"
                style={{ textAlign: "center", marginTop: "3rem" }}
              >
                <div className="d-flex justify-content-center">
                  <h1
                    className="h1__footer"
                    style={{ textAlign: "center!important" }}
                  >
                    <span className="text-white">
                      Join Y
                      <span className="text-yellow">
                        <img
                          src="/assets/images/happy.png"
                          className="hideimg"
                          alt="happy"
                        />
                        <span className="text-white">
                          <span className="hideimg1 showimg">o</span>ur{" "}
                        </span>
                      </span>
                      <span className="text-yellow">community</span>
                    </span>
                  </h1>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <input
                    type="text"
                    className="trans__background__footer input__footer"
                    id="inputID"
                    placeholder="E-mail"
                  />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "5px" }}
                >
                  <input
                    type="text"
                    className="trans__background__footer input__footer"
                    id="inputID"
                    style={{ height: "70px" }}
                    placeholder="Text"
                  />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "40px" }}
                >
                  <button
                    className="btn send__btn text-black input__footer"
                    id="btn-connect"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "25%" }}></p>
                      <p style={{ marginBlock: "auto", width: "50%" }}>
                        Send us
                      </p>
                      <div
                        style={{
                          width: "25%",
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <span className="btn-badge ">
                          <img src="/assets/images/arow-top.png" alt="arrow" />
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div
                className="col-lg-2 d-lg-block d-none"
                style={{ textAlign: "center" }}
              >
                <div
                  className="d-flex gap-lg-4 gap-3 footer_down"
                  style={{ marginTop: "0rem!important" }}
                >
                  <img
                    src="/assets/images/star-yellowsmall.png"
                    className="footer_icon_img"
                    alt="image"
                    style={{ margin: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-lg-2 d-lg-none d-block"
                style={{ marginBottom: "2rem" }}
              >
                <img
                  src="/assets/images/FOLLOW.png"
                  className=""
                  alt="image"
                  style={{ marginTop: "-6rem" }}
                />
                <img
                  src="/assets/images/star-redsmall.png"
                  className="footer_icon_img2 footer_icon_img_mb"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
