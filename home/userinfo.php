<?php 
	
	$server = "sql206.epizy.com";
	$username = "epiz_26553356";
	$password = "PMhj6JjS7xV3BaA";
	$con = mysqli_connect($server, $username, $password);

	if (!$con) {
		die("Connection was interrupted due to ".mysqli_connect_error());
	}
	echo "<script>alert('Successfully connected to the database');<script>";

	mysqli_select_db($con, 'epiz_26553356_studytim');

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$query = "INSERT INTO `studyinfo` (`id`, `name`, `email`, `message`) VALUES ('', '$name', '$email', '$message');";
	mysqli_query($con, $query);
	echo $query;
	header('location: ../index.php')

 ?>