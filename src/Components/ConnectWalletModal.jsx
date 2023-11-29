import React, { useState, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect, coinbasewallet } from "../connectors";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const ConnectWalletModal = ({}) => {
  const { account, activate, deactivate, error } = useWeb3React();
  const [isConnecting, setIsConnecting] = useState(false);
  const [modalshow, setModalshow] = useState(true);
  const closeButton = useRef(null);

  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [payMethod, setPayMethod] = useState(null);

  const handleChange_walletAddress = (event) => {
    setWalletAddress(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const handleChange_email = (event) => {
    setEmail(event.target.value);
    // console.log('value is:', event.target.value);
  };
  // useEffect(() => {
  //     injected
  //     .isAuthorized()
  //     .then((isAuthorized) => {
  //       if(isAuthorized) {
  //         console.log("~~~~~wallet is alrady connected.")
  //         activate(injected, async (error) => {
  //           console.log(error);
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, [])
  const onclickMetaMaskConnect = async () => {
    setIsConnecting(true);

    try {
      await activate(injected);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };
  const isMetamaskInstalled = () => {
    if (typeof window.ethereum !== "undefined") {
      return true;
    }

    return false;
  };

  // const onDisconnect = () => {
  //   deactivate( injected );
  // }

  // const disconnectWallet = async () => {
  //   deactivate();
  //   refreshState();
  // };

  const onclickWalletconnect = async () => {
    setIsConnecting(true);

    try {
      console.log("wallet connect");

      await activate(walletconnect);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };

  const onclickCoinBaseConnect = async () => {
    setIsConnecting(true);

    try {
      console.log("wallet connect");

      await activate(coinbasewallet);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };
  if (account) {
    // alert(account)
    closeButton.current.click();
  }
  return (
    // <div className="modal" id="ConnectWalletModal">
    //   <div className="modal-dialog modal-dialog-centered">
    //     <div className="modal-content modal_class" style={{"background-color": "#1e1e1e", "background-size": "cover", "border-radius": "30px"}}>
    //       <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
    //         <span className="container faq__title">
    //           <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
    //             <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1">
    //               <div className="card__box card__black" id="card__1">
    //                 <div className="card__img">
    //                   <img src="/assets/images/card1.png" alt="images" data-xblocker="passed" style={{"visibility": "visible"}}/>
    //                 </div>
    //                 <div className="card__dtl">
    //                   <div className="card__boxbolt">
    //                     <img src="/assets/images/bolt_yellow.png" alt="images"/>
    //                     <p className="text-white mt-3">MetaMask</p>
    //                   </div>
    //                   <h4 className="text-yellow"></h4>
    //                   <button className="buy__btn1" onClick={onclickMetaMaskConnect} style={{"margin-top": "10px"}}>Connect</button>
    //                 </div>
    //               </div>
    //               <div className="card__box card__black" id="card__1">
    //                 <div className="card__img">
    //                   <img src="/assets/images/card1.png" alt="images" data-xblocker="passed" style={{"visibility": "visible"}}/>
    //                 </div>
    //                 <div className="card__dtl">
    //                   <div className="card__boxbolt">
    //                     <img src="/assets/images/bolt_yellow.png" alt="images"/>
    //                     <p className="text-white mt-3">WalletConnect</p>
    //                   </div>
    //                   <h4 className="text-yellow"></h4>
    //                   <button className="buy__btn1" onClick={onclickWalletconnect} style={{"margin-top": "10px"}}>Connect</button>
    //                 </div>
    //               </div>
    //               <div className="card__box card__black" id="card__1">
    //                 <div className="card__img">
    //                   <img src="/assets/images/card1.png" alt="images" data-xblocker="passed" style={{"visibility": "visible"}}/>
    //                 </div>
    //                 <div className="card__dtl">
    //                   <div className="card__boxbolt">
    //                     <img src="/assets/images/bolt_yellow.png" alt="images"/>
    //                     <p className="text-white mt-3">CoinBase</p>
    //                   </div>
    //                   <h4 className="text-yellow"></h4>
    //                   <button className="buy__btn1" onClick={onclickCoinBaseConnect} style={{"margin-top": "10px"}}>Connect</button>
    //                 </div>
    //               </div>

    //               <button ref={closeButton} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    //             </div>
    //           </div>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="modal" id="ConnectWalletModal">
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content modal_class"
          style={{
            backgroundColor: "#1e1e1e",
            backgroundSize: "cover",
            borderRadius: "30px",
          }}
        >
          <span className="container faq__title">
            <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-block d-none">
              <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1">
                <div className="card__box card__black" id="card__1">
                  <div className="card__img">
                    <img
                      src="/assets/images/metamask.png"
                      alt="images"
                      data-xblocker="passed"
                      style={{ visibility: "visible" }}
                    />
                  </div>
                  <div className="card__dtl">
                    <div className="card__boxbolt">
                      <p className="text-white mt-3">MetaMask</p>
                    </div>
                    <h4 className="text-yellow"></h4>
                    <button
                      className="buy__btn1"
                      onClick={onclickMetaMaskConnect}
                      style={{ marginTop: "10px" }}
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="card__box card__black" id="card__1">
                  <div className="card__img">
                    <img
                      src="/assets/images/walletconnect.png"
                      alt="images"
                      data-xblocker="passed"
                      style={{ visibility: "visible" }}
                    />
                  </div>
                  <div className="card__dtl">
                    <div className="card__boxbolt">
                      <p className="text-white mt-3">WalletConnect</p>
                    </div>
                    <h4 className="text-yellow"></h4>
                    <button
                      className="buy__btn1"
                      onClick={onclickWalletconnect}
                      style={{ marginTop: "10px" }}
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="card__box card__black" id="card__1">
                  <div className="card__img">
                    <img
                      src="/assets/images/coinbase.png"
                      alt="images"
                      data-xblocker="passed"
                      style={{ visibility: "visible" }}
                    />
                  </div>
                  <div className="card__dtl">
                    <div className="card__boxbolt">
                      <p className="text-white mt-3">CoinBase</p>
                    </div>
                    <h4 className="text-yellow"></h4>
                    <button
                      className="buy__btn1"
                      onClick={onclickCoinBaseConnect}
                      style={{ marginTop: "10px" }}
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <button
                  ref={closeButton}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="row p-xl-3 mt-lg-5 mt-4 justify-content-center d-lg-none d-block">
              <div className="swiper2 overflow-hidden col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center modal_bottom">
                <div className="swiper-wrapper">
                  <div className="swiper-slide qqq" style={{ display: "flex" }}>
                    <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1 small">
                      <div className="card__box card__black" id="card__1">
                        <div className="card__img">
                          <img
                            src="/assets/images/metamask.png"
                            alt="images"
                            data-xblocker="passed"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="card__dtl">
                          <div className="card__boxbolt">
                            <p className="text-white mt-3">MetaMask</p>
                          </div>
                          <h4 className="text-yellow"></h4>
                          <button
                            className="buy__btn1"
                            onClick={onclickMetaMaskConnect}
                            style={{ marginTop: "10px" }}
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide qqq" style={{ display: "flex" }}>
                    <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1 small small1">
                      <div className="card__box card__black" id="card__1">
                        <div className="card__img">
                          <img
                            src="/assets/images/walletconnect.png"
                            alt="images"
                            data-xblocker="passed"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="card__dtl">
                          <div className="card__boxbolt">
                            <p className="text-white mt-3">WalletConnect</p>
                          </div>
                          <h4 className="text-yellow"></h4>
                          <button
                            className="buy__btn1"
                            onClick={onclickWalletconnect}
                            style={{ marginTop: "10px" }}
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide qqq" style={{ display: "flex" }}>
                    <div className=" col-12 d-flex gap-xxl-5 card__1__section gap-md-4 position-relative justify-content-center mx-1 small small1">
                      <div className="card__box card__black" id="card__1">
                        <div className="card__img">
                          <img
                            src="/assets/images/coinbase.png"
                            alt="images"
                            data-xblocker="passed"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="card__dtl">
                          <div className="card__boxbolt">
                            <p className="text-white mt-3">CoinBase</p>
                          </div>
                          <h4 className="text-yellow"></h4>
                          <button
                            className="buy__btn1"
                            onClick={onclickCoinBaseConnect}
                            style={{ marginTop: "10px" }}
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  ref={closeButton}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="swiper-button-prev prev-button-1">
                <img src="/assets/images/arrow-left.png" alt="image" />
              </div>
              <div className="swiper-button-next next-button-1">
                <img src="/assets/images/arrow-right.png" alt="image" />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
