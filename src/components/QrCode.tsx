import qrImage from "../assets/image-qr-code.png";
import styles from "./QrCode.module.css";

export const QrCode = () => {
  return (
    <div className={styles.container}>
      <img src={qrImage} alt="qr code" />
      <h1 className={styles.title}>
        Improve your front-end skills by building projects
      </h1>
      <p className={styles.description}>
        Scan the QR code to visit Frontend
        <br /> Mentor and take your coding skills to the next level
      </p>
    </div>
  );
};
