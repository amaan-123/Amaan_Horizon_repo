# Postman Notes

> Source: <https://academy.postman.com/path/api-beginner>

## API types

The term API is often used to refer to web APIs, which allow communication between computers that are joined by the internet. While this course will focus on Web APIs, it is important to keep in mind that the term "API" can apply to a broad range of interfaces:

- A hardware API is an interface for software to talk to hardware.
  - Ex: How your phone's camera talks to the operating system.
- A software library API is an interface for directly consuming code from another code base.
  - Ex: Using methods from a library you import into your application.
- A web API is an interface for communicating across code bases over a network.
  - Ex: Fetching current stock prices from a finance API over the internet.

Multiple API types may be used to achieve a simple task. For example, uploading a photo to Instagram makes use of various APIs:

1. Hardware API for the app to talk to your camera
2. Software library API for the image to be processed with filters
3. Web API for sending your image to Instagram's servers so your friends can like it

## API architectures

There is more than one way to build and consume APIs. These are some of the most common architecture types you may come across:

- REST (Representational State Transfer)
- GraphQL
- WebSockets
- webhooks
- SOAP (Simple Object Access Protocol)
- gRPC (Google Remote Procedure Call)
- MQTT (MQ Telemetry Transport)

## API accessibility

APIs also vary in the scope of who can access them:

- Public APIs are made public and can be consumed by anyone
- Private APIs are consumed only within an organization and are not made public
- Partner APIs are consumed between one or more organizations that have an established relationship

Recent developments in API utilization has led to the rise in popularity of microservices, which are ultimately loosely coupled services accessed through public APIs.

## Send requests and view responses

You can interact with the Postman API Platform via Postman's desktop, web, [CLI](https://en.wikipedia.org/wiki/Command-line_interface), and/or API interfaces.

These API client interfaces allow you to easily:

- Manage API data
- Send any [REST](https://en.wikipedia.org/wiki/Representational_state_transfer), [SOAP](https://en.wikipedia.org/wiki/SOAP), and [GraphQL](https://en.wikipedia.org/wiki/GraphQL) queries, inspect the response and debug
- Turn API data into charts and graphs with Postman Visualizer
- Manage API authentication no matter the authentication protocol backing
- Generate code snippets
- Keep track of request history
- Write tests

## Visualize your data

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-5.png)

## Response Codes

| Code range | Meaning | Example |
| --- | --- | --- |
| `2xx` | Success | `200` - OK  `201` - Created  `204` - No content (silent OK) |
| `3xx` | Redirection | `301` - Moved (path changed) |
| `4xx` | Client error | `400` - Bad request  `401` - Unauthorized  `403` - Not permitted  `404` - Not found |
| `5xx` | Server error | `500` - Internal server error  `502` - Bad gateway  `504` - Gateway timeout |

## Request URL

In addition to a request method, a request must include a request URL that indicates where to make the API call. A request URL has three parts:

- a **protocol** (such as `http://` or `https://`),
- a **host** (location of the server), and
- a **path** (route on the server)

For example:

| Protocol | Host | Path |
| --- | --- | --- |
| `https://` | `library-api.postmanlabs.com` | `/books` |

Note: Paths and full URLs are also sometimes called API endpoints.

## Query Parameters

Now you know that the minimum ingredients you need to make a request are:

- a request method (`GET`/`POST`/`PUT`/`PATCH`/`DELETE`, etc)
- a request URL

Some APIs allow you to further refine your request with key-value pairs called query parameters. Query parameters are added to the end of the path. They start with a question mark `?`, followed by the key value pairs in the format: `<key>=<value>`.

For example, this request might fetch all photos that have landscape orientation:

`GET https://some-api.com/photos?orientation=landscape`

If there are multiple query parameters, each is separated by an ampersand `&`. In the following example, the two query parameters specify the orientation and size of photos to be returned:

`GET https://some-api.com/photos?orientation=landscape&size=500x400`

### Try it out

You can try pasting the below URL into your browser. You can also use this URL to send a GET request in Postman to make a Google search for "postman". If you use Postman, click the "Preview" tab in the response to view the rendered HTML.

`https://www.google.com/search**?q=postman**`

This request adds a search term as a query parameter `q=postman` ("q" refers to "query" here) to the `GET /search` path on Google's server.

Because this parameter is in our request, the server returns an HTML document that is a search results page with hits for "postman". The search bar is also pre-populated with our query "postman". You can try to change your search directly from the URL by changing the value for the query parameter `q=<something else>`

