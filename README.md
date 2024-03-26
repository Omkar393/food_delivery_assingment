# food_delivery_assingment   

Instructions for API calling

I used mongoDB database instead of postgreSQL.


You can access Backend from here: https://food-delivery-application-backend-kxpj.onrender.com
URL path to check or get total price of an item is : '/pricing/calculate-price'
I have organization Ids are : '66027782bfc1b509d7e0658a', '6602778ebfc1b509d7e0658c
Zone are : 'zone 1' , 'zone 2'
Food type are : 'Perishable' & 'Non Perishable'


You need to pass API req as like in json format : {
   "zone" : "zone 1",
   "organization_id" :"66027782bfc1b509d7e0658a",
   "total_distance":21,
   "item_type":"Perishable"
}



I added pricing details for both food type Perishable & Non Perishable in both zones  zone 1 & zone 2
