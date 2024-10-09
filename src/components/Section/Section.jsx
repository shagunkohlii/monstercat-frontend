import React from "react";
import "./Section.css";

const brandDetail = [
  {
    id: 1,
    title: "Monstercat uncaged",
    imageUrl:
      "https://images.pexels.com/photos/13392284/pexels-photo-13392284.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Monstercat instinct",
    imageUrl:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Monstercat silk",
    imageUrl:
      "https://images.pexels.com/photos/2602132/pexels-photo-2602132.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Monstercat uncaged",
    imageUrl:
      "https://images.pexels.com/photos/3389618/pexels-photo-3389618.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Monstercat instinct",
    imageUrl:
      "https://images.pexels.com/photos/3312663/pexels-photo-3312663.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Monstercat silk",
    imageUrl:
      "https://images.pexels.com/photos/12129379/pexels-photo-12129379.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Card = ({ title, imageUrl }) => {
  return (
    <div className="section-card-container">
      <img src={imageUrl} alt="brand-img" className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

const Section = () => {
  return (
    <div className="section">
      <div className="flex-heading">
        <h1 className="brands-heading">GET INVOLVED</h1>
      </div>
      <div
        className="card-list"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {brandDetail.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Section;
