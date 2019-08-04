# Frontend Template

## Tech Stack
* Framework
  * Vue
* Infrastructure
  * S3
  * CloudFront
  * Serverless framework for deploy
* CI
  * CircleCI
* Options
  * Dependabot if you need

## Deployment Process

### Insert Application name to serverless.yml

First of all, insert the application name at the top of serverless.yml service section.
```
service: <Application Name>
```

### Deploy infrastructure

Deployment uses serverless frameswork. It creates S3 bucket and cloudfront.

```
sls deploy -s <STAGE NAME>
```

### Uploaded static files to deployed infra

```
./deploy.sh <STAGE NAME>
```

## Cleanup Code

This code clean up all the infrastructure.

```
sls remove -s <STAGE NAME>
```