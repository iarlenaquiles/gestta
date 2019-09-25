# :computer: API em NodeJS de uma aplicação de CRUD de Tasks 


## Tecnologias

 - NodeJS
 - Express
 - Nodemon
 - Jest
 - Supertest
 - Sucrase
 - MongoDB
 - Mongoose
 - ESlint + Prettier
 
 
## Run
 - Git clone https://github.com/iarlenaquiles/gestta.git
 - yarn
 - run mongo service or docker
 - yarn dev
 
## Routes
`POST` /tasks
```json
    {
      "name": "estudar node",
      "customer": "ronaldo",
      "due_date": "2019-09-23",
      "legal_date": "2019-09-29"
    }
```

`GET` /tasks/

`GET` /tasks/:taskId

`DELETE` /tasks/:taskId

`POST` /files/:taskId
  multipart file
 
`DELETE` /files/:fileId/tasks/:taskId


## Run test
  - yarn
  - run mongo service or docker
  - yarn test
