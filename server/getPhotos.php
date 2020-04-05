<?php 
	require "common.php";
	

	header("Access-Control-Allow-Origin: *");
	//header("Content-Type: application/json; charset=UTF-8");

	$myArr = array();

	$pic_dir=array_diff(scandir("photos/".$_GET['event']), ['.', '..']);	

	foreach ($pic_dir as $key => $value) {
		array_push($myArr, $path."server/photos/".$_GET['event'].'/'.$value);
	}
		
	$myJSON = json_encode($myArr);
	echo $myJSON;

 ?>