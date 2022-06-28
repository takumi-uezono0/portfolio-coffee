import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import imageSrc from "../img/logo.png";
import imageSrc2 from "../img/logo@2x.png";

<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
></meta>;

export default function Head() {
  if (
    navigator.userAgent.indexOf("iPhone") > 0 ||
    (navigator.userAgent.indexOf("Android") > 0 &&
      navigator.userAgent.indexOf("Mobile") > 0) ||
    navigator.userAgent.indexOf("iPad") > 0 ||
    navigator.userAgent.indexOf("Android") > 0
  ) {
    return (
      <nav className={styles.header}>
        <div className={styles.headerTitle}>
          <Link href="/">
            <Image src={imageSrc2} />
          </Link>
        </div>
        <div className={styles.headerLink}>
          <div className={styles.headerBtn}>
            <Link href="/buy">
              <a>購入する</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
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
}
