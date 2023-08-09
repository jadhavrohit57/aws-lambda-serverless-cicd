# aws-lambda-serverless-cicd

# serverless and github actions are used for CICD

* deployment start when pushed to alpha and main branch

* All required env variables and secrets need to be added in github actions secrets 
    - which can be used for .env file crreation
    - other secrets are used for aws cli configuration for deployment
