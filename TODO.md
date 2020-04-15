### TODO:

- Back end

* [x] deploy database
* [x] create login route
  - [x] create POST request to /auth/login
  - [x] validate data
  - [x] insert data into database
  - [x] else display errors
  - [ ] response user without password
* [x] create signup route
  - [x] create POST request to /auth/signup
  - [x] validate data
  - [x] insert data into database
  - [x] else display errors
  - [ ] response user without password
* [x] fix duplicate data in db
* [x] Create an admin for the app
* [ ] Create an admin can
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

- Front end

* [x] Create login route
* [x] Create signup route
  - [x] username form
    - [x] validate username
    - [x] display errors
  - [x] email form
    - [x] validate email
    - [x] display errors
  - [x] password form
    - [x] validate password
    - [x] display errors
  - [x] confirm password form
    - [x] validate re-password
    - [x] display errors
  - [x] login button
    - [x] validate data
    - [x] if error display it
    - [x] else send request to /auth/login
    - [x] display loading
    - [ ] hide loading if there is an error
    - [ ] redirect to /home page
    - [ ] hide authentication button
    - [ ] display logout button
    - [ ] display username
* [x] create login form:
  - [x] email form
    - [x] validate email
    - [x] display errors
  - [x] password form
    - [x] validate password
    - [x] display errors
  - [x] confirm password form
    - [x] validate re-password
    - [x] display errors
  - [x] signup button
    - [x] validate data
    - [x] if error display it
    - [ ] else send request to /auth/login
    - [ ] display loading
    - [ ] hide loading if there is an error
    - [ ] redirect to /home page
    - [ ] hide authentication button
    - [ ] display logout button
    - [ ] display username
