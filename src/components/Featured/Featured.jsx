import React from "react";
import styles from "./Featured.module.css";

const brandDetail = [
  {
    id: 1,
    title: "LATEST RELEASES",
    imageUrl:
      "https://images.pexels.com/photos/20599134/pexels-photo-20599134/free-photo-of-woman-posing-in-front-of-a-neon-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "OUR ARTISTS",
    imageUrl:
      "https://images.pexels.com/photos/17650438/pexels-photo-17650438/free-photo-of-a-person-wearing-a-safety-helmet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "FEATURED NEWS",
    imageUrl:
      "https://images.pexels.com/photos/13917704/pexels-photo-13917704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Card = ({ title, imageUrl }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img src={imageUrl} alt="brand-img" className="card-image" />
    </div>
  );
};

const Featured = () => {
  return (
    <div className={styles.section}>
      <div className="card-list">
        {brandDetail.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
