delete
  from "addresses"
  where "addressId" = 161
  returning *;

select * from "addresses"
