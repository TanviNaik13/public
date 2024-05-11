<?php
// Your PHP code here (database connection and query)
$servername = "localhost";
$username = " ";
$password = " ";
$dbname = "pbl";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT image, name, price FROM low_carbs";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td><img src='" . $row["image"] . "' alt='" . $row["name"] . "' width='100'></td>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>$" . $row["price"] . "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='3'>No meals found</td></tr>";
}
$conn->close();
?>
