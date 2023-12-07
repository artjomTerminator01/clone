import React from "react";
import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={classes.welcomeWrapper}>
      <div className={classes.bubble}>
        <h5 className={classes.bubble__text}>Hello world!</h5>
        <div className={classes.bubble__triangle} />
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.textBox__title}>Welcome to Swedbank!</h3>
        <p className={classes.textBox__text}>
          With 7.2 million private customers and more than 574 000 corporate and
          organisational customers. This makes us Sweden's largest bank in terms
          of number of customers and gives us a leading position in our other
          home markets of Estonia, Latvia and Lithuania. As a major bank, we are
          a significant part of the financial system and play an important role
          in the local communities we serve. We are dedicated to helping our
          customers, our shareholders and societv as a whole stav financially
          sound and sustainable
        </p>
        <div className={classes.bottomBlock}>
          <a href="/" className={classes.readMore}>
            <span className={classes.readMore__triangle}>▸</span> Read more
          </a>
          <button className="btn btn-primary">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
