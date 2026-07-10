<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<title>Dashboard</title>

<link rel="stylesheet" href="styles.css">

</head>

<body>

<div style="padding:100px;text-align:center;">

<h1>Welcome <?php echo $_SESSION['fullname']; ?></h1>

<h2>Role: <?php echo $_SESSION['role']; ?></h2>

<p>This will become the Church Management System.</p>

<br><br>

<a href="logout.php" class="btn">Logout</a>

</div>

</body>

</html>