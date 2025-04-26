import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CatImage.module.scss";

const CatImage = () => {
  const { imageUrl } = useSelector((state: RootState) => state.cat);

  if (!imageUrl) {
    return <div className={styles.placeholder}>No cat yet 🐱</div>;
  }

  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt="Cute Cat" className={styles.image} />
    </div>
  );
};

export default CatImage;
