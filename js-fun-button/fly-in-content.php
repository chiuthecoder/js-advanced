<button type="button" class="btn" style="height: 200px; background: #ccc;">
	Fly-in content<br>
	<?php
$date=date_create("2015-05-14");
echo "<p>Created date is " . date_format($date,"Y/m/d") . "</p>";
echo "<p>Today is " . date("Y/m/d") . "</p>";
?>
</button>