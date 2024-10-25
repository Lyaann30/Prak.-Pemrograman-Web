<?php

$char = '*';
$height = 5;

echo "Perulangan Segitiga Sama Sisi: <br>";

for($i = 1; $i <= $height; $i++) {
    for($j = 1; $j <= $height - $i; $j++) {
        echo "&nbsp;&nbsp";
    }

    for($j = 1; $j <= (2 * $i - 1); $j++) {
        echo $char;
    }
    
    echo "<br>";
}
    
echo "\nPerulangan Segitiga Sama Sisi Terbalik: <br>";

for($i = $height; $i >= 1; $i--) {
    for($j = 1; $j <= $height - $i; $j++) {
            echo "&nbsp;&nbsp";
        }
    
    for($j = 1; $j <= (2 * $i - 1); $j++) {
            echo $char;
        }
        
        echo "<br>";
    }
    
?>