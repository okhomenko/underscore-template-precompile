requirejs(['underscore', 'templates/temp1.html', 'templates/temp2.html'], function (_, template1, template2) {

	var data = {
		collection: {
			models: [{
				name: 'A1'
			}, {
				name: 'B2'
			}]
		}
	};
	
	var content1 = template1(data),
		content2 = template2(data);

	console.log(content1.length, content1);
	console.log(content2.length, content2);
});