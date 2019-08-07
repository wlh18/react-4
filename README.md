# React Four

In this lecture we talk about the interwebs and how we can pass data over the network.

## HTTP(S)

HTTP stand for `Hyper Text Transfer Protocol`.

The `(S)` stands for secure. If a web sites url is prefixed with `HTTPS` then it will usually have a green lock next to it meaning that this site is secure to send information to it over the interwebs.

This is the protocol that we follow when making a network or a `http request`.

We do this by making an http request to a URL.

## URL

URL stands for `Uniform Rescouce Locator`.

The URL is a mixture of the protocol, domain, and enpoint being requested.

`https://devmountain.com/about.html`

Above is an example of a `URL`.

Protocol - https://

Domain - devmountain.com

EndPoint - /about.html

## Parts Of A Request

When a request is made to a URL, there are two portions that make up the request.

### Header

The `header` is the part of the request that holds information about the request we are making and the response that we receive.

The header can contain information about parts of the request like status codes, 

### Body

The body is an optional part of the request. This is where we will store the data that we want to send through the request.

The body does not always have to have information inside of it. It's okay to keep it empty if need be.

A good example of this is if we have a form on our webpage and we hit the submit button, it then will perform a request and send the information that we typed into the form throught the `body` of the request.

## JSON

`JSON` is the format that we can use to structure our data that is being sent in the request.

JSON is short for `Javascript Object Notation`. This is how we will transfer information between different languages.

JSON looks very similar to a Javascript object, but the key/value pairs are wrapped in double quotes, however `numbers` do not.

```json
{
    "name": "tayte",
    "age": 22,
    "hobbies": [
        "snowboarding",
        "video games",
        "cars"
    ],
    "car": {
        "make": "subaru",
        "year": 2014
    }
}
```

Notice how we can still send arrays and objects inside of JSON.

We also can not have a trailing comma on our object.

## REST

REST stands for `Representational State Transfer`.

This is an architecture or design concept for transfering our data.

This applies a set rules and constraints to allow different systems to talk to each other.

This is the design concept that we will use to talk to a `RESTful API`.

## RESTful API

API stands for `Application Programming Interface`.

An API is a layer that we can interact with to send and get information from a server.

A `RESTful API` follows a design pattern that uses the four parts of REST to interact with it: `post`, `put`, `get`, and `delete`.

Post - This is used for adding new data.

Get - This is used for retreiving data.

Put - This is for updating data. It's easy to remember this because put has a 'u' in it and update startes with it.

Delete - This is for removing data.

Interacting with an API using all four of these methods are a way that we can follow a concept called `CRUD`.

## CRUD

CRUD is the model that is followed to setup the basic functionalities for an API.

CRUD is short for `Create`, `Read`, `Update`, and `Delete`. These are the four basic functionalities that will make an API "complete".

The `REST` methods and The `CRUD` operations correlate with each other like so:

* Post - Create

* Get - Read

* Put - Update

* Delete - Delete