export const getSearchParams = (search) => {
	const params = new URLSearchParams(search);
	const paramsObj = {};
	for (const p of params) {
		paramsObj[p[0]] = p[1];
	}
	return paramsObj;
};

export const getPath = (path, url) => `${url}${path}`;
