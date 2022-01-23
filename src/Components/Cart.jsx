import React, { useState } from "react";
import { connect } from "react-redux";

function items(props) {
  const {
    increaseItem,
    decreaseItem,
    cartItems,
    payTheBill,
    isLoggedIn,
    paid,
  } = props;
  var totalAmount = 0;
  const totalPrice = () => {
    cartItems.forEach((item) => {
      totalAmount += item.count * item.price;
    });
    return totalAmount;
  };

  function payNow() {
    if (isLoggedIn) {
      payTheBill();
    }
    if (paid && isLoggedIn) {
      window.location.replace("/success");
    }
  }

  if (props.cartItems.length === 0) {
    return (
      <div style={{ marginTop: "50px", fontFamily: "cursive" }}>
        Cart is Empty.
      </div>
    );
  }

  function onChangeItemValue(it, inc = false) {
    let newItemss = [];
    if (inc) {
      newItemss = cartItems.map((item) => {
        if (item.id === it.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      return increaseItem(newItemss);
    }
    newItemss = cartItems.map((item) => {
      if (item.id === it.id) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });

    return decreaseItem(newItemss.filter((item) => item.count > 0));
  }

  return (
    <div>
      {props.cartItems.map((item, index) => {
        return (
          <div>
            <div key={index}>
              <div
                style={{
                  backgroundColor: "#ffb3b3",
                  margin: "5px",
                  textAlign: "left",
                  padding: "5px",
                  borderRadius: "20px",
                }}
              >
                <div>
                  <span>{item.productName}</span>

                  <span style={{ margin: "20px" }}>
                    <button onClick={() => onChangeItemValue(item, false)}>
                      -
                    </button>
                    <span style={{ margin: "5px" }}>{item.count}</span>
                    <button onClick={() => onChangeItemValue(item, true)}>
                      +
                    </button>
                  </span>
                  <span>Rs. {item.price * item.count} </span>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "gray",
                margin: "5px",
                textAlign: "left",
                padding: "10px",
                marginTop: "30px",
              }}
            ></div>
          </div>
        );
      })}
      <span style={{ paddingRight: "30px" }}>Total Payable Amount:</span>
      <span>{totalPrice()}</span>
      <button className="buttonCss" onClick={() => payNow()}>
        PAY NOW
      </button>
      {!isLoggedIn && (
        <h1 style={{ color: "maroon" }}>Please login to place order</h1>
      )}
    </div>
  );
}

function Cart(props) {
  return (
    <div style={{ backgroundColor: "grey", borderRadius: "10px" }}>
      <h1>CART ITEMS</h1>
      {items(props)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    appItems: state.appItems,
    cartItemsCount: state.cartItemsCount,
    cartItems: state.cartItems,
    isLoggedIn: state.isLoggedIn,
    paid: state.paid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseItem: (item) => dispatch({ type: "DECREASE_ITEM", item }),
    increaseItem: (item) => dispatch({ type: "INCREASE_ITEM", item }),
    payTheBill: () => dispatch({ type: "PAY_NOW" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
