# Task 4: Like Entity

## 1. Goal
Implement the `Like` functionality.

## 2. Entity: Like
Create `models/Like.js`:
-   `user` (ObjectId, ref: 'User', required)
-   `post` (ObjectId, ref: 'Post', required)
-   `type` (String, enum: ['Like', 'Love', 'Haha', 'Angry', 'Sad', 'Wow'], default: 'Like')
-   `timestamps`

## 3. API Endpoints
-   **POST /api/posts/:id/like** (Toggle Like)
    -   If user already liked the post, remove the like.
    -   If not, add the like.
-   **GET /api/posts/:id/likes** (Get users who liked the post)

## 4. Testing
`npm test tasks/04-Like/test.js`
