import React from "react";
import "../App.css";
function Home(props) {
  const data = [
    {
      id: "1",
      name: "I-Phone 11",
      Price: "1000",
    },
    {
      id: "2",
      name: "Samsung a51",
      Price: "800",
    },
    {
      id: "3",
      name: "OnePlus",
      Price: "500",
    },
    {
      id: "4",
      name: "IQOO",
      Price: "600",
    },
    {
      id: "5",
      name: "I-Phone X",
      Price: "1000",
    },
  ];
  return (
    <div>
      <h1>Home Component</h1>
      {data.map((val, key) => {
        return (
          <div className="cart-wrapper">
            <div className="img-wrapper item">
              <img
                src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png"
                alt="dds"
              />
            </div>
            <div className="text-wrapper item">
              <span>{val.name}</span>
              <br />
              <span>Price: {"$" + val.Price}</span>
            </div>
            <div className="btn-wrapper item">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.addToCartHandler({
                    id: `${val.id}`,
                    price: `${val.Price}`,
                    name: `${val.name}`,
                  });
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
