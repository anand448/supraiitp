<?php
	
	$email = htmlentities($_POST['email']);
	$email = strtolower($email);
	
	if (filter_var($email, FILTER_VALIDATE_EMAIL))
	{
		//echo"hi";
		echo "1";
	}
	else
	{
		//echo"bye";
		echo "0";
	}

?>