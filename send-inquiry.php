<?php
// ================= SECURITY CHECK =================
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

// ================= SANITIZE FUNCTION =================
function clean($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

// ================= FETCH DATA =================
$name    = clean($_POST['name'] ?? '');
$email   = clean($_POST['email'] ?? 'Not Provided');
$phone   = clean($_POST['phone'] ?? '');
$city    = clean($_POST['city'] ?? 'Not Provided');
$message = clean($_POST['message'] ?? '');

// ================= VALIDATION =================
if ($name === '' || $phone === '' || $message === '') {
    echo "Required fields missing.";
    exit();
}

// ================= EMAIL CONFIG =================
$to = "amitparihast@gmail.com"; // RECEIVER EMAIL
$subject = "📩 New Inquiry – AmitParihast";

// IMPORTANT: DOMAIN EMAIL (better deliverability)
$fromEmail = "no-reply@amitparihast.com";
$fromName  = "Amit Parihast Website";

// ================= EMAIL BODY =================
$emailBody = "
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

<h2>📥 New Website Inquiry</h2>

<table>
  <tr>
    <td><strong>Name</strong></td>
    <td>{$name}</td>
  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td>{$email}</td>
  </tr>
  <tr>
    <td><strong>Phone</strong></td>
    <td>{$phone}</td>
  </tr>
  <tr>
    <td><strong>City</strong></td>
    <td>{$city}</td>
  </tr>
  <tr>
    <td><strong>Message</strong></td>
    <td>{$message}</td>
  </tr>
</table>

<br>
<p>
<strong>Website:</strong> https://www.amitparihast.com/<br>
<strong>Date:</strong> " . date("d M Y, h:i A") . "<br>
<strong>IP:</strong> " . $_SERVER['REMOTE_ADDR'] . "
</p>

</body>
</html>
";

// ================= HEADERS =================
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$fromName} <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$fromEmail}\r\n";

// ================= SEND MAIL =================
if (mail($to, $subject, $emailBody, $headers)) {
    header("Location: thank-you.html");
    exit();
} else {
    echo "<h3>Mail sending failed. Please try again later.</h3>";
}
?>
