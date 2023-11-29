function WarningModal({}) {
  return (
    <>
      <div className="modal" id="warningModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal_class  warning_modal">
            <span
              className="container faq__title"
              style={{
                backgroundColor: "white",
                width: "280px",
                height: "380px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ padding: "25px", fontSize: "25px" }}
                className="text-red faq__title mt-lg-5"
              >
                <img src="/assets/images/warning.png" alt="image" />
              </div>
              <div style={{ fontSize: "20px" }}>Connect to the Wallet</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarningModal;
