function RunTest() {
	// With empty search value
	if (IsValid()) {
		console.log('Test 1 Status: Success');
		console.log('Test 1 Result : Search Box has value');
	}
	else {
		console.log('Test 1 Status: Failed');
		console.log('Test 1 Result : Search Box cannot be empty');
	}
	// with correct search value
	CallApi('Pizza','1')
	if ($('#hdnSuccess').val() == "yes") {
		console.log('Test 2 Status: Success');
		console.log('Test 2 Result : Search Box has a correct value');
	}

	// with wrong search value
	CallApi('WrongValue','1');
	if ($('#hdnStatus').val() == "404") {
		console.log('Test 3 Status: Success');
		console.log('Test 3 Result : Search Box has a wrong value');
	}

}