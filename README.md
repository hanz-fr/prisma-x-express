# prisma-x-express
A starting code for Typescript x Prisma x SQLite x Express backend project. Highly customizable from scratch.

# how to install
Make sure you have the prisma and ts-node package. You can install it globally like this:
```npm i -g prisma```
```npm i -g ts-node```

Download the code, and run **npm i**.
Before migrating, create a **.env** file in root directory, then copy and paste all the contents in **.env.example**
To migrate, create the model first in schema.prisma and after that, run **npm run migrate**.
There is a starter model and migration called User model.

After everything is setup, run **npm run dev**
and test it using postman or any other API testing tool.

# controllers and routes
Create the routes and controllers in **src/controllers** and **src/routes**
