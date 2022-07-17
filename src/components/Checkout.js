import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

function Checkout(props) {
  let TotalCost = 0;
  for (let i = 0; i < props.data.cardData.length; i++) {
    TotalCost =
      TotalCost +
      props.data.cardData[i].price * props.data.cardData[i].quantity;
  }

  function myfunc(price, quantity) {
    return price * quantity;
  }
  return (
    <div className="checkout-home">
      <div className="header">
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <i className="icon icon-basket" />
              shop42
            </div>
            <div className="secure">
              <i className="icon icon-shield" />
              <Link to="/" className="backBtn">
                Go Back to Shop
              </Link>
            </div>
          </div>
          <div className="notification">Complete Your Purchase</div>
          Total Cost: {Number(TotalCost).toLocaleString("en-US")}
        </div>
      </div>
      <section className="content">
        {props.data.cardData.length === 0 ? (
          <>
            <div style={{ textAlign: "center", fontSize: "30px" }}>
              No item in Cart
            </div>
          </>
        ) : (
          <>
            {props.data.cardData.map((val, key) => {
              return (
                <>
                  <div className="container"></div>

                  <div
                    className="details shadow"
                    style={{ margin: "auto", marginBottom: "30px" }}
                  >
                    <div className="details__item">
                      <div className="item__image">
                        <img
                          className="iphone"
                          src="https://www.apple.com/v/iphone/compare/k/images/overview/compare_iphoneXSmax_silver_large.jpg"
                          alt=""
                        />
                      </div>
                      <div className="item__details">
                        <span>
                          <button onClick={() => props.DeleteCartHandler(key)}>
                            X
                          </button>
                        </span>
                        <div className="item__title">{val.name}</div>
                        <div className="item__price">
                          {"$" + val.price}, Total:{" "}
                          {"$" + myfunc(val.price, val.quantity)}
                        </div>
                        <div className="item__quantity">
                          Quantity: <br />
                          <button onClick={() => props.DecrementHandler(key)}>
                            -
                          </button>
                          {val.quantity}
                          <button onClick={() => props.IncrementHandler(key)}>
                            +
                          </button>
                        </div>
                        <div className="item__description">
                          <ul>
                            <li>Super fast and power efficient</li>
                            <li>A lot of fast memory</li>
                            <li>High resolution camera</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
        <div className="discount" />
        <div className="container">
          <div className="payment">
            <div className="payment__title">Payment Method</div>
            <div className="payment__types">
              <div className="payment__type payment__type--cc active">
                <i className="icon icon-credit-card" />
                Credit Card
              </div>
              <div className="payment__type payment__type--paypal">
                <i className="icon icon-paypal" />
                Paypal
              </div>
              <div className="payment__type payment__type--paypal">
                <i className="icon icon-wallet" />
                SEPA
              </div>
              <div className="payment__type payment__type--paypal">
                <i className="icon icon-note" />
                Invoice
              </div>
            </div>
            <div className="payment__info">
              <div className="payment__cc">
                <div className="payment__title">
                  <i className="icon icon-user" />
                  Personal Information
                </div>
                <form>
                  <div className="form__cc">
                    <div className="row">
                      <div className="field">
                        <div className="title">Credit Card Number</div>
                        <input
                          type="text"
                          className="input txt text-validated"
                          defaultValue="4542 9931 9292 2293"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="field small">
                        <div className="title">Expiry Date</div>
                        <select className="input ddl">
                          <option selected="">01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <select className="input ddl">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option selected="">16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                      </div>
                      <div className="field small">
                        <div className="title">
                          CVV Code
                          <span className="numberCircle">?</span>
                        </div>
                        <input type="text" className="input txt" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <div className="title">Name on Card</div>
                        <input type="text" className="input txt" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="payment__shipping">
                <div className="payment__title">
                  <i className="icon icon-plane" /> Shiping Information
                </div>
                <div className="details__user">
                  <div className="user__name">
                    John Doe
                    <br /> 13/03/1980
                  </div>
                  <div className="user__address">
                    Shipping Address: 22 Street, Address
                    <br />
                    Country
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="actions">
            <Link to="/" className="btn action__submit">
              Place your Order
              <i className="icon icon-arrow-right-circle" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
