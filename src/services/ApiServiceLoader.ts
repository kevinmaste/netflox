import axios from "axios";
import { LoaderFunction } from "react-router-dom";
import { options, urlLinkxs } from "./Api";

export const fetchApi: LoaderFunction = async () => {
	const page = 1;
	const uri = `${urlLinkxs}+'&page=${page}`;
	try {
		const response = await axios.get<unknown>(uri, options);

		return response?.data;
	} catch (error) {
		return error;
	}
};
