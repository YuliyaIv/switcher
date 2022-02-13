exports.initializeData = (listCategories, nameForPresetLow) => {
	const presetStrong = listCategories.map((categ) => categ.id);
	const presetLow = nameForPresetLow.map((name) => {
		const particularCategory = listCategories.find(
			(category) => name === category.name
		);
		return particularCategory.id;
	});
	const listPresets = {
		none: [],
		low: presetLow,
		strong: presetStrong,
		custom: [],
	};
	return { listCategories, listPresets };
};
