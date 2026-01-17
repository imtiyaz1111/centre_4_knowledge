<?php
// ================= SECURITY CHECK =================
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

// ================= SANITIZE INPUT =================
function cleanInput($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$name   = cleanInput($_POST['name'] ?? '');
$phone  = cleanInput($_POST['phone'] ?? '');
$city   = cleanInput($_POST['city'] ?? 'Not Provided');
$source = cleanInput($_POST['source'] ?? 'Website Inquiry');

// ================= VALIDATION =================
if (empty($name) || empty($phone)) {
    echo "Required fields are missing.";
    exit();
}

// ================= EMAIL CONFIG =================
$to = "accountsacademy@gmail.com"; // CHANGE TO YOUR EMAIL
$subject = "📩 New Inquiry – Accounts Online Classes";

// IMPORTANT: Domain email recommended
$fromEmail = "no-reply@yourdomain.com";
$fromName  = "Accounts Online Academy";

// ================= EMAIL BODY =================
$message = "
<html>
<head>
<style>
body { font-family: Arial, sans-serif; }
table { border-collapse: collapse; width: 100%; }
td { padding: 10px; border: 1px solid #ddd; }
h2 { color: #0b2c4d; }
</style>
</head>
<body>

<h2>📥 New Student Inquiry Received</h2>

<table>
<tr>
    <td><strong>Name</strong></td>
    <td>{$name}</td>
</tr>
<tr>
    <td><strong>Mobile</strong></td>
    <td>{$phone}</td>
</tr>
<tr>
    <td><strong>City</strong></td>
    <td>{$city}</td>
</tr>
<tr>
    <td><strong>Source Page</strong></td>
    <td>{$source}</td>
</tr>
</table>

<br>
<p>
<strong>Website:</strong> Accounts Online Academy<br>
<strong>Time:</strong> " . date("d M Y, h:i A") . "<br>
<strong>IP Address:</strong> " . $_SERVER['REMOTE_ADDR'] . "
</p>

</body>
</html>
";

// ================= EMAIL HEADERS =================
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$fromName} <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$fromEmail}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ================= SEND EMAIL =================
if (mail($to, $subject, $message, $headers)) {
    header("Location: thank-you.html");
    exit();
} else {
    echo "<h3>Mail sending failed. Please try again later.</h3>";
}
?>
