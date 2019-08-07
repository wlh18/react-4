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

