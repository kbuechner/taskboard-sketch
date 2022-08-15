# Group

## Object shape

```js 
Group: {
    id: 
    name:
    description:
}
```

## `Group` APIs

### Get Groups
Method: `GET`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/groups`  
Params: None  
Returns: List of `Group` Resources  

### Create a new Group

Method: `POST`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/groups`  
Params: None  
Body: `Group` Resource
Requirements: No `id` in group resource  
Returns: `Group` Resource created  


### Update a Group

Method: `PUT`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/groups`  
Params: None  
Body: `Group` resource  
Requirements: `id` must be in `Group` resource  
Returns: `Group` updated  

### Delete a Group
Method: `DELETE`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/groups`  
Params: None  
Body: `Group` resource  
Requirements: `id` must be in group resource  
Returns: Nothing  