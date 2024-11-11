import * as styles from "./AlCard.css";
function AlCard({ title, authform, children }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.leadCard} ${
          authform ? styles.authForm : styles.generalForm
        }`}
      >
        <h2 className={styles.cardTitle}>{title}</h2>
        {/* CHILDREN PROP FOR FORM! */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AlCard;
