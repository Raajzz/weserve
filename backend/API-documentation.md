USER

GET `/api/v1/user/alldetails`
GET `/api/v1/user/details/:username`
POST `/api/v1/user/register`
PATCH `/api/v1/user/edit/:username`
DELETE `/api/v1/user/delete/:username`

SERVICE

GET `/api/v1/service/details`
POST `/api/v1/service/register`
POST `/api/v1/service/register/:role`
  -> this "role" comes from the frontend, depending on this "role" we'll add them to the document
PATCH `/api/v1/service/edit`
DELETE `/api/v1/service/delete`

SEARCHING FUNCTIONALITY

GET `/api/v1/search/:role`
  the search params for the above would be
  - country
  - state
  - division
  - district

GET `/api/v1/search/:role/:radius`
  The permitted radius would be 5km by default
  Depending on the amount paied by the customer then it'll be
  - 10KM
  - 15KM
  - 20KM

SERVICE-REVIEWS

POST `/api/v1/review/:username`
  - To post a review of a particular user
GET `/api/v1/getreviews/:username`
  - To get all the reviews of a particular user


NOTES

Now, we're gonna be creating multiple collections for each of the different blue-collar services that are going to be provided. This can be done by using another async function which again calls this await function.
Also, we do understand the process of user data duplication, as we're just trying to provide a prototype we'll carry on with the following, in the future we'll prevent data duplication.