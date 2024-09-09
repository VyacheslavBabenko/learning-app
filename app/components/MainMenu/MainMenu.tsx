import Image from "next/image";
import styles from "./MainMenu.module.css";
import Link from "next/link";

export default function MainMenu() {
	return (
		<div className={styles.menu}>
			<Link href="/" className={styles.menuItem}>
				<Image
					src="/icons/dvsa-exam.svg"
					alt="DVSA Exam"
					width={40}
					height={40}
				/>
				<span>DVSA Exam</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<Image
					src="/icons/express-mode.svg"
					alt="Express mode"
					width={40}
					height={40}
				/>
				<span>Express mode</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<Image
					src="/icons/hazard-perception.svg"
					alt="Hazard perception"
					width={40}
					height={40}
				/>
				<span>Hazard perception</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<Image
					src="/icons/road-signs.svg"
					alt="Road signs"
					width={40}
					height={40}
				/>
				<span>Road signs</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<Image
					src="/icons/multiplayer-learning.svg"
					alt="Multiplayer Learning"
					width={40}
					height={40}
				/>
				<span>Multiplayer Learning</span>
			</Link>
		</div>
	);
}
