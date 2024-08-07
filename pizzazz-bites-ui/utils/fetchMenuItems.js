const fetchMenuItems = async (
  url,
  type = "",
  page,
  itemTypes,
  filterType,
  setItems,
  setItemCount
) => {
  if (type === "Show All") type = "";
  if (type === "Italian & International") type = "ItalianAndInternational";
  if (type === "Pizza Al Carbone") type = "PizzaAlCarbone";

  const pageSize = 10;

  try {
    const endpoint =
      type === ""
        ? `${url}/${itemTypes}?page=${page}&pageSize=${pageSize}`
        : `${url}/${itemTypes}/type/${type}?${filterType}TypeString=${type}&page=${page}&pageSize=${pageSize}`;
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
      console.error(`Failed to fetch ${filterType}`, response.statusText);
      setError("Failed to fetch pizzas.");
    }
  } catch (error) {
    console.error(`Error fetching ${filterType}`, error);
  }
};

export default fetchMenuItems;
