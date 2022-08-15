# TASK

## Object shape
```js
Task: {
	id:
	name:
	body:
	groupDto: {Group Resource}
}
```

## `Task` API

### Get Tasks for Board
Method: `GET`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/tasks`  
Params: None  
Body: None  
Requirements: None   
Returns: List of `Tasks`  

### Create Task
Method: `POST`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/tasks`  
Params: None  
Body: `Task`   
Requirements: No `id` in `Task`, `Task` must contain a `groupDto`  
Returns: The `Task` Resource created

### Update Task
Method: `PUT`
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/tasks`
Params: None   
Body: a `Task`   
Requirements: `Task` must have an `id`  
Returns: The `Task` after update   

### Delete Task
Method: `DELETE`  
URL: `https://dev-game-services.objectiveed.com/boards/{boardId}/tasks`  
Params: None  
Body: a `Task`
Requirements: `Task` must have an `id`   
Returns: Nothing  
