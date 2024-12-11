import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
const root = ReactDOM.createRoot(document.getElementById("root"));

class Order extends React.Component {

    static propTypes ={
      order : PropTypes.shape(
        {
        customer : PropTypes.shape(

        {
          customerID : PropTypes.number.isRequired,
          customerName : PropTypes.string.isRequired,
          customerAddress : PropTypes.string.isRequired

        }),
        shipping:PropTypes.shape({
          shipID:PropTypes.number.isRequired,
          shipAddress :PropTypes.number.isRequired
        }
      ),
      lineItems : PropTypes.arrayOf(
        PropTypes.shape(
          {
            productID : PropTypes.number.isRequired,
            quantity : PropTypes.number.isRequired,
            productPrice : PropTypes.number.isRequired
          }
        )
    )


    
    })
  }

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


        <h1> Shipping ID : { this.props.order.shipping.shipID}</h1>
        <h1> Shipping Address : { this.props.order.shipping.shipAddress}</h1>
      </>
    );
  }
}

const orderDetails = {
  customer: {
    customerID: "123",
    customerName: "Vinod",
    customerAddress: "Andhra",
  },
  shipping:{
    shipID:123,
    shipAddress:"Mumbai"
  },
  
  lineItems: [
    { productID: 100001, quantity: 1, productPrice: 2000.0 },
    { productID: 100002, quantity: 5, productPrice: 5000 },
  ],
};
root.render(<Order order={orderDetails} />);
