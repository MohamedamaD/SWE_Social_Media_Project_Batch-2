# Task 1: User Entity & Authentication

## 1. Goal
Implement the `User` model and the Authentication system (Register, Login, Profile).

## 2. Entity: User
Create `models/User.js` with the following schema:
-   `username` (String, required, unique)
-   `email` (String, required, unique)
-   `password` (String, required) - *Must be hashed*
-   `profilePicture` (String, default: "")
-   `bio` (String, default: "")
-   `accountStatus` (String, enum: ['Active', 'Suspended', 'Deleted'], default: 'Active')
-   `timestamps` (createdAt, updatedAt) - *Use Mongoose timestamps option*

## 3. API Endpoints to Implement
-   **POST /api/auth/register**
    -   Validate input using Joi.
    -   Check if user already exists.
    -   Hash password using `bcryptjs` (or similar).
    -   Create user.
    -   Return 201 and the created user (excluding password).
-   **POST /api/auth/login**
    -   Validate input.
    -   Check user existence and password match.
    -   Generate JWT token.
    -   Return 200 and token.
-   **GET /api/auth/profile**
    -   Protected route (requires valid JWT).
    -   Return current user profile.
-   **PUT /api/auth/profile**
    -   Protected route.
    -   Allow updating `bio` and `profilePicture`.

## 4. Testing
Run the test script:
`npm test tasks/01-User/test.js`
