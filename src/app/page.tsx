import Clock from "@/components/Clock";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Digital Clock App",
	description: "Digital Clock App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="rounded-lg p-20 backdrop-blur-lg">
				<Suspense>
					<Clock />
				</Suspense>
			</div>
		</section>
	);
};

export default page;
