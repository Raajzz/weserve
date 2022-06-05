USER

GET `/api/v1/user/alldetails`
  -> To get all the user details
GET `/api/v1/user/details/:username`
  -> To get the details of a particular user
POST `/api/v1/user/register`
  -> To add a new user
PATCH `/api/v1/user/edit/:username`
  -> To edit the details of a user
DELETE `/api/v1/user/delete/:username`
  -> To delete the details of a user

SERVICE

GET `/api/v1/service/alldetails`
  -> To get all the service details
GET `/api/v1/service/details`
  -> To get the details of a particular service
POST `/api/v1/service/register`
  -> To add a new service
PATCH `/api/v1/service/edit`
  -> To edit the details of a user
DELETE `/api/v1/service/delete`
  -> To delete the details of a service

SEARCHING FUNCTIONALITY

POST `/api/v1/search/
  -> POST request, as we need to provide more data to the particular search query

POST `/api/v1/search/:role/:radius` => Not yet implemented

SERVICE-REVIEWS

POST `/api/v1/review/`
  - To post a review of a particular user

GET `/api/v1/getreviews/:username`
  - To get all the reviews of a particular user