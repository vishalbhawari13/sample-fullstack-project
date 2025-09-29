CREATE DATABASE IF NOT EXISTS sampledb;
USE sampledb;
CREATE TABLE IF NOT EXISTS users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
INSERT INTO users (name, email) VALUES ('Alice','alice@example.com'), ('Bob','bob@example.com');
