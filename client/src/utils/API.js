import axios from 'axios';

const API = {

	fetch: url => {
		return axios({
			method: 'GET',
			url: url,
			timeout: 0 // no timeout
		})
			.then(response => response)
			.catch(error => console.log(error));
	},

	post: (url,data) => {
		return axios({
			method: 'POST',
			url: url,
			data: data
		})
			.then(response => response)
			.catch(error => console.log(error));
	}

};
export default API;