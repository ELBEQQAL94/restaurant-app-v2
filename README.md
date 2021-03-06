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
- [ ] Create an admin for the app
- [ ] Create an admin can
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
  - [x] product
  - [x] order
  - [x] team
  - [x] product_category
  - [x] product_review
  - [x] position
- [x] Create seeds
  - [x] users
  - [x] role
  - [x] product
  - [x] order
  - [x] team
  - [x] product_category
  - [x] product_review
  - [x] position
- [x] run migrations
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
* pg
