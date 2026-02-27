# Student Tasks - Social Media App

Welcome to the Social Media App project! Your goal is to implement the backend features for this application using Node.js, Express, and MongoDB.

## Project Setup
1.  **Install Dependencies**: Run `npm install` to install the required packages.
2.  **Environment Variables**: Copy `.env` or create your own with the following:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/social_media_app
    JWT_SECRET=your_super_secret_key
    ```
3.  **Run Server**: `npm run dev` (uses nodemon).
4.  **Run Tests**: `npm test` or `npm test tests/auth.test.js` (for specific tasks).

## Task Breakdown

### Task 1: Authentication & User Management
**Objective**: Implement user registration, login, and profile management.
-   **Endpoints**:
    -   `POST /api/auth/register`: Register a new user (hash password, validate input).
    -   `POST /api/auth/login`: Login user (return JWT).
    -   `GET /api/auth/profile`: Get current user profile (protected route).
    -   `PUT /api/auth/profile`: Update user profile (bio, profile picture).
-   **Validation**: Use Joi to validate registration and login bodies.
-   **Models**: `User`.

### Task 2: Posts System
**Objective**: Allow users to create, view, update, and delete posts.
-   **Endpoints**:
    -   `POST /api/posts`: Create a new post (text/image/video).
    -   `GET /api/posts`: Get all posts (pagination, filtering).
    -   `GET /api/posts/:id`: Get a single post.
    -   `PUT /api/posts/:id`: Update a post (owner only).
    -   `DELETE /api/posts/:id`: Delete a post (owner only).
-   **Models**: `Post`.

### Task 3: Comments & Likes
**Objective**: Interactive features for posts.
-   **Endpoints**:
    -   `POST /api/posts/:id/comments`: Add a comment.
    -   `POST /api/posts/:id/like`: Like/Unlike a post.
    -   `GET /api/posts/:id/comments`: Get comments for a post.
-   **Models**: `Comment`, `Like`.

### Task 4: Follow System
**Objective**: Social graph connections.
-   **Endpoints**:
    -   `POST /api/users/:id/follow`: Follow a user.
    -   `DELETE /api/users/:id/unfollow`: Unfollow a user.
    -   `GET /api/users/:id/followers`: List followers.
    -   `GET /api/users/:id/following`: List following.
-   **Models**: `Follow`.

### Task 5: Messaging (Advanced)
**Objective**: specific conversation flow.
-   **Endpoints**:
    -   `POST /api/messages`: Send a message.
    -   `GET /api/conversations`: Get user conversations.
    -   `GET /api/conversations/:id`: Get messages in a conversation.
-   **Models**: `Message`, `Conversation`.

---
**Good Luck!**
