<?php
if ($_POST) {
  $dbname = $_POST['dbname'];
  $dbuser = $_POST['dbuser'];
  $dbpassword = $_POST['dbpassword'];

  $con = mysql_connect('localhost',$dbuser,$dbpassword);
  if(!$con) { echo "Cannot connect to the database ";die();}
  mysql_select_db($dbname);
  $result=mysql_query('show tables');
  while($tables = mysql_fetch_array($result)) {
          foreach ($tables as $key => $value) {
           mysql_query("ALTER TABLE $value CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci");
     }}
  echo "<script>alert('The collation of your database has been successfully changed!');</script>";
}

?>
