<?php
$page_title = "Sign In";
require_once 'config.php';
require_once 'header.php';

if(isset($_POST['login'])) {
    try {
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            header("Location: dashboard.php");
            exit();
        } else {
            $error = "Invalid email or password";
        }
    } catch(Exception $e) {
        $error = "Error: " . $e->getMessage();
    }
}
?>

<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="card shadow">
                <div class="card-body p-5">
                    <h2 class="text-center mb-4">Sign In</h2>
                    
                    <?php if(isset($error)): ?>
                        <div class="alert alert-danger"><?php echo $error; ?></div>
                    <?php endif; ?>

                    <?php if(isset($_SESSION['success'])): ?>
                        <div class="alert alert-success"><?php echo $_SESSION['success']; ?></div>
                        <?php unset($_SESSION['success']); ?>
                    <?php endif; ?>

                    <form method="POST" action="">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>
                        <button type="submit" name="login" class="btn btn-success w-100">Sign In</button>
                    </form>
                    
                    <div class="text-center mt-3">
                        Don't have an account? <a href="signup.php">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once 'footer.php'; ?> 