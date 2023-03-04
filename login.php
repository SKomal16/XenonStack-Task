<?php
// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// Retrieve the form data
	$username = $_POST['username'];
	$password = $_POST['password'];

	// Validate the form data (e.g. check if the fields are not empty)
	if (empty($username) || empty($password)) {
		echo "Please fill in all fields.";
	} else {
		// Connect to the database
		$servername = "localhost";
		$username = "your_username";
		$password = "your_password";
		$dbname = "your_database_name";

		$conn = mysqli_connect($servername, $username, $password, $dbname);

		// Check if the connection was successful
		if (!$conn) {
			die("Connection failed: " . mysqli_connect_error());
		}

		// Perform the query to check if the username and password are correct
		$sql = "SELECT * FROM users WHERE username = '$username' AND password = 
'$password'";
		$result = mysqli_query($conn, $sql);

		// Check if there is a match
		if (mysqli_num_rows($result) == 1) {
			// Redirect the user to the dashboard page
			header("Location: dashboard.php");
			exit();
		} else {
			echo "Invalid username or password.";
		}

		// Close the database connection
		mysqli_close($conn);
	}
}
?>

