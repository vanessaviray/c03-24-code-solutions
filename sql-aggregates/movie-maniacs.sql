select "firstName", "lastName",
  sum("amount") as "totalAmount"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
