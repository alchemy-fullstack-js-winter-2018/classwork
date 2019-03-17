# Aggregation

## Group by

* Group tweets by a user in Robo 3T
* create a new tweets aggregation
  `db.tweets.aggregate([])`
  * use the `$group` operator to group by handle
    * `{ $group: {} }`
  * to group by `handle` set `_id` to `'$handle'`
    * `{ $group: { _id: '$handle' } }`
  * then create a list of tweets made by that handle using `$addToSet`
    * `{ $group: { _id: '$handle', tweets: { $addToSet: '$text' } } }`

## Group by and Lookup

* grouping by users (`handle`) like before
* add another stage to your aggregation
  * use `$lookup` to join with your users collection
    * see the docs here [https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/)

## Average tweet length

* create a new tweets aggregation
  `db.tweets.aggregate([])`
* add a `$project` stage
  * get the length of each tweet with `$strLenCP`
    * `{ $strLenCP: '$text' }`
* add a `$group` stage
  * group by `null` to create 1 group `_id: null`
  * use `$avg` to get the average tweet length
    * `{ $avg: '$length' } }`
