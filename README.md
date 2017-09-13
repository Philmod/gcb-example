# gcb-example
Simple example for Google Cloud Container Builder

## The app
The app is a simple http server built with nodejs.

To run it:
1. Install nodejs
1. Install the dependencies `npm install`
1. Run the unit test `npm test`
1. Run the app `npm start`
1. Call the app `curl localhost:3000`

## Exercises

### Build a docker image with GCB
1. Create a Dockerfile, using a nodejs base image.
1. Create the image on GCB and push it to GCR using `gcloud container builds submit` command.

### Run the unit test before building the image
1. Create a `cloudbuild.yaml` which uses the npm builder (`gcr.io/cloud-builders/npm`) to install the dependencies, run the unit test, and build the docker image.
1. Use `gcloud container builds submit` to submit the build to GCB.
