# blv-react

## Run project

To run this project in development mode use `npm run dev`.

## Build project

To build this project run `npm run build`, for production run `npm run build:prod`.

## Deploy project to Google Cloud Run

1. Make sure you are logged in to Google Cloud or login with `gcloud auth login`.
1. Make sure `blaasveld-net` is the active project with `gcloud config list` or run `gcloud config set project blaasveld-net`.
1. Run `gcloud builds submit --tag gcr.io/blaasveld-net/blv-react` to upload the container image to Google Cloud.
1. Start the container with `gcloud run deploy --image gcr.io/blaasveld-net/blv-react blv-react --allow-unauthenticated`.

## Stop the container on Google Cloud Run

1. Go to [https://console.cloud.google.com/run?project=blaasveld-net](https://console.cloud.google.com/run?project=blaasveld-net).
1. Select the running service and click `Delete`.
