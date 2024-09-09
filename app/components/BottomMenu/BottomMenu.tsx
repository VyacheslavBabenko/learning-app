import Image from "next/image";
import styles from "./BottomMenu.module.css";
import Link from "next/link";

const BottomMenu = () => {
	return (
		<nav className={styles.bottomMenu}>
			<Link href="/" className={styles.menuItem}>
				<div className={styles.imgWrapperActive}>
					<Image src="/icons/home.svg" alt="Home" width={18} height={18} />
				</div>
				<span>Home</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<div className={styles.imgWrapper}>
					<Image
						src="/icons/your-plan.svg"
						alt="Your plan"
						width={19}
						height={19}
					/>
				</div>
				<span>Your plan</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<div className={styles.imgWrapper}>
					<Image
						src="/icons/leaderboard.svg"
						alt="Leaderboard"
						width={18}
						height={18}
					/>
				</div>
				<span>Leaderboard</span>
			</Link>
			<Link href="/" className={styles.menuItem}>
				<div className={styles.imgWrapper}>
					<Image
						src="/icons/profile.svg"
						alt="Profile"
						width={15}
						height={19}
					/>
				</div>
				<span>Profile</span>
			</Link>
		</nav>
	);
};

export default BottomMenu;
