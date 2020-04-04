<?php 
	require "common.php";
	

	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	$myArr = array();

	$select_query="SELECT id, name, startDate, endDate, description, cover FROM events";
	$select_query_results=mysqli_query($con, $select_query);
	$number_of_rows=mysqli_num_rows($select_query_results);

	$cover_pic_dir=array_diff(scandir("cover"), ['.', '..']);

	for ($i=0; $i < $number_of_rows; $i++) { 
		$row = mysqli_fetch_array($select_query_results);
		array_push($myArr, array(
				"id"=>$row["id"],
				"name"=>$row["name"],
				"date"=>$row["startDate"],
				"description"=>$row["description"],
				"cover"=>$path."server/cover/".$row["cover"]
			));
	}

	
	$myJSON = json_encode($myArr);
	echo $myJSON;

 ?>