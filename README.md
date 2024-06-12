# CRM Application

This is a CRM (Customer Relationship Management) Application designed to manage customer data and run targeted campaigns.

## Features

### 1. Data Ingestion

#### API Endpoints
- **Customer Data Ingestion API**: Endpoint to ingest customer data into the database users
- **Orders Data Ingestion API**: Endpoint to ingest orders data into the database orders 

#### Postman Demonstration
- Use Postman to demonstrate how the APIs ingest data into the respective tables.
- Performed CRUD in postman to check all api

#### Web Application Features 
  - Users can easily create audiences based on various criteria:
  - Customers with total spends > INR 10000
  - Customers with total spends > INR 10000 AND max number of visits are 3.
  - Customers not visited in the last 3 months.
  - Users can add multiple rules on different available fields and perform AND/OR operations between them.

#### Authentication
- Before opening the WEb-App , Simple Google-based authentication for the web application is enabled

### Prerequisites
- Database used :Mongodb
- Frontend used :ReactJs
- Platform Used :NodeJs
- Framework Used :ExpressJs
- Postman 
- Firebase for Authentication


