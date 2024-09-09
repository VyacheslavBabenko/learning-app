"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/home.css";
import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import MainMenu from "./components/MainMenu/MainMenu";
import SecondMenu from "./components/SecondMenu/SecondMenu";
import BottomMenu from "./components/BottomMenu/BottomMenu";

export default function Home() {
	const [passedQuestions, setPassedQuestions] = useState(0);
	const [totalQuestions, setTotalQuestions] = useState(0);

	useEffect(() => {
		const activeQuestions = JSON.parse(
			localStorage.getItem("activeQuestions") || "[]"
		);
		const total = localStorage.getItem("totalQuestions");
		setPassedQuestions(activeQuestions.length);
		setTotalQuestions(total ? parseInt(total, 10) : 0);
	}, []);

	return (
		<div className="home-container">
			<div className="header">
				<h1>Ray Driving Theory</h1>
				<div className="header-buttons">
					<button>
						<Image src="/icons/crown.svg" alt="crown" width={18} height={16} />
					</button>
					<button>
						<Image src="/icons/fire.svg" alt="fire" width={15} height={19} />
						<span>13</span>
					</button>
				</div>
			</div>
			<div className="learning-card-wrapper">
				<div className="learning-card">
					<Link href="/learning" className="learning-link">
						<Image
							src="/icons/learning.svg"
							alt="Learning"
							width={58}
							height={58}
						/>
						<div className="learning-text">
							<h2>Learning</h2>
							<p>Category B</p>
						</div>

						<Image
							className="learning-arrow"
							src="/icons/small-arrow.svg"
							alt="Learning"
							width={19}
							height={19}
						/>
					</Link>
					<ProgressBar progress={passedQuestions} total={totalQuestions} />
				</div>
			</div>
			<MainMenu />
			<SecondMenu />
			<BottomMenu />
		</div>
	);
}
