# Volvo Cars
# Welcome to UI tests. 
## Introduction. 
The tests use the following APIs. 
 Playwright. 
 TypeScript. 
 Docker. Please keep CPUs: 4 , Memory : 8.00 GB, SWAP: 1 GB atleast
## Example API Test. 
I have also added an API test, just because I am a firm believer of API tests within UI test framework. The API used is an open source API that returns age of a person based on his name. 
## How to run tests. 
 Install Docker for Desktop. 
 Post installation: To run tests using docker containers. 
### npm run test:local
 Tests are set to run parallely with atleast 4 workers. 
## To run tests on local browsers. 
### npm run test:all 
 This will result in new baseline images generated. So the tests will fail for the first time.  
## How to create new Visual regression tests. (How to generate and upload standard dockerized baselines)
###  `sh update-screenshots.sh` 
 This will run the tests in docker container and create new baseline images. These baseline images since generated in a dockerized container, will be standard for every user.
## Continuous Integration. 
 github actions has been setup to run a BuildTest job on every commit. It has been set to run parallel tests with 2 workers. 

## Docker config. 
 Dockerfile. 
 Node version has been set to 16. 

## Docker github actions.  
 /.github/workflows/docker-image.yml. 
 ## Test Reporter & Video Recorder. 
 Plywright test reporter is being added and it will record videos only when the Tests fail.  
 To run the test reporter:  npx playwright show-report. 
 After a failure, the test report will automatically start a server to see test results. 
It looks something like this
![Alt text](testReporter.png?raw=true "Title")

 
