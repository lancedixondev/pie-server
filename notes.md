npm- node package manager, can manage packages that are local dependencies of a particular project

npm start - this command looks into the root directory of our project, and looks for the scripts object.  if it finds it, it will look for the matching keyword("start") then runs the following command script.

npm dev - indicates that we are running our project in development mode and that we are using "nodemon" to do that. nodemon allows us to make changes to our server without having to restart it manually every time we make a change.

node_modules - packages that npm installs that allow our application and all of its dependencies to run properly

package-lock.json - simply locks in the version of the packages that we're using in a specific project. we get this file so that anyone who clones our project and tries to run it will have the exact same versions of the package that we use.

MVC - model view controller

Express - a framework used to help us organize our server into MVC architecture.

ORM - object relational mapper.  code library that automates the transfer of data in a database, into objects that are more commonly used in applications (like JSON).

Sequelize - a JS library that we'll use to manage our postgreSQL databases. 

Models - how we shape the data that we'll be sending to our databases.

pg - a package that allows us to write in the dialect that sequelize needs to speak to our PostgreSQL database.

pg-hstore - a package that allows us to access more advanced and complex pieces of code regarding PostgreSQL.

