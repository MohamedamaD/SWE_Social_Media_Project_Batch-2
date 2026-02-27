# Task 5: Follow Entity

## 1. Goal
Implement the User Follow system.

## 2. Entity: Follow
Create `models/Follow.js`:
-   `follower` (ObjectId, ref: 'User', required)
-   `followed` (ObjectId, ref: 'User', required)
-   `timestamps` (createdAt as `followDate`)
-   **Composite Unique Index**: Ensure a user cannot follow the same person twice.

## 3. API Endpoints
-   **POST /api/users/:id/follow**
-   **DELETE /api/users/:id/unfollow**
-   **GET /api/users/:id/followers**
-   **GET /api/users/:id/following**

## 4. Testing
`npm test tasks/05-Follow/test.js`
