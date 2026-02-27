# Task 3: Comment Entity

## 1. Goal
Implement the `Comment` model to allow users to comment on posts.

## 2. Entity: Comment
Create `models/Comment.js`:
-   `post` (ObjectId, ref: 'Post', required)
-   `user` (ObjectId, ref: 'User', required)
-   `text` (String, required)
-   `parentComment` (ObjectId, ref: 'Comment', default: null)
-   `timestamps`

## 3. API Endpoints
-   **POST /api/posts/:id/comments** (Add Comment)
-   **GET /api/posts/:id/comments** (Get Comments for a Post)
-   **POST /api/comments/:id/reply** (Reply to a Comment - Optional complexity)

## 4. Testing
`npm test tasks/03-Comment/test.js`
