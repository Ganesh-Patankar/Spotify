<?php
  $host = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "spotify reviews";

$conn = mysqli_connect ($host, $username, $password, $dbname);
if(!$conn){
    echo "connection fail" . mysqli_connect_error();
    exit;
}
$name =$_POST["username"];
$ratting =$_POST["rating"];
$description =$_POST["Feedbackdescription"];
    
    $sqlquery = "INSERT INTO reviews (name, rating, description) VALUES ('$name', '$ratting', '$description')";
    
    $result = mysqli_query($conn,$sqlquery);
    if(!$result){
        echo "error" . mysqli_error($conn);
        exit;
    }
   
    ?>