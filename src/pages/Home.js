import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Categorie from "../components/Categorie";
import Loading from "../components/Loading";

function Home() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
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
    <div>
      {/* Flash Sale */}
      <section className="mt-6">
        <h3 className="text-xl font-semibold">Flash Sale</h3>
        <div
          className={`flex flex-nowrap ${
            loading === true ? "items-center justify-center" : "space-x-5"
          } overflow-scroll no-scrollbar overscroll-auto hover:overscroll-contain pb-10 pt-5 px-5`}
        >
          {loading === true && <Loading />}
          {clothes?.map(
            ({ id, price, description, title, image, category }) => (
              <Card
                key={id}
                price={price}
                description={description}
                title={title}
                image={image}
                type="H"
                category={category}
              />
            )
          )}
        </div>
      </section>
      {/* Categories */}
      <section className="mt-6">
        <h3 className="text-xl font-semibold">Categories</h3>
        <div className="flex space-x-5 mt-5">
          <Categorie categorie="Men's Clothing" type="M" path="mens-clothing" />
          <Categorie
            categorie="Women's Clothing"
            type="W"
            path="womens-clothing"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
