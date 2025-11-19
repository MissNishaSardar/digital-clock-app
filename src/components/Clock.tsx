"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./shadcnui/sliding-number";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minutes, setMinutes] = useState(parseInt("00"));
	const [seconds, setSeconds] = useState(parseInt("00"));
	const [meridian, setMeridian] = useState("XX");

	const [date, setDate] = useState(format(new Date(), "eeee , dd MMMM yyyy"));

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(parseInt(format(new Date(), "hh")));
			setMinutes(parseInt(format(new Date(), "mm")));
			setSeconds(parseInt(format(new Date(), "ss")));
			setMeridian(format(new Date(), "a"));

			setDate(format(new Date(), "eeee , dd MMMM yyyy"));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="grid place-items-center">
				<div className="flex items-center gap-1 font-mono text-9xl">
					<SlidingNumber
						value={hours}
						padStart={true}
					/>
					<span className="animate-pulse">:</span>
					<SlidingNumber
						value={minutes}
						padStart={true}
					/>
					<span className="animate-pulse">:</span>
					<SlidingNumber
						value={seconds}
						padStart={true}
					/>
					<span className="ms-2">{meridian}</span>
				</div>

				<div className="text-center text-6xl">{date}</div>
			</div>
		</>
	);
};

export default Clock;
