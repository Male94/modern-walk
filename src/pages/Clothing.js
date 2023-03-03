import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Clothing({ type }) {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  const categorie = type === "M" ? "men's clothing" : "women's clothing";

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      .then((res) => res.json())
      .then((data) => {
        setClothes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold">
        {type === "M" ? "Men's " : "Women's "}Clothing
      </h3>
      <div className="grid grid-cols-4 gap-14 mt-5">
        {loading === true && <Loading />}
        {clothes?.map(({ id, price, description, title, image }) => (
          <Card
            key={id}
            price={price}
            description={description}
            title={title}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}

export default Clothing;
