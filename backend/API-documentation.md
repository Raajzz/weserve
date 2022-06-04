USER

GET `/api/v1/user/details`
POST `/api/v1/user/register`
PATCH `/api/v1/user/edit`
DELETE `/api/v1/user/delete`

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

NOTES

Now, we're gonna be creating multiple collections for each of the different blue-collar services that are going to be provided. This can be done by 