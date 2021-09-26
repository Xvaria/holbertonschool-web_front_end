function welcome(firstName, lastName) {
	let fullName = firstName + ' ' + lastName;

	function displayFullName() {
		return 'Welcome ' + fullName + '!';
	}
	alert(displayFullName());
}