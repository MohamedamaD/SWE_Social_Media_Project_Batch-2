# Task 2: Post Entity

## 1. Goal
Implement the `Post` model and CRUD operations.

## 2. Entity: Post
Create `models/Post.js`:
-   `user` (ObjectId, ref: 'User', required)
-   `content` (String, required)
-   `type` (String, enum: ['text', 'image', 'video'], default: 'text')
-   `privacy` (String, enum: ['Public', 'Private', 'Friends-only'], default: 'Public')
-   `likesCount` (Number, default: 0)
-   `commentsCount` (Number, default: 0)
-   `timestamps`

## 3. API Endpoints
-   **POST /api/posts** (Create Post)
-   **GET /api/posts** (Get All Public Posts)
-   **GET /api/posts/:id** (Get Single Post)
-   **PUT /api/posts/:id** (Update Post - Owner only)
-   **DELETE /api/posts/:id** (Delete Post - Owner only)

## 4. Testing
`npm test tasks/02-Post/test.js`
