# Microservices - Demo project
## Project overview

This is a demo project designed in a microservice architecture.

Services cover the following parts:
1. Authentication with JWT
2. Products list service
3. Orders service
4. Payments service
5. Expiration order service worker
6. Client service with server-side rendering

The project is covered with tests.

## Solved problems

The projects solves several microservices architecture problems:
1. Authentication across multiple services with JWT and shared private key
2. Data management between services using messaging, versioning and duplication
3. Lock the ordered product across services and management of lock expiration
4. Shared code, contracts, secrets
5. Messaging load balancing, durable subscribers
6. Concurrency issues between services
7. Intranet communication

## Used technologies

Languages: NodeJS, TypeScript 
Libraries: React, NextJS, BullJS, Stripe
Testing: Jest
Database: MongoDB, Redis
Messaging: NATS Streaming
Auth: JWT
Tools: Docker, Kubernetes, Skaffold
Hosting: Google Cloud

## File structure

1. `auth` - Authentication service
2. `client` - Client service
3. `common` - common npm module with contracts and shared libraries for the project
4. `expiration` - Expiration service worker
5. `infra` - Kubernetes configuration
6. `order` - Orders service
7. `payments` - Payments service with Stripe
7. `tickets` - Products list service

## How to run

1. Install Skaffold
2. Maybe you will need to change docker image name to be run in your environment.  
   Example, change the whole project to `lexbritvin` to `your_repo`
3. Set kubernetes context to where the app will be deployed
4. Run `skaffold dev`
5. It takes time to build
6. Add to /etc/hosts `127.0.0.1 ticketing.k8s.localhost` 
7. Visit http://ticketing.k8s.localhost/