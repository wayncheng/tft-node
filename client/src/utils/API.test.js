import API from './API';

describe('API',function(){
	it('should fetch data', async function(){
		await API.fetch('/api/all')
			.then(response => {
				const {data} = response;
				console.log('data:',data);
			})
	})
})