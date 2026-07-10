<?php
session_start();

include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users
        WHERE username='$username'
        AND password='$password'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 1){

    $user = mysqli_fetch_assoc($result);

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['fullname'] = $user['fullname'];
    $_SESSION['role'] = $user['role'];

    header("Location: dashboard.php");
    exit();

}else{

    echo "<script>
    alert('Incorrect username or password');
    window.location='login.php';
    </script>";

}
?>