import React from "react";
import styles from "./Logo.module.css";

const Logo = ({ subTitleSize, size, logoSize }) => {
  // const size = "20px";
  return (
    <div className={styles.logo}>
      <img
        className={styles.logo__Image}
        src="/images/text-editor.png"
        alt="syncronize-logo"
        style={{
          height: logoSize ? `${logoSize}` : "70px",
        }}
      />
      <div className={styles.logo__title}>
        <h1 style={{ fontSize: size ? `${size}` : "" }}>Syncronize</h1>
        <p style={{ fontSize: subTitleSize ? `${subTitleSize}` : "" }}>
          Collaborate with Teammates
        </p>
      </div>
    </div>
  );
};

export default Logo;
