import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1> New Customer ID : {this.props.order.customer.customerID}</h1>
        <h1> New Customer Name : {this.props.order.customer.customerName}</h1>
        <h1>
          New Customer Address : {this.props.order.customer.customerAddress}
        </h1>

        <table border="1px">
          <thead>
            <tr>
              <th>Product ID</th>
              <th> Product Quantity</th>
              <th> Product Price</th>
            </tr>
          </thead>

          <tbody>
            {this.props.order.lineItems.map((product) => (
              <tr key={product.productID}>
                <td>{product.productID}</td>
                <td>{product.quantity}</td>
                <td>{product.productPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const orderDetails = {
  customer: {
    customerID: 123,
    customerName: "Vinod",
    customerAddress: "Andhra",
  },
  lineItems: [
    { productID: 100001, quantity: 10, productPrice: 2000.0 },
    { productID: 100002, quantity: 5, productPrice: 5000 },
  ],
};
root.render(<Order order={orderDetails} />);