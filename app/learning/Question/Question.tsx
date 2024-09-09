"use client";

import { useState, useEffect } from "react";
import styles from "./Question.module.css";

interface QuestionProps {
	number: number;
	totalQuestions: number;
}

export default function Question({ number, totalQuestions }: QuestionProps) {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const activeQuestions = JSON.parse(
			localStorage.getItem("activeQuestions") || "[]"
		);
		setActive(activeQuestions.includes(number));
	}, [number]);

	const toggleActive = () => {
		const newActive = !active;
		setActive(newActive);

		let activeQuestions = JSON.parse(
			localStorage.getItem("activeQuestions") || "[]"
		);
		if (newActive) {
			activeQuestions.push(number);
		} else {
			activeQuestions = activeQuestions.filter((q: number) => q !== number);
		}
		localStorage.setItem("activeQuestions", JSON.stringify(activeQuestions));
		localStorage.setItem("totalQuestions", totalQuestions.toString());
	};

	return (
		<div
			className={`${styles.question} ${active ? styles.active : ""}`}
			onClick={toggleActive}
		>
			{number}
		</div>
	);
}
