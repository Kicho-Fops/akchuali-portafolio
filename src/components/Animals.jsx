import React, { Suspense, lazy } from "react";
import Default from "../components/Default";
import Loader from "../elements/Loader/Loader";
import ApiFetch from "@elements/ApiFetch/ApiFetch";
const GitContent = lazy(() => import("../elements/Git/GitContent"));





const Animals = () => {
	return (
		<Default heading="Animals, or just probably a fox" contextMenu={true} resizable={true}  programName="Animals">
			<Suspense fallback={<Loader />}>
				<ApiFetch />
			</Suspense>
		</Default>
	);
};

export default Animals;
