import { RiShoppingCartLine } from "react-icons/ri";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "./ItemTable.css";

const ItemTable = ({ items,clickedPizzaType, page }) => {
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col" className="pizza-table-nav">Pizza » {clickedPizzaType} » {page} page</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {items.map((item) => (
          <tr key={item.id} className="m-5 table-img">
            <td className="talbe-image">
              <img
                src={item.imageUrl}
                alt=""
                style={{ width: "12rem", height: "12rem" }}
                className="item-image"
              />
            </td>
            <td className="table-description">
              <h4 className="fw-bold mb-0">
                {item.id <= 9 ? `0${item.id}. ` : `${item.id}. `}
                {item.name}
              </h4>
              <p className="mb-1">
                <i>{item.description ? item.description : item.ingredients}</i>
              </p>
            </td>
            <td className="table-pricing">
              {item.price}.-
              <MDBBtn color="" rounded size="sm" className="cart-button">
                <RiShoppingCartLine />
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ItemTable;
