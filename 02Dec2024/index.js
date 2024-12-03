import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("order", this.props.Order.customer);
    const customerdetail = this.props.Order.customer;
    console.log(customerdetail);

    console.log("line items", this.props.Order.lineItems);
    const productinfo = this.props.Order.lineItems;
    console.log(productinfo);

    return (
      <>
        <h1> customer ID :{customerdetail["customerID"]}</h1>
        <h1> customer Name : {customerdetail["customerName"]}</h1>
        <h1> customer Address : {customerdetail["customerAddress"]}</h1>

        <h1>
          {productinfo.map((product) => (
            <li key={product.productID}> Product ID {product.productID}</li>
          ))}
        </h1>
      </>
    );
  }
}

const orderDetails = {
  customer: {
    customerID: 100,
    customerName: "bala",
    customerAddress: "Delhi",
  },
  lineItems: [
    { productID: 100001, quantity: 10, productPrice: 2000.0 },
    { productID: 100002, quantity: 5, productPrice: 5000 },
  ],
};

root.render(<Order Order={orderDetails} />);
