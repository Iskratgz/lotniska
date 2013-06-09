db.airports.aggregate(
	{ $group :
		{ _id : { kontynent : "$continent", typ : "$type" },
		ilosc : { $sum : 1 }}
	},
	{ $sort : { ilosc : -1 }},
	{ $group :
		{ _id : "$_id.kontynent",
		typ : { $first : "$_id.typ" },
		ilosc : { $first : "$ilosc" }}
	},
	{ $sort : { _id : 1 }}
)

