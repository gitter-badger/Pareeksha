<?php
/***************************************************************************

	This is a sample server-side script to illustrate logging data remotely.
	Typically this is the type of script that would be called by a widget
	that is running test cases where test results must be stored.

	Asynchronous Javascript And XML (AJAX) methods are used to send data
	between client and server.  The POST method is used in this example.
	This particular script logs all POSTed data to a text file, preceeded by
	the user's IP address and a timestamp, separated by a tab character:

		127.0.0.1  20061031123456  Name=John Smith
		====|====  =======|======  =======|=======
		    |             |               |
		    |             |        <element-name>=<data>
		    |             |
		    |      <formatted timestamp (YYYYMMDDHHNNSS)>
		    |
		<IP addr>

***************************************************************************/

error_reporting(E_ALL);
	define("DEFAULT_DATA_HEADER", "_POST_TEST_RESULTS");
	$logFile = "./log_results.txt";

// Open the log file in append mode.

	$handle = fopen($logFile, "a");
	if($handle === false) exit("Cannot open $logFile");
	$clientIP = $_SERVER['REMOTE_ADDR'];
	$timestamp = date("YmdHis");


// Write the data in whatever format the implementation demands.  If the
// key passed in was added by the client-side script simply to facilitate
// the POST format, we don't need to log it and so just write the value.

	foreach ($_POST as $key => $value) {
		if(fwrite($handle,
		//	$clientIP . "\t" . $timestamp . "\t" .
			($key == DEFAULT_DATA_HEADER ?
				'' :
				stripslashes(str_replace(chr(10), " ", rawurldecode($key))) . "="
				
			) .
			
			stripslashes(str_replace(chr(10), " ", rawurldecode($value))) . "\r\n") === false)
				
				exit("Cannot write to $logFile");
	}

// Flush any remaining data from the buffer and close the file.

	fflush($handle);
	fclose($handle);

// A message can be returned to the client, which it can choose to ignore.

	exit("Viewport Updated");
?>
