# School-Listing

# Overview For Backend
This project will deliver a comprehensive e-commerce API set that enables seamless school listing. The integration of MongoDB as the database and token management system ensures efficient data storage and user authentication with minimal server-side setup.

## Live/deploy link on the render
```bash
https://school-listing-server.onrender.com/

```

## Installation & Tech Stack

Clone the Repository from GitHub. Then do the following steps:

```bash
    npm init -y

    npm i express mongoose cors dotenv nodemon multer cloudinary
```
## To run server (PORT = 8000)
```bash
    npm run server
```

## Some HTTP (Hyper Text Transfer Protocol) Status Code Which I used :
     
     200 --->  OK/Success/get/put

     201 ---> Created/post

     202 ----> Delete Successfully

     204 ----> Delete Failure

     404 ---> Not Found/failure

### NOTE: Used Timestamps & Date datatypes which allow by BSON.

## Database Name:
```bash
    school-list
```
## Schema

#### 1) *School*:

Collection Name: schools

- name --> String

- image --> String

- address --> String

- city --> String

- state --> String

- phone --> Number

- email --> String

## NOTE: I used Thunder Client Extension for testing all REST APIs.

### Routes / End Points tested by Thunder Client Extension :

#### 1. */school/store*: (POST)
 
##### Output: Success Message and data will store in MongoDB

#### 2.  */school/upload*: (POST)

Using for upload the school image into schoolImages directory

##### Output: Success Message

#### 3) */school/get*: (GET)

##### Output: Retrieves all schools


# Overview For Frontend

## Live/deploy link on the Vercel
```bash
https://school-listing.vercel.app/

```
## Installation & Tech Stack

Clone the Repository from GitHub. Then do the following steps:

```bash
    npm install
```
## To run server (PORT = 3000)
```bash
    npm run dev
```