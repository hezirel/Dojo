# Golang for Backend Developer

## About the instructor

**[Phu, Tran Phong](https://www.linkedin.com/in/tpphu/)**
Developer and Instructor

I'm Phu, I'm a developer with a passion for teaching. I'm an academic advisor and instructor at Nordic Coder. My expertise and skills are in big data, distributed systems, continuous deployment. I have been teaching many courses about backend and frontend such as Golang/Nodejs/PHP, ES/MySQL, and Reactjs/Angular. I've helped students learn to code, improve their skills. I've been invited/collaborated by companies such as ABC to build the courses for training their employees.

I spend most of my time researching the latest methodologies, technologies, skills which should be have for developers to help them learn to make code better, code for fun and love, and make hard concepts easy to understand.

Welcome to my course, I am on way to help you.

## About this course

This course is designed to get you up and running as fast as possible with Go.  We'll quickly cover the basics, then dive into some of the more advanced features of the language. 

After finishing this course, students will be able to learn how to:

- Build high-performance concurrent programs with Golang
- Build modern programs with Golang and its ecosystem such as CI/CD, GRPC
- Build their own programs with hands-on mentoring from the instructor


### Course syllabus

#### Topic 1

- An introduction to Programming with Go and TDD
- Overview on the fastest growing language and why we should learn Golang
- Set up environments & code organization
- Language mechanics: syntax, data structure, pointer
- How Go runs in single CPU and multiple CPUs
- Practicing TDD methodology
- Exercise: building an auto-increment number and issues with multiple-CPU problems to learn about data-race
- Homework: converting CSV to YAML using pointer

#### Topic 2

- Discover goroutines, channel, defer, panic, recover
- Error handling in Go
- Golang context
- Golang reflect
- A guide to setting up Docker/Laradock to install MySQL
- Working with database/Mysql
- DB connection pool
- Exercise: CURD with Gorm
- Homework: write Unit Test and learn about the mock test for DB

#### Topic 3

- Diving into Golang by designing a RESTful API 
- CRUD service using Go with Gin/Echo framework
- HTTP Protocol, Cookie, Session
- Load Balancing with Nginx, high performance, and scalability
- Working with database/MongoDB
- API caching, validation
- JSON Encode/Decode
- Exercise 1: build a note service for Todo MVC application using MongoDB
- Exercise 2: build a Voucher service to learn about DB isolation
- Homework: write Unit Test and learn about the mock test for HTTP

#### Topic 4

- Design and apply microservices/serverless architecture using Go
- RPC, GRPC, and benefits from GRPC
- How to design a new system with GRPC 
- How to integrate GRPC into an existing system
- An introduction to Service Discovery with Consul
- Exercise 1: refactor note service from `topic 3` to GRPC
- Exercise 2: write a client call to note service base on Service Discovery design
- Homework: discovery Kafka to learn about Event-driven architecture

#### Topic 5

- Best practices to develop a project with Go & final project
- CI/CD, logging, and monitoring on Production environment with ELK stack
- Deploy a CI/CD for note services with Jenkins/or Gitlab
- Overview and requirements of the Final Project 
- Review and feedback on the course
- Exercise: Apply CI/DC to `topic 3`
- Homework: Apply Elasicsearch APM to `topic 3`

#### Topic 6

- Build your own open-source software
- Build a helper lib (ex: porting underscore)
- Or build an HTTP router
- Or build a (micro) service to generate fake data
- Or build an application with your own idea

### Pre-work

A mini project to demonstrate students’ knowledge at input level

- With a given URL of news website (Eg vnexpress.net, thesaigontimes.vn,...), create a crawler that:
- Task 1: Can fetch the whole data from a news website then parse the data into specific piece as: title, published date, summary, body and author
- Task 2: With any URLs found in the previously fetched data, repeat the task 1 until reaching maximum of 5 levels.	

### Final project

The final project is up to students with mentoring from instructor. The objective of the project is to: 

- Demonstrate understanding of Golang and its ecosystem.
- Apply knowledge gained during the course by building an application/program such as a helper lib (ex: porting underscore), an HTTP router, a (micro) service to generate fake data or create API for blog, e-commerce, Todo app, etc.  

