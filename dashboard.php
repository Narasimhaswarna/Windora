<?php
$page_title = "Dashboard";
require_once 'config.php';

// Check if user is logged in
if(!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Get user information
$stmt = $conn->prepare("SELECT username, email FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

require_once 'header.php';
?>

<div class="dashboard-wrapper py-4 py-md-5">
    <div class="container">
        <div class="row g-4">
            <!-- User Profile Card -->
            <div class="col-12 col-lg-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body text-center p-4 p-md-5">
                        <div class="mb-4">
                            <div class="avatar-circle mx-auto bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle">
                                <span class="avatar-text"><?php echo strtoupper(substr($user['username'], 0, 1)); ?></span>
                            </div>
                        </div>
                        <h2 class="h4 mb-3">Welcome, <?php echo htmlspecialchars($user['username']); ?>!</h2>
                        <p class="text-muted mb-4"><?php echo htmlspecialchars($user['email']); ?></p>
                        <div class="d-grid gap-2">
                            <a href="index.php" class="btn btn-primary btn-lg">
                                <i class="fas fa-home me-2"></i>Go to Home
                            </a>
                            <form method="POST" action="logout.php">
                                <button type="submit" class="btn btn-outline-danger btn-lg w-100">
                                    <i class="fas fa-sign-out-alt me-2"></i>Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="col-12 col-lg-8">
                <!-- Quick Actions -->
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body p-4 p-md-5">
                        <h3 class="h4 mb-4">Quick Actions</h3>
                        <div class="row g-4">
                            <div class="col-12 col-sm-6">
                                <a href="#" class="action-card card text-decoration-none border-0 shadow-sm h-100">
                                    <div class="card-body p-4">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper bg-primary-subtle rounded-3 p-3 me-3">
                                                <i class="fas fa-solar-panel fs-2 text-primary"></i>
                                            </div>
                                            <div>
                                                <h4 class="h6 mb-1">Solar Solutions</h4>
                                                <p class="small text-muted mb-0">View your solar energy options</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-sm-6">
                                <a href="#" class="action-card card text-decoration-none border-0 shadow-sm h-100">
                                    <div class="card-body p-4">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper bg-primary-subtle rounded-3 p-3 me-3">
                                                <i class="fas fa-wind fs-2 text-primary"></i>
                                            </div>
                                            <div>
                                                <h4 class="h6 mb-1">Wind Energy</h4>
                                                <p class="small text-muted mb-0">Explore wind power solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-sm-6">
                                <a href="contact.php" class="action-card card text-decoration-none border-0 shadow-sm h-100">
                                    <div class="card-body p-4">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper bg-primary-subtle rounded-3 p-3 me-3">
                                                <i class="fas fa-envelope fs-2 text-primary"></i>
                                            </div>
                                            <div>
                                                <h4 class="h6 mb-1">Contact Support</h4>
                                                <p class="small text-muted mb-0">Get help from our team</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-sm-6">
                                <a href="#" class="action-card card text-decoration-none border-0 shadow-sm h-100">
                                    <div class="card-body p-4">
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper bg-primary-subtle rounded-3 p-3 me-3">
                                                <i class="fas fa-user-cog fs-2 text-primary"></i>
                                            </div>
                                            <div>
                                                <h4 class="h6 mb-1">Settings</h4>
                                                <p class="small text-muted mb-0">Manage your account</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4 p-md-5">
                        <h3 class="h4 mb-4">Recent Activity</h3>
                        <div class="text-center text-muted py-5">
                            <i class="fas fa-history fs-1 mb-3 d-block"></i>
                            <p class="mb-0">No recent activity to display.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.dashboard-wrapper {
    min-height: calc(100vh - 76px);
    background-color: #f8f9fa;
}

.avatar-circle {
    width: 120px;
    height: 120px;
}

.avatar-text {
    font-size: 3rem;
    font-weight: 600;
}

.icon-wrapper {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-card {
    transition: all 0.3s ease;
}

.action-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

@media (max-width: 576px) {
    .avatar-circle {
        width: 100px;
        height: 100px;
    }

    .avatar-text {
        font-size: 2.5rem;
    }

    .icon-wrapper {
        width: 56px;
        height: 56px;
    }

    .card-body {
        padding: 1.25rem !important;
    }
}

@media (min-width: 992px) {
    .dashboard-wrapper {
        padding-top: 2rem !important;
    }
}
</style>

<?php require_once 'footer.php'; ?> 