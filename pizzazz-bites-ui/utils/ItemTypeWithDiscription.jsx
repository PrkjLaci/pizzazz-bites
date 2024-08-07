const ItemTypeWithDiscription = ({ clickedItemType }) => {
  switch (clickedItemType) {
    case "Italian & International":
      return (
        <>
          <h3>Italian & International</h3>
          <p>
            <i>
              Italian & International pizzas are a mix of traditional Italian
              pizzas and pizzas from around the world.
            </i>
          </p>
        </>
      );
    case "Artisan":
      return (
        <>
          <h3>Artisan</h3>
          <p>
            <i>
              Artisan pizzas are handcrafted pizzas made with high-quality
              ingredients.
            </i>
          </p>
        </>
      );
    case "Pizza Al Carbone":
      return (
        <>
          <h3>Pizza Al Carbone</h3>
          <p>
            <i>
              Pizza Al Carbone pizzas are made with a special charcoal-infused
              dough.
            </i>
          </p>
        </>
      );
    case "Italian":
      return (
        <>
          <h3>Italian dessert</h3>
          <p>
            <i>
              Italian desserts are made with traditional Italian ingredients.
            </i>
          </p>
        </>
      );
    case "International":
      return (
        <>
          <h3>International desserts</h3>
          <p>
            <i>International desserts from around the world.</i>
          </p>
        </>
      );
  }
};

export default ItemTypeWithDiscription;
