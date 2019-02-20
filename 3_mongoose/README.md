# Mongoose Review

## Agenda

* Mongoose
  * schema types
  * validators
  * queries
  * `select`
  * `lean`
  * `populate`
    * one-to-one
    * one-to-many
  * "reverse" populate
* Aggregation

## Mongoose

Mongoose is an ODM (Object Document Mapping). It creates a map of documents (from MongoDB) to objects
in JavaScript.

### Schema

A schema maps to a MongoDB collection and specifies the shape each document in that collection should
take. The schema defines the fields and types that each document should have with a provided object
DSL (Domain Specific Language). The supported types are:

* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array
* Decimal128
* Map

#### Instance methods

An instance method can also be defined on a schema. These methods are available to instances of the
model.

#### Static methods

A static method can be defined on a schema. These methods are available without having an instance of
the model.

### Validators

#### Built in

* `required` - makes the field non-optional
* `unique` - makes the field unique
* `default` - gives the field a default value if not specified
* `select` - boolean whether the field should returned
* `validate` - function to validate the field
* `get` - create a custom getter
* `set` - create a custom setter

##### String only

* `lowercase` - make the field always lowercase
* `uppercase` - make the field always uppercase
* `trim` - trim off whitespace
* `match` - regex that the field must match
* `enum` - array of strings that the field must match
* `minlength` - minimum length of field
* `maxlength` - maximum length of field

##### Number only

* `min` - field must be greater than or equal to min
* `max` - field must be less than or equal to max

##### Date only

* `min`
* `max`

#### Custom

A custom validate function can be added to a field:

```js
var personSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'Person phone number required']
  }
});
```
