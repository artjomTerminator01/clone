import React from "react";
import Layout from "../Layout";
import BankOverview from "./BankOverview/BankOverview";

import classes from "./Home.module.scss";
import InfoCard from "./InfoCard/InfoCard";
const Home = () => {
  const infoCard = [
    {
      title: "Open",
      color: "blue",
      subtitle: "One or the core values or Swedbank",
      text: "Lorem Ipsum dolor sit amet, consectetur adipisicing elit",
      readMore: false,
    },
    {
      title: "Caring",
      color: "yellow",
      text: "Cum enim libero quisguam rerum. Dolorum tuga magnam nemo quae voluptas voluptates voluptatum.",
      readMore: true,
    },
    {
      title: "Simple",
      color: "purple",
      points: [
        "Lorem ipsum dolor sit amet. consectetur adipisicing elit",
        "Lorem ipsum dolor sit amet. consectetur adipisicing elit",
      ],
      readMore: false,
    },
  ];
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h3 className={classes.title}>Home</h3>
          <BankOverview />
          <div className={classes.card}>
            {infoCard.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                color={card.color}
                subtitle={card.subtitle}
                text={card.text}
                readMore={card.readMore}
                points={card.points}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
