const fetchMenuItems = async (
  url,
  clickedSubType = "",
  page,
  productType,
  setItems,
  setItemCount
) => {
  if (clickedSubType === "Show All") clickedSubType = "";
  if (clickedSubType === "Italian & International") clickedSubType = "ItalianAndInternational";
  if (clickedSubType === "Pizza Al Carbone") clickedSubType = "PizzaAlCarbone";

  const pageSize = 10;
  console.log("fetchMenuItems", clickedSubType, page, productType);

  try {
    const endpoint =
      clickedSubType === ""
        ? `${url}/api/Product/products-by-type?productType=${productType}&page=${page}&pageSize=${pageSize}`
        : `${url}/api/Product/products-by-sub-type?productType=${productType}&subType=${clickedSubType}&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setItems(data.data);
      setItemCount(data.count);
    } else {
      console.error(`Failed to fetch ${productType}`, response.statusText);
      setError("Failed to fetch pizzas.");
    }
  } catch (error) {
    console.error(`Error fetching ${productType}`, error);
  }
};

export default fetchMenuItems;
