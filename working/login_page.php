<?php
	if(isLoggedIn()) { logout(); } // logout any active sessions
	if (isset($_GET['err'])) {
		$error = $_GET['err'];
		switch ($error) {
			case 'pass':
				echo '<div id=\'errorMessage\'>Password is incorrect</div>';
				break;
			case 'user':
				echo '<div id=\'errorMessage\'>Username does not exist</div>';
				break;
			}
		}
?>

<form id="signIn" name="login" action="working/check_login.php" method="post">
	<div>
      Username: <br>
      Password: <br>
	</div>
      <input autocomplete="off" autofocus type="text" name="username" /><br>
      <input autocomplete="off" type="password" name="password" />
   	<br>
   <input id="signInButton" type="submit" value="Login" />
</form>
<form id="createNew" action="?page=create_new_account" method="post">
	<input id="createNewAccount" type="submit" value="Create New Account" />
</form>