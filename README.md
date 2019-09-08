# ENVISION

ENVISION is a IoT web application for visualizing your working environment. It gets environmental data by using Raspberry pi 3 and some sensors.
This repo is the frontend of envision.

<div>
<img alt="Screen Shot 2019-09-02 at 8 20 05" src="https://user-images.githubusercontent.com/23233648/64083425-e7ba2e80-cd5a-11e9-82cd-60a45eec6aec.png" height="60%" width="60%">
<img alt="Screen Shot 2019-09-02 at 8 20 39" src="https://user-images.githubusercontent.com/23233648/64083447-35cf3200-cd5b-11e9-8e73-63d66f6f4ceb.png" height="30%" width="30%">
</div>

## Table of content

- [ENVISION](#envision)
  - [Table of content](#table-of-content)
  - [Features](#features)
  - [Demo Page](#demo-page)
  - [Setup](#setup)
    - [Clone](#clone)
    - [Deploy](#deploy)
    - [Cleanup](#cleanup)
  - [Tech stack](#tech-stack)
  - [Links](#links)
- [Frontend Template](#frontend-template)
  - [Tech Stack](#tech-stack)
  - [Deployment Process](#deployment-process)

## Features

ENVISION provides three features,

1. Provide comfort index calculated from sensory data
   - Show overall working comfort index
   - Show comfort index of each sensing data (like CO2, temperature...)
     <br>
     <br>
     <img width="60%" alt="Screen Shot 2019-09-02 at 8 22 02" src="https://user-images.githubusercontent.com/23233648/64083468-8050ae80-cd5b-11e9-9652-f9b301c5a362.png">
     <img width="39%" alt="Screen Shot 2019-09-02 at 8 22 12" src="https://user-images.githubusercontent.com/23233648/64083469-847ccc00-cd5b-11e9-997c-19ddf58aa1ae.png">
     <br>
     <br>

2. Data visualization of your working environment
   - Get sensory data of CO2, the amount of snack by weight, temperature, humidity, lux, pressure, color temperature
   - Provide real time visualization (update every mintue)
   - You can analyze and improve your working environment
     <br>
     <br>
     <img width="100%" alt="Screen Shot 2019-09-02 at 8 29 59" src="https://user-images.githubusercontent.com/23233648/64083501-df162800-cd5b-11e9-9e60-5c9402ba6725.png">
     <br>
     <br>

3. User management
   - Protect api endpoints not to allow unauthorized user to post data
   - Track each user's feeling of comfort
   - Use tracking data to find the best fit environment


## Demo Page

[Demo Page](https://envision-iot.herokuapp.com) is here! You can check demo IoT project!

## Setup

### Clone

If you want to try ENVISION frontend on your local machine, follow the instructions below.

1. Clone this repo

```
git clone https://github.com/egurinko/envision-front.git
```

2. Install all dependencies

```
cd envision
yarn
```

3. Start local server

```
yarn dev
```


### Deploy

If you want to deploy this application to S3 and cloudfront, follow the instruction below.

1. Insert Application name to serverless.yml

First of all, insert the application name at the top of serverless.yml service section.
```
service: <Application Name>
```

2. Deploy infrastructure

Deployment uses serverless framework. It creates S3 bucket and cloudfront.

```
sls deploy -s <STAGE NAME>
```

3. Uploaded static files to deployed infra

```
./deploy.sh <STAGE NAME>
```

### Cleanup

This command clean up all the infrastructure.

```
sls remove -s <STAGE NAME>
```

## Tech stack

- Frontend<br>
  Vue/Vuex/Vuetify/Typescript
- INFRASTRUCTURE
  S3/CloudFront
- Deploy
  Serverless
- CI
  CircleCI, Cypress

## Links

- [DEMO PAGE](https://envision-iot.herokuapp.com/)
- [Vue](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [AWS](https://aws.amazon.com/jp/)
- [CircleCI](https://circleci.com/)
- [Cypress](https://www.cypress.io)


# Frontend Template

## Tech Stack
* Framework
  * Vue/Vuex
  * Vuetify
* Infrastructure
  * S3
  * CloudFront
  * Serverless framework for deploy
* CI
  * CircleCI
* Options
  * Dependabot if you need

## Deployment Process

