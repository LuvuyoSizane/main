For the backend to work you first have to edit the ConnectionStrings in the appsetting.json file. You set Server to the server you are using in your computer and ;Database to any name you want. 

Then youy open package manager console and add this command Add-Migration "NewMigrationAddedByMonde" -project Shared 
the you add Update-Database to update the database 

this command will create a migration and create the tables necessary in your database then you simply run the backend and everything will work.
