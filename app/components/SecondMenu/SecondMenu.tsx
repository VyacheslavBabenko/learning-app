import Link from "next/link";
import Image from "next/image";
import styles from "./SecondMenu.module.css";

export default function SecondMenu() {
	return (
		<div className={styles.secondMenu}>
			<Link href="/" className={styles.item}>
				<Image
					src="/icons/mistakes.svg"
					alt="Mistakes"
					width={58}
					height={58}
				/>
				<span>Mistakes</span>
			</Link>
			<Link href="/" className={styles.item}>
				<Image
					src="/icons/statistics.svg"
					alt="Statistics"
					width={58}
					height={58}
				/>
				<span>Statistics</span>
			</Link>
			<Link href="/" className={styles.item}>
				<Image
					src="/icons/highway-code.svg"
					alt="Highway Code"
					width={58}
					height={58}
				/>
				<span>Highway Code</span>
			</Link>
			<Link href="/" className={styles.item}>
				<Image
					src="/icons/favorites.svg"
					alt="Favorites"
					width={58}
					height={58}
				/>
				<span>Favorites</span>
			</Link>
		</div>
	);
}
