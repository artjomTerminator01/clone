import classNames from "classnames";
import React from "react";
import classes from "./InfoCard.module.scss";

const InfoCard = ({ title, color, subtitle, text, readMore, points }) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classNames(classes.colorHeader, classes[color])}>
        <div
          className={classNames(
            classes.triangleDown,
            classes[`triangleDown__${color}`]
          )}
        ></div>
        <h4>{title}</h4>
      </div>
      <div className={classes.textBox}>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        {text && <p className={classes.text}>{text}</p>}
        {readMore && (
          <a href="/" className={classes.readMore}>
            <span className={classes.readMore__triangle}>▸</span> Read more
          </a>
        )}
        {points &&
          points.map((point, index) => (
            <div className={classes.pointWrapper}>
              <div className={classes.bullet} />
              <p key={index} className={classes.text}>
                {point}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfoCard;
