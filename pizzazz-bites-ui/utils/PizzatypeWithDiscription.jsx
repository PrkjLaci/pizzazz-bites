const PizzatypeWithDiscription = ({pizzatype}) => {
  console.log(pizzatype);
  switch (pizzatype) {
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
  }
};

export default PizzatypeWithDiscription;
