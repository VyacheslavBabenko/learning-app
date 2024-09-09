"use client";

import Link from "next/link";
import Image from "next/image";

import Question from "./Question/Question";
import "../../styles/learning.css";
import { useEffect, useState } from "react";

export default function Learning() {
	const [totalQuestions, setTotalQuestions] = useState(28);

	useEffect(() => {
		const storedTotal = localStorage.getItem("totalQuestions");
		if (storedTotal) {
			setTotalQuestions(parseInt(storedTotal, 10));
		} else {
			localStorage.setItem("totalQuestions", totalQuestions.toString());
		}
	}, []);

	return (
		<div className="learning-container">
			<div className="header-learning">
				<Link href="/" className="back-button">
					<Image
						src="/icons/arrow-left.svg"
						alt="back"
						width={19}
						height={15}
					/>
				</Link>
				<h1>Learning</h1>
			</div>
			<div className="tabs">
				<span className="active-tab">Tests</span>
			</div>
			<div className="questions-container">
				{Array.from({ length: totalQuestions }, (_, i) => (
					<Question key={i} number={i + 1} totalQuestions={totalQuestions} />
				))}
			</div>
		</div>
	);
}
