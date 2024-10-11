import React, { useState, useEffect, useContext } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBAccordion,
  MDBAccordionItem,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../../utils/AuthContext";
import url from "../../../../utils/url";

const OrderHistoryModal = ({ isOpen, toggleModal }) => {
  const [orders, setOrders] = useState([]);
  const { userData } = useContext(AuthContext);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}/api/Order/get-orders-by-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      });
      if (response.ok) {
        const responseObj = await response.json();
        setOrders(responseObj.data);
      }
    } catch (error) {
      console.error(error, "Error fetching orders.");
    }
  };

  const paymentMethodFormatter = (paymentMethod) => {
    switch (paymentMethod) {
      case "CashOnDelivery":
        return "Cash on delivery";
      case "CreditCardOnDelivery":
        return "Credit card on delivery";
      case "CreditCard":
        return "Credit card";
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [isOpen]);

  console.log(orders);

  return (
    <MDBModal open={isOpen} tabIndex="-1">
      <MDBModalDialog size="lg">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Order History</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleModal}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBAccordion initialActive={1}>
              {orders.map((order) => (
                <MDBAccordionItem
                  collapseId={order.id}
                  headerTitle={`Order #${order.id}`}
                >
                  <p>
                    <strong>Order date:</strong>{" "}
                    {`${order.orderDate.split("T")[0]} ${
                      order.orderDate.split("T")[1].split(".")[0]
                    }`}
                  </p>
                  <p>
                    <strong>Order address: </strong> {order.address}
                  </p>
                  <p>
                    <strong>Payment method:</strong>{" "}
                    {paymentMethodFormatter(order.paymentMethod)}
                  </p>
                  <p>
                    {order.loyaltyPointsEarned > 0 ? (
                      <>
                        <strong>Loyalty points earned: </strong>{" "}
                        {order.loyaltyPointsEarned}
                      </>
                    ) : (
                      <>
                        <strong>Loyalty points used: </strong>{" "}
                        {order.loyaltyPointsUsed}
                      </>
                    )}
                  </p>
                  <p>
                    <strong>Total Price: </strong>
                    {order.totalPrice} 
                    {order.totalPrice >= 4000 ? "(free shipping)" : ("shipping fee included")}
                  </p>
                  <MDBAccordion>
                    <MDBAccordionItem
                      collapseId={1}
                      headerTitle="Ordered items details"
                    >
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {order.orderProducts.map((item) => (
                            <tr key={item.product.id}>
                              <td>{item.product.id}</td>
                              <td>{item.product.name}</td>
                              <td>{item.product.price}.-</td>
                              <td>{item.quantity}</td>
                            </tr>
                          ))}
                        </MDBTableBody>
                      </MDBTable>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </MDBAccordionItem>
              ))}
            </MDBAccordion>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleModal}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default OrderHistoryModal;
