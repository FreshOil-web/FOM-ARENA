<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Login | Fresh Oil Ministries</title>

<link rel="stylesheet" href="styles.css">

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

</head>

<body class="login-page">

<div class="login-container">

    <div class="login-card">

        <img src="images/logo.jpg" class="login-logo" alt="Church Logo">

        <h1>Fresh Oil Ministries</h1>

        <p>The Liberation House<br>Where Jesus Is Revealed</p>

        <form action="authenticate.php" method="POST">

            <input
                type="text"
                name="username"
                placeholder="Username"
                required
            >

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
            >

            <button type="submit">

                Login

            </button>

        </form>

    </div>

</div>

</body>
</html>