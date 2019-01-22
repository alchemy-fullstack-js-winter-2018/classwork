# MongoDB

## Install

### OSX
1. Download `.zip`
1. Extract:
	* double click, **or**
1. Move to home:
	* `> mv ~/Downloads/mongodb-osx-x86_64-4.0.5 ~/mongodb`
1. Add data directory
	* `> mkdir ~/mongodb/data`
1. Add to path to mongo bin in `.bash_profile`:
	* add this to `.bash_profile` -- `export PATH=$PATH:~/mongodb/bin`
    * then run this in terminal `source ~/.bash_profile`
1. Test from **new** terminal window:
	* `> mongod --dbpath ~/mongodb/data`
1. Add alias in `.bash_profile`
	* `> alias gomongo="mongod --dbpath ~/mongodb/data"`

### Windows
1. Download `.msi` and install
1. Add to path:
	* Windows Key then search "path"
	* Open Environment Variables
	* Chose `Path` from **System** Variables and click "Edit"
	* Click "New" and paste path to `C:/Program Files/Mongodb/server/4.0/bin`
1. Add folder(s)
	* `C:\data\db`


## Install Robo 3T

* Robo 3T (RoboMongo) - graphical client

## Insert a document

* start your mongo server (`mongod`)
* start your mongo client (`mongo`)
* `use` a new database (`use myFistDb`)
* insert a document into a collection
  * `db.getCollection('myFirstCollection').insert({ name: 'ryan' })`
* insert another document
  * `db.getCollection('myFirstCollection').insert({ favoriteColor: 'red' })`
* insert a third document
  * `db.getCollection('myFirstCollection').insert({ name: 'ryan', favoriteColor: 'red' })`
* insert a fourth document
  * `db.getCollection('myFirstCollection').insert({ favoriteColor: 'blue' })`
* Open Robo 3T
  * connect to your MongoDB server
  * select `myFirstDB`
  * select `myFirstCollection`

## Read a list of documents

* find a list of documents
  * `db.getCollection('myFirstCollection').find()`
* find a subset of documents
  * `db.getCollection('myFirstCollection').find({ name: 'ryan' })`
  * `db.getCollection('myFirstCollection').find({ favoriteColor: 'red' })`
  * `db.getCollection('myFirstCollection').find({ name: 'ryan', favoriteColor: 'red' })`
  * `db.getCollection('myFirstCollection').find({ favoriteColor: { $in: ['red', 'blue'] } })`

## Read one document

* find one document
  * `db.getCollection('myFirstCollection').findOne({ name: 'ryan' })`
  * `db.getCollection('myFirstCollection').find({ _id: SOME_ID })`

## Update a documents

* `db.getCollection('myFirstCollection').updateOne`
* `db.getCollection('myFirstCollection').updateMany`

## Delete a document

* `db.getCollection('myFirstCollection').deleteOne`
* `db.getCollection('myFirstCollection').deleteMany`
