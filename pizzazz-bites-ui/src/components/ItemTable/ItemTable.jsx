import { RiShoppingCartLine } from "react-icons/ri";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "./ItemTable.css";


const ItemTable = ({ itemName, items, clickedItemType, page }) => {
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col" className="item-table-nav">
            {itemName} » {clickedItemType === "" ? "Show All" : clickedItemType}{" "}
            » {page} page
          </th>
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
                className="item-image"
              />
            </td>
            <td className="table-description">
              <h4 className="fw-bold mb-0">
                {item.productId <= 9 ? `0${item.productId}. ` : `${item.productId}. `}
                {item.name}
              </h4>
              <p className="mb-1">
                <i>{item.description ? item.description : item.ingredients}</i>
              </p>
              <p className="mb-1">
                <i>{item.isAlcoholic ? `Alcohol percentage: ${item.alcoholPercentage}%` : ""}</i>
              </p>
              <p className="mb-1">
                <i>{item.volume}</i>
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
