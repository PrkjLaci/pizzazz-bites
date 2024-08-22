const fetchNewItems = async (url, setNewItems) => {
  try {
    const response = await fetch(`${url}/api/Product/new-products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setNewItems(data.data);
    } else {
      console.error("Error fetching new items");
    }
  } catch (error) {
    console.error("Error fetching new items", error);
  }
};

export default fetchNewItems;
