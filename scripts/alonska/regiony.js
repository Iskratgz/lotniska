db.airports.aggregate(
	{ $match : { iso_country : "PL" }},
	{ $group : { _id : "$iso_region", ilosc : { $sum : 1 }}},
	{ $sort : { _id : 1 }}
)

