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

# Some Screenshots for different screens
![Screenshot (472)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/21b9c29e-87ac-407c-9b8b-50162c80c6b6)
![Screenshot (473)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/bed651ec-a553-46fe-834d-e58cf408394a)
![Screenshot (474)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/f6d983db-032a-4d8f-9ecb-f48d073d148e)
![Screenshot (475)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/601004c7-2e45-4fe2-be8b-1c67bce2bbf4)
![Screenshot (476)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/92a95553-0952-4e32-aa6d-322d05656a53)
![Screenshot (477)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/f74062b0-fad3-4a71-bea0-049fd8fad6d2)
![Screenshot (478)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/a2a389cc-959f-480b-b430-0d0ce724f1bf)
![Screenshot (479)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/ae4c4f88-6485-434e-a7cf-c650a12dd94e)
![Screenshot (480)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/cd5fe339-6246-4340-9410-19685d568a9d)
![Screenshot (481)](https://github.com/Pushpendra-1697/School-Listing/assets/104748364/f6879811-0dd9-4667-92c9-8fd1f665e4c0)
