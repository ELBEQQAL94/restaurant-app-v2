### Description

---

### Front End `VUEJS`

---

- [x] Create frontend folder
- [x] Generate the app using:
  - vue create .
- [x] Create simple "hello worlde" page
- [x] Install vuetify
- [x] Install vuex
- [ ] Create landing page
- [ ] Create About page
- [x] Add vue router
- [x] Login with google
- [ ] Login with facebook
- [x] Add token to clien
- [ ] Create store
- [ ] Create 404 page
- [ ] Create an admin pages can:
  - [ ] add category
  - [ ] add product
  - [ ] add person to team
  - [ ] update category
  - [ ] update product
  - [ ] update teams
  - [ ] remove user
  - [ ] update user
  - [ ] make user an admin
  - [ ] banned bad review

### Backe End `Node/Express`

---

```sh
yarn install

Or

npm run install
```

```sh
yarn dev

Or

npm run dev
```

- [x] Install express nodemon
- [x] Setup server
- [x] run 'hello world!' on the server
- [x] Install passport
- [x] Install passport-google-oauth20
- [x] Setup clientId and secretId
- [x] Create google file
- [x] Create auth route for handle auth using google session
- [x] Connect with database using knexfile, pg
- [x] Create db file to connect server with database
- [ ] Add queries
  - [x] users
  - [x] role
  - [x] product_category
  - [ ] product
  - [ ] order
  - [ ] team
  - [ ] position
  - [ ] product_review
- [x] Initialize passport
- [x] Serialize and Deserialize the user
- [x] Login with google
- [ ] Login with facebook
- [ ] Create an admin
- [ ] Create an admin route can:
  - [ ] add category
  - [ ] remove category
  - [ ] update category
  - [ ] get category
  - [ ] add product
  - [ ] update product
  - [ ] get product
  - [ ] remove product
  - [ ] add person to team
  - [ ] update person
  - [ ] remove person
  - [ ] get team
  - [ ] remove user
  - [ ] update user
  - [ ] get users
  - [ ] make user an admin
  - [ ] banned bad review

### Database `Postgresql`:

---

- [x] Iinit npm
- [x] Install knex and pg
- [x] Createdb restaurant-db
- [x] npx knex init
- [x] Modeling database:
  - https://www.lucidchart.com/invitations/accept/41a10131-9dfc-4b4e-a00e-e8c956b5b1ea
- [x] Create migrations
  - [x] users
  - [x] role
  - [ ] product
  - [ ] order
  - [ ] team
  - [x] product_category
  - [ ] product_review
  - [ ] position
- [x] run migrations
- [x] Create seeds
- [x] run seeds

### Documentation

---

### Deploy Backend on `heroku`

---

- [x] Backend Deployed!
- https://restaurant-webapp-server.herokuapp.com/

### Deploy Database Postgres on `heroku`

---

- [x] heroku create <name>
- [x] git init
- [x] heroku git:remote -a restaurant-webapp-database
- [x] heroku addons:create heroku-postgresql
- [x] git push heroku master
- [x] heroku run knex migrate:latest
- [x] heroku run knex migrate:rollback
- [x] heroku run knex seed:run
- [x] heroku pg:psql
- [x] Deployed!

* https://restaurant-webapp-database.herokuapp.com/

### Deploy Front End On Now

---

- https://retaurant-webapp.now.sh/#/

### Screen shot for the App

---

### Code Review

---

- [ ] Everything is code, i hope that app can live a lot of time LOL.

### All Technologies I Used In This Project

---

- Front End:
- Backend:
- DataBase:

* knex.js
* postgresql

CREATE TABLE `Order` (
`id` serial,
`product_id` unsigned_int,
`created_at` date,
`updated_at` date,
`user_id` unsigned_int,
PRIMARY KEY (`id`),
KEY `FK` (`product_id`, `user_id`)
);

CREATE TABLE `Product` (
`id` serial,
`name` texy,
`price` decimal,
`product_category_id` unsigned_int,
`origine` text,
`open` date,
`closed` date,
`image_url` text,
`team_id` unsigned_int,
`created_at` date,
`updated_at` date,
`description` text,
`recipe` text,
PRIMARY KEY (`id`),
KEY `FK` (`product_category_id`, `team_id`)
);

CREATE TABLE `Position` (
`id` serial,
`name` text,
PRIMARY KEY (`id`)
);

CREATE TABLE `Team` (
`id` serial,
`firstname` text,
`lastname` text,
`email` text,
`phone` number,
`image_url` text,
`position_id` unsigned_int,
`created_at` date,
`updated_at` date,
PRIMARY KEY (`id`),
KEY `FK` (`position_id`)
);

CREATE TABLE `product_review` (
`id` serial,
`product_id` unsigned_int,
`user_id` unsigned_int,
`description` text,
`created_at` date,
`updated_at` date,
PRIMARY KEY (`id`),
KEY `FK` (`product_id`, `user_id`)
);
