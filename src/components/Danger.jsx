import React, { Suspense, lazy } from "react";
import Loader from "../elements/Loader/Loader";
import Default from "../components/Default";

const Zone = lazy(() => import("@elements/Danger/Zone"));

const VSCode = () => {
	return (
		<Default heading="Tu tu tucu tu tuúúúú tú tu to tu tu, tu tu tucutu tutututu" programName="YouTube">
			<Suspense fallback={<Loader />}>
				<Zone />
			</Suspense>
		</Default>
	);
};

export default VSCode;
