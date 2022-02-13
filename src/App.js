import React, { useState, useEffect } from 'react';
import MainBox from './components/MainBox/MainBox';
import { initializeData } from './helpers/initializeData';
import { fakeData, presetRequirementsLow } from './helpers/fakeData';

function App() {
	const [initializedData, setInitializedData] = useState();


	useEffect(() => {
		const { listPresets, listCategories } = initializeData(
			fakeData,
			presetRequirementsLow
		);
    setInitializedData({ listCategories, listPresets });
	}, []);

	return (
		<MainBox initializedData={initializedData}  />
	);
}

export default App;
