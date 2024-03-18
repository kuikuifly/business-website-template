import styles from './footer.module.scss'
import Link from "next/link";

export default function NavPc() {
  return (
    <div className={styles['nav-pc']}>
      <div>
        © 成都至臻科技有限公司 2024 版权所有
      </div>
    </div>
  );
}
