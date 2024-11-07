<?php
    $con = mysqli_connect("Localhost","root","","test");

    if (!$con) {
        die("Connection error". mysqli_connect_error());
    }

?>