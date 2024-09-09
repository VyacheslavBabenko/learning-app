import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
	progress: number;
	total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
	const steps = 6; // Количество ступеней
	const filledSteps = Math.floor((progress / total) * steps);

	return (
		<div className={styles.progressBarContainer}>
			<div className={styles.progressText}>
				{progress} out of {total} passed
			</div>
			<div className={styles.progressBar}>
				{[...Array(steps)].map((_, index) => (
					<div
						key={index}
						className={`${styles.progressStep} ${
							index < filledSteps ? styles.filled : ""
						}`}
						style={{
							width: `${100 / steps - 1}%`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default ProgressBar;
