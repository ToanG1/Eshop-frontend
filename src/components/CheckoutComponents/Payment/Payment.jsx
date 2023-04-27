import React, { useState } from "react";
import style from "./Payment.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import payment1 from "../../../images/payment1.png";
import payment2 from "../../../images/payment2.png";
import payment3 from "../../../images/payment3.png";
import payment4 from "../../../images/payment4.png";
import payment5 from "../../../images/payment5.png";
function Payment({ info, setInfo, changeStep }) {
  const [payment, setPayment] = useState("cod");

  const nextPageHandler = () => {
    setInfo({
      ...info,
      note: document.getElementById("note-content").value,
    });
    changeStep(4);
  };
  return (
    <>
      <section className="payment-home">
        <div className="left-box">
          <div className="title">
            <i onClick={() => changeStep(2)}>
              <FontAwesomeIcon icon={faArrowLeft} size="xm" />
            </i>
            <h1>Select Payment Option</h1>
          </div>
          <div
            className="payment-cards-list"
            onChange={(e) => setPayment(e.target.value)}
          >
            <div className="payment-card">
              <input type="radio" id="cod" name="payment" value="1" />
              <label>Cash On Delivery</label>
            </div>
            <div className="payment-card">
              <input type="radio" id="cod" name="payment" value="2" />
              <label>Cash On Delivery</label>
            </div>
            <div className="payment-card">
              <input type="radio" id="cod" name="payment" value="3" />
              <label>Cash On Delivery</label>
            </div>
            <div className="card-input-form">
              <div>
                <input type="radio" id="cod" name="payment" value="3" />
                <label>Credit Card</label>
                <div>
                  <img src={payment1} alt="visa" />
                  <img src={payment2} alt="credit card" />
                </div>
              </div>
              <div className="credit-input-form">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Name on Card" />
                <div className="credit-card-more">
                  <input type="date" />
                  <input type="text" placeholder="ccv" />
                </div>
              </div>
            </div>
            <div className="payment-providers">
              <img src={payment1} alt="visa" />
              <img src={payment2} alt="credit card" />
              <img src={payment3} alt="amazon" />
              <img src={payment4} alt="paypal" />
              <img src={payment5} alt="google pay" />
            </div>
          </div>
        </div>
        <div className="v-ruler"></div>
        <div className="right-box">
          <div className="note-container">
            <h2>Note</h2>
            <textarea
              id="note-content"
              placeholder="note for provider"
            ></textarea>
          </div>
          <div className="price-detail-container">
            <h2>Price Details (2 items)</h2>
            <div id="table-container">
              <div className="row">
                <p>Total on produts</p>
                <p>{info.totalCash} VND</p>
              </div>
              <div className="row">
                <p>Discount on products</p>
                <p className="discount">
                  {info.productVoucher.voucherValue !== undefined
                    ? info.totalCash * info.productVoucher.voucherValue
                    : 0}{" "}
                  VND
                </p>
              </div>
              <div className="row">
                <p>Delivery Fee</p>
                <p>{info.delivery}</p>
              </div>
              <div className="row">
                <p>Discount on Delivery</p>
                <p className="discount">
                  {info.shippingVoucher.voucherValue !== undefined
                    ? info.delivery * info.shippingVoucher.voucherValue
                    : 0}{" "}
                  VND
                </p>
              </div>
            </div>
            <div className="h-ruler"></div>
            <div className="total-price">
              <p>Total</p>
              <p>
                {info.productVoucher.voucherValue !== undefined &&
                info.shippingVoucher.voucherValue !== undefined
                  ? info.totalCash -
                    info.totalCash * info.productVoucher.voucherValue +
                    info.delivery -
                    info.delivery * info.shippingVoucher.voucherValue
                  : info.totalCash + info.delivery}
                VND
              </p>
            </div>
            <button
              className="place-order-btn"
              onClick={() => nextPageHandler()}
            >
              Place Order
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
