
TO RUN:

ADD file to htdocs

START xampp

NAVIAGTE to browser enter : http://localhost/Movie-Browser-APP

NAVIAGTE to 'frontend' -> 'pages'

IMPORT NOTE ON DATABASE: 

If you were directly sent the project folder, the config file is included 
which will connect you to the database. 

If the database won't connect for whatever reason, or you are pulling from github,
all the data that is saved to the database (on my end), is also saved locally in
the data.JSON file (backend/data.JSON). There is a script called JSON_to_DB.php in the 
backened which will add this JSON data to your database if you import your own configuration file.