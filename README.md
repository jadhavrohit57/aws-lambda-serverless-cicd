# aws-lambda-serverless-cicd

# serverless and github actions are used for CICD

* deployment start when pushed to alpha and main branch

* All required env variables and secrets need to be added in github actions secrets 
    - which can be used for .env file crreation
    - other secrets are used for aws cli configuration for deployment
    - following secrets needs to be added on github actions
        1. AWS_ACCESS_KEY_ID
        2. AWS_SECRET_ACCESS_KEY
        3. MONGO_URI_PROD // if needed
        4. MONGO_URI_DEV
