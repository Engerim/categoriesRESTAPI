FLACONI REST API

This service allows us to create RESTful API to manage categories for e-comerce website.

1. Technical Stack 

     . Node.js javascript runtime environment
     . Express web application REST API framework for Node.js
     . Sequeize promise based ORM for Node.js
     . SQLite as databas
     . POSTMAN REST API test framework
     . SQLite browser to view the tables(https://sqlitebrowser.org) 

2. Steps for running the service.

2.1 In non-dockerized environment
 . Download the folder name flaconi on your machine
 . Go to subfolder named flaconi-svc
 . Hit the command npm start as simple. This should launch the    application with the welcome message, synchronisation of database notifiction as well as message stating that the application is up and running on port 3000

 2.1.1 RUN API tests    
      . Download POSTMAN tool from https://www.getpostman.com/apps

      . Once downloaded open the postman tool.
                 . Click Builder tab   

                 . In the input box enter the api route url and      press SEND. This should send request to the       REST API routes defined in the application        under flaconi-svc/routes/category folder

     2.1.1.1 CREATE CATEGORY

           . Make POST call to http://localhost:3000/flaconiService/createCategory route from POSTMAN

           . Click on Body option and enter the data to padd to the route in JSON format. For instance 
           {
                "name": "eat lunch",
                "isVisible": true,
                "slug":"lunchee"
             }
           
            .Click on send

           . You could the response by going to the Headers section.

           .Follow section 3 to open database file to see if the record is created.


     2.1.1.2 RETRIEVE CATEGORY BY ID

            . Make GET call to http://localhost:3000/flaconiService/findCategoryById/yourcatgoryId route from POSTMAN

             . You could the response by going to the Headers section.

      2.1.1.3 RETRIEVE CATEGORY BY SLUG

            . Make GET call to http://localhost:3000/flaconiService/findCategoryBySlug/yourslug route from POSTMAN

             . You could the response by going to the Headers section.

      2.1.1.4 UPDATE VISIBLITY STATUS

           . Make POST call to http://localhost:3000/flaconiService/updateVisiblity/yourcategoryId route from POSTMAN

             . In the Body section, provide the "isVisible" : "your value" inside the curly braces 

             . You could the response by going to the Headers section.

       2.1.1.5 RETRIEVE CATEGORIES BY PARENT CATEGORY

            . Make GET call to http://localhost:3000/flaconiService/findCategoriesByParentCategory/yourparentCategory route from POSTMAN

             . You could the response by going to the Headers section.


    2.2 In dockerized environment

       . Download flaconi folder
       . Once inside flaconi folder enter the command
             docker-compose -f flaconi.yml up

        . This should create flaconiApiService docker container with the corresponding image

        .Note you may have to install docker engine and docker compose on your test machine

       2.2.1 API TEST

           Setup postman to work in a dockerized environment, please refer the link https://github.com/postmanlabs/newman


   3. View the data
     
       . Download sqlitebrowser from https://sqlitebrowser.org
       . Once installed open it and click on Open Database
       . Proide the path i.e. flaconi-svc/data/flaconi-api.sqlite
       . Database would be loaded and you can see the tables with relevant entries if any

    4. General Points
    
    .The tables in ORM is defined under models folder i.e. category.js

    . Routes with core functionality are defined under routes/category folder. 

    . logs folder holds the error logs for the day

    . db.js sets the link between sequelize and sqlite

    . server.js sets up the app locally & sync the database

    . all the routes urls could be found in init/initRoutes.js folder                         
