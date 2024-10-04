import React from "react";
import "./Brands.css";

const brandDetail = [
  {
    id: 1,
    title: "Monstercat uncaged",
    imageUrl:
      "https://images.pexels.com/photos/10482161/pexels-photo-10482161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Monstercat instinct",
    imageUrl:
      "https://images.pexels.com/photos/27945000/pexels-photo-27945000/free-photo-of-a-woman-in-a-costume-with-neon-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Monstercat silk",
    imageUrl:
      "https://images.pexels.com/photos/13638375/pexels-photo-13638375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Card = ({ title, imageUrl }) => {
  return (
    <div className="card-container">
      <img src={imageUrl} alt="brand-img" className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

const Brands = () => {
  return (
    <div className="flex-heading">
      <div className="flex-heading">
        <h1 className="brands-heading">Our Brands</h1>
      </div>
      <div className="card-list">
        {brandDetail.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