![Google search result screenshot for the search term "Postman". Postman is shown in the search bar, and the search results are for "Postman"](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649538291%2Fgoogle+postman+search.1649538291538.png)

### When to use query parameters?

The answer is always: read the API documentation!

Sometimes query parameters are optional and allow you to add filters or extra data to your responses. Sometimes they are required in order for the server to process your request. APIs are implemented differently to fulfill different needs.

## Path parameters

In the [Requests and responses - Basics](/path/api-beginner/requests-and-responses-basics-2212) module, we learned about query parameters which allowed us to pass request data to the API to filter the results.

Another way of passing request data to an API is via **path parameters**. A path parameter (or "path variable") is a dynamic section of a path, and is often used for IDs and entity names such as usernames.

Path parameters come immediately after a slash in the path. For example, the [GitHub API](https://docs.github.com/en/rest/reference/users#get-a-user) allows you to search for GitHub users by providing a username in the path in place of `{username}` below:

`GET https://api.github.com/users/{username}`

Making this API call with a value for `{username}` will fetch data about that user:

`GET https://api.github.com/users/postmanlabs`

You can have multiple path parameters in a single request, such as this endpoint for getting a user's GitHub code repository:

`GET https://api.github.com/repos/{owner}/{repoName}`

For example, to get information about the `newman` code repository from `postmanlabs`:

`GET https://api.github.com/repos/postmanlabs/newman`

### Path vs. query parameters

At first, it is easy to confuse these two parameter types. So, let's compare them side by side.

|     |     |     |
| --- | --- | --- |
|     | Path parameters | Query parameters |
| Example | `/books/abc123` | `/books?search=borges&checkedOut=false` |
| Location | A path parameter can be located directly after a slash anywhere in the path. | A query parameter can be located only at the end of a path, right after a question mark `?` |
| Value types | A path parameter accepts dynamic values | A query parameter accepts pre-defined query keys with dynamic or static values. |
| Typical use cases | A path parameter is often used to identify an entity by its ID or name. | A query parameter is often used to specify options and filters that further refine the results. |

Keep in mind that these are just conventions. Some APIs might ask you to pass an ID or username in a query parameter like this: `/users?username=getpostman`

### When to use path parameters?

Always read the API documentation. If a path parameter is required, the documentation will mention it.

Note that some API documentations use "colon syntax" to represent a path parameter, like `/users/:username`, while some use curly braces like `/users/{username}`. They both mean the same thing: that part of the path is dynamic.

### Example of path parameter: get book by id

Imagine that someone keeps coming into the library every day asking whether "Ficciones" by Jorge Luis Borges is available

When you fetched all the books in the library, you may have noticed that each book has a unique `id` value. This `id` can always be used to identify the book, even if its other properties are changed.

Since this person keeps asking about "Ficciones", you've written down that the unique `id` for this book is `29cd820f-82f9-4b45-a7f4-0924111b5b89`

Want to see it for yourself? Just search for "Ficciones" with the `search` query parameter: `GET /books?search=ficciones`

According to the [Postman Library API v2 documentation](https://documenter.getpostman.com/view/15567703/UVyxRtng#b042476f-a942-497d-af90-b014f5c4a4ce), we can get a specific book by sending a `GET` request to the path `/books/:id`, where we replace `:id` with the book's id.

1. Hover on your Postman Library API v2 Collection, click the **three dots icon** and select **Add request.** Name your new request **"**get book by id**"**
2. Make sure the request method is set to `GET`, and paste in this endpoint as the request URL: `https://library-api.postmanlabs.com/books/:id`.

    Postman automatically adds a _Path Variables_ editor in the _Params_ tab of the request for any path parameters in the request URL prefixed with a colon `:`.

    ![Postman screenshot: A third request added to get a book by id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649605690%2Fget+book+by+id+1.1649605690825.png)

3. In the _Params_ tab of the request, paste the `id` for "Ficciones" (`29cd820f-82f9-4b45-a7f4-0924111b5b89`) as the _value_ for the parameter named `id`. Make sure not to add any whitespace around the id value.

    ![Postman screenshot: Id value is pasted in for the path parameter named id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649606902%2Fget+book+by+id+2.1649606902425.png)

4. **Save** your request.
5. **Send** your request.

You should get a `200 OK` response with a single JSON object that represents the "Ficciones" book. At the time of this example, the book is not checked out:

![Postman screenshot: Response from library API for getting specific book by id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649607457%2Fget+book+by+id+response.1649607457750.png)

## Add authorization to the Collection

You can pass auth details along with any request you send in Postman. Auth data can be included in the header, body, or as parameters to a request. If you enter your auth details in the **Authorization** tab, Postman will automatically populate the relevant parts of the request for your chosen auth type.

The Postman Auth helper can help you add authorization at the request, folder or collection level. By default, requests inside the collection or folder will inherit auth from the parent, which means that they'll use the same auth that you've specified at the folder or collection level. To change this for an individual request, make a different selection in the request **Authorization** tab.

Let's add the api-key to our entire collection so that all requests will send the key!

1\. Click on your collection **Postman Library API v2** and select the **Authorization** (or **Auth**) tab.

![Postman screenshot: Authorization tab of a collection](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649626552%2Fauth+2.1649626552534.png)  
  
2\. For _Type_ click the dropdown and select **API Key**.

![Postman screenshot: Auth type drop down - select API Key](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649626594%2Fauth+3.1649626594900.png)

3\. Enter the API Key details in the fields below. _Key_**: `api-key`,** _Value_**: `postmanrulz`**, _Add to_**: Header**.

![Postman screenshot: Adding API Key details to the auth helper fields](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649626670%2Fauth+4.1649626670060.png)

4\. **Save** the changes to your collection by clicking the floppy disk icon in the upper right.

![Postman screenshot: Save collection by clicking the floppy disk icon](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2Fc3jrngphf22ys6kxwfiw0g9kk%2Fpublic%2F1664389326%2Fsave_collection_button.1664389326835.png)

Now all requests inside this collection that use the auth method “Inherit from parent” will have this header attached, and therefore be authorized.

## Variables

Postman allows you to save values as variables so that you can:

1. Reuse values to keep your work - Don’t Repeat Yourself (DRY)
2. Hide sensitive values like API keys from being shared publicly

### Variable scopes

You can set variables that live at various scopes. Postman will resolve to the value at the nearest and narrowest scope. In order from broadest to narrowest, these scopes are:

- Global
- Collection
- Environment
- Data
- Local

We will work with collection variables today, which are variables that live at the collection level and can be accessed anywhere inside the collection.

### Variable syntax

Once a variable is defined, you can access its value using double curly brace syntax like this:

`{{variableName}}`

In the next section we will learn how to add variables to our collection to introduce better practices and allow us to make dynamic requests.

### Set the baseUrl variable

Notice that we use the same base URL for all requests to the library API. We can simplify our requests by replacing `https://library-api.postmanlabs.com` with a variable called `{{baseURL}}`

One way to set a variable is to highlight the input text you'd like to convert into a variable, and follow the **Set as variable** popup instructions.

1. Go to the first _"get books"_ request in your collection.

    2\. With your cursor, select the entire base URL of the API (`https://library-api.postmanlabs.com`). Do not include the slash `/` after `.com`. Click **Set as variable** to save the base URL to a variable.

    ![Postman screenshot: highlighting input text reveals a popup that allows you to set the text as a variable](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649630820%2FbaseUrl+1.1649630820044.png)

    3\. Click **Set as a new variable**.

    ![Postman screenshot: Set a new variable](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649630940%2FbaseUrl+2.1649630940824.png)

    4\. Name your new variable _“_baseUrl_”_ and select **Collection** as the scope, then click **Set variable**.

    ![Postman screenshot: Define the new variable with a name baseUrl and scope of Collection](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649631322%2FbaseUrl+3.1649631322119.png)

    5\. Hover over `{{baseUrl}}`. You will see its current value is set to `https://library-api.postmanlabs.com`.

    ![Postman screenshot: {{baseUrl}} resolves to the api base url that was set as a variable](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649632200%2FbaseUrl+4.1649632200765.png)

6\. Now you can send your request and see that it works just like before. You should get a status `200 OK` response with a list of books.

### Where are my variables?

You can find Collection variables on your collection. Select the **Postman Library API v2** collection, then click the **Variables** tab. Here you can view and edit your variables.

![Postman screenshot: Collection variables tab of the collection](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649711249%2Fbase+url+4.1649711249154.png)

Note that there are two columns:

- _INITIAL VALUE_ - the value initially set when someone forks or imports your collection. Note that this is public so don't put any secrets here.
- _CURRENT VALUE_ - Postman always resolves the variable to this value. This is local to your Postman account, and not public. It is good to keep secrets like API Keys ONLY in this column and not include in the Initial Value column.

### Update all your requests to use `{{baseUrl}}`

Now that the variable is set, you can access the value anywhere in your collection by typing `{{baseUrl}}`.

1. Set all your requests to use `{{baseUrl}}` to replace `https://library-api.postmanlabs.com` (before the slash `/`).

    ![Animation of converting the API base URL into a collection variable](https://user-images.githubusercontent.com/9841162/162840486-3255cb8e-f406-401a-b199-59467396a879.gif)

2. Be sure to **Save** each request after the change.

Postman gives you the ability to add automations and dynamic behaviors to your collections with scripting. Any Node.js code in the _Tests_ tab of a request will be executed after a response comes back from the API. If you are new to Node.js and JavaScript - have no fear! Node.js is a runtime environment for executing JavaScript code outside of a web browser.

### Logging data

In JavaScript, you can print data for a value to the console using the following syntax:

```javascript
console.log("Hello world!")
// => Hello world!
```

### Comments

In JavaScript, you can add comments to your code. Comments are skipped by the interpreter, so you can use them to explain things in your code if you like.

```javascript
// Single line comments start with two slashes. I am not code!

/* You can write multi-line comments by 
opening and closing with slash and asterisk. 
I am not code!
*/
```

### Add a script to your request

1\. In your _"add a book"_ request, change the book data in your **Body** to a new book you like.

2\. Open the **Scripts** tab of the request and select the **Post-res tab** (short for Post-response):

![Post-response under Scripts tab of the request](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2Fb1eqbs3jvi2p9gd50l4152bu4%2Fpublic%2F1722038080%2Finstructor_26fp2261340y1ukokimvca8su_public_1719586345_image%2B%2889%29.1719586345027.1722038079988.png)

3\. Inside the Tests editor, add this JavaScript code to log the JSON response from the API:

```javascript
console.log(pm.response.json())
```

![Postman screenshot: Code in the Tests script editor for logging the JSON response from the API to the console: console.log(pm.response.json()))](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649760526%2Ffirst+script+2.1649760526166.png)

4\. **Save** your request.

5\. **Send** your request. This will trigger the script in the Tests tab to run after the response comes back from the API

6\. Open the **Postman Console** in the lower left of the window:

![Postman screenshot: Access the Postman console from the lower left corner of the window](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649760644%2Fconsole.1649760644115.png)

7\. Scroll to the bottom of the logs in the console. You will see your most recent request `POST https://library-api.poistmanlabs.com/books`. The response data from the API is logged in the console because of the code in our **Tests** tab. You can expand the data by clicking on the small arrow to the left:

![Postman screenshot: Response data from the API is logged to the Postman console because of the code in the Tests tab of the request](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649760951%2Ffirst+script+3.1649760951509.png)

## Scripting in Postman

### The `pm` object

Postman has a helper object named `pm` that gives you access to data about your postman environment, requests, responses, variables and testing utilities.

For example, you can access the JSON response body from the API with: **`pm.response.json()`**

### Setting and getting collection variables

The `pm` object allows you to set and get collection variables.

To set a collection variable use the `.set()` method with the variable name and the variable value parameters:

```javascript
pm.collectionVariables.set("variableName", value)
```

To get a collection variable use the `.get()` method and specify the name of the variable you want to retrieve:

```javascript
pm.collectionVariables.get("variableName")
```

### Local variables

We can also store local variables inside our scripts using JavaScript.

There are two ways to define a variable in JavaScript: using the `const` or `let` keywords.

### Set the new book id as a variable

Saving a value as a variable allows you to use it in other requests. Let's grab the `id` of a newly added book and save it so we can use it in future requests.

1. In the **Body** tab of the _"add a book"_ request, change the details to yet another new book to add.
2. In the **Scripts** tab of the _"add a book"_ request, replace the console.log() statement with this code:

    ```javascript
    const id = pm.response.json().id
    pm.collectionVariables.set("id", id)
    ```

    This first line assigns the `id` value from the API response to a local variable named `id`. This variable is `const` because the variable value doesn't change in the script. The second line sets this value to a collection variable called `id`.

    ![Postman screenshot: Add a script in the Tests tab for setting the collection variable named id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1719600836%2Fimage+%2895%29.1719600836771.png)
3. **Save** your request
4. **Send** your request. When the `201` response comes back from the API with you newly created book, the Tests script will run and save the book's `id` as a collection variable automatically.
5. View your collection variables by clicking on your **Postman Library API v2** collection, then the **Variables** tab. The `id` variable has been automatically assigned the id of your new book as its Current Value! You can now use `{{id}}` anywhere in your collection to access this value.

    ![Postman screenshot: A collection variable named id has been automatically added by our Tests tab script](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649770495%2Fset+id+2.1649770495600.png)

## PATCH request: Check out a book

code{ font-weight: normal; }

Someone wants to check out the book you just added. As librarian, you will update the library database via the API to mark the book's `checkedOut` status from `false` to `true`.

The [API documentation](https://documenter.getpostman.com/view/15567703/UVyxRtng#1c3ce860-e1ee-4957-b517-2e3068021abc) allows updating a book by id by making an authorized request with the updated information to: `PATCH https://library-api.postmanlabs.com/books/:id`

1. Hover on your **Postman Library API v2** collection, click the three dots, and select **Add request**. Name your new request _"checkout a book"_.
2. Set the request method to **PATCH** and the request URL to `{{baseUrl}}/books/:id`

    ![Postman screenshot: Add a PATCH request to /books/:id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649785811%2Fcheckout+1.1649785811831.png)
3. Set the value of path variable `id` to `{{id}}`. This will use the value of our collection variable named `id` that was set in the script of the _"add a book"_ request.

    ![Postman screenshot: Set the path variable named id to be the value of the collection variable named id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649786360%2Fcheckout+2.1649786360490.png)
4. Add a raw JSON body in the **Body** tab for updating the `checkedOut` property to `true`:

    ```javascript
    { 
      "checkedOut": true 
    }
    ```

    ![Postman screenshot: Body tab of the PATCH request is set to raw JSON type, and a body for updating the checkedOut property to true is set](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649790706%2Fcheckout+4.1649790706385.png)
5. Make sure in the **Authorization** tab that the Auth type is set to _"Inherit from parent"_. This will use the API Key set at the collection level on our PATCH request.

    ![Postman screenshot: The Authorization tab of the request is set to inherit the auth settings from the parent (collection)](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649791078%2Fcheckout+5.1649791078839.png)
6. **Save** your request.
7. **Send** your request.

You should get a `200 OK` response that shows the updated data about your book. Notice how `checkedOut` is now `true`

![Postman screen: response from the API after updating the book's checkedOut property to true](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649791688%2Fcheckedout+7.1649791688026.png)

Now if you return to your _"get book by id"_ request, update the id path variable value to `{{id}}` , **Save** and **Send**, you will see the same updated data.

![Postman screenshot: "get a book" request shows the updated book data for the book with the given id](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649795407%2Fcheckedout+8.1649795407165.png)

## DELETE: Delete a book

code{ font-weight: normal; }

Oops! The person that checked out your book accidentally lost it... you will need to delete it from the library database. The API documentation shows that books can be deleted with the `DELETE /books/:id path`

The `DELETE` request has a similar format to the `PATCH` request, so let's copy the `PATCH` request to make our new request.

1. Hover over your _"checkout a book"_ request, click the three dots icon, then select **Duplicate** to create a copy of the request. Rename your new request _"delete a book"_.

    ![Postman screenshot: Duplicate a request by hovering on it and clicking the triple dots icon, then select Duplicate](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649797504%2Fdelete+1.1649797504471.png)
2. Set the request method of the _"delete a book"_ request to `DELETE`.
3. Make sure the request **Body** is empty. This endpoint does not require a body.
4. In the **Params** tab, make sure the path variable id is set to `{{id}}`. Your request should now look like this:

    ![Postman screenshot: DELETE book request](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649797563%2Fdelete+2.1649797563376.png)
5. **Save** your request.
6. **Send** your request.

You should get a `204 No Content` response from the API. This means the server successfully deleted the book, and won't send any response body back. Remember: if you ever wonder what a status code means, you can hover on it in Postman for an explanation.

![Postman screenshot: 204 response from API](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649797638%2Fdelete+3.1649797638274.png)

Is it really gone? Without changing anything, try sending your request again. Since you are sending a request to delete a book with an id that no longer exists, you get a `404` error.

![Postman screenshot: 404 response from server. Book with the given id is not found (because we deleted it!)](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F26fp2261340y1ukokimvca8su%2Fpublic%2F1649797906%2Fdelete+4.1649797906195.png)
