import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import imageSrc from "../img/logo.png";

<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
></meta>;

export default function Head() {
  return (
    <nav className={styles.header}>
      <div className={styles.headerTitle}>
        <Link href="/">
          <Image src={imageSrc} />
        </Link>
      </div>
      <div className={styles.headerLink}>
        <ul className={styles.headerList}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/contsct">
              <a>Contsct</a>
            </Link>
          </li>
        </ul>
        <div className={styles.headerBtn}>
          <Link href="/buy">
            <a>購入する</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
