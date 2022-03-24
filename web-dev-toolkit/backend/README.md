<p>
     #Database Paradigms
     -   Redis - SET & GET (Works like a python dictionary), stored on RAM(fast as hell), no queries/modelling,    Used by snapchat, "Twitter using a 105 TB Ram, 39MM Qps, 10,000+ Instances",best for caching, sub, leaderboards, used on another database.
     -   CQL, Apache - Used by Netflix, best used for frequent write and infrequent reads
     -Primary app database - document oriented database - mongo , dynamo, firestore etc-, best places to start if unsure, not ideal for graphs/disconnected joined social network link.
     - SQL - relationships, requires schema, and knoedge of data
     - algolia ,meili search ,  elastic , solar , - google search engines , myflixer.to - works like index at the back of a textbook
     - fauna db - graphql shema-> document relational graph (multi-model  database)
</p>

# REST (Representation State Transfer) Api

- ## an Api that follow the use of REST
- this means that the server responds to create, read, update and delete in a standard way, uses the url as access points to the server. (client-server communication Request-Response)
- the urls and api are what we "expose" from the server
- Rest is a way to implement and use the http protocol
- Rest uses the 4 basic http actions
  -                 (post, get, put, delete)
  - to perform CRUD (Create, Read, Update, Delete)
- Resources are gotten by how specific the url is
- Rest apis support caching
- A Request is made up of
  - operations (http methods)
  - endpoint (specific url)
  - parameters/body (json data you are passing)
  - header (contains meta-data about the request, like what format you want the response data, authorization like OAuth token etc)
    - you can keep your client logged in across requests by embedding authentication in the header
- Response
  - status code (2** - ok, 4**- something wrong with request, 5\*\*-server failed)
  - header (information about the server)
  - body (JSON data)
- URL, URI, URN
  - URL - specifies location
  - URN - Specifies Name (Ineffective due to duplicate name)
  - URI - Specifies both name and location (every url and urn is a URI)
