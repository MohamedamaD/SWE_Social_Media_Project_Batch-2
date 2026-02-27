# Task 7: Notification & Reporting

## 1. Goal
Implement notifications and content reporting.

## 2. Entities
Create `models/Notification.js`:
-   `user` (who receives it)
-   `type` (Like, Comment, Follow, Message)
-   `status` (Read, Unread)
-   `relatedId` (PostID, UserID, etc.)

Create `models/Report.js`:
-   `reporter`
-   `reportedUser` / `reportedPost`
-   `reason`

## 3. API Endpoints
-   **GET /api/notifications**
-   **PUT /api/notifications/:id/read**
-   **POST /api/reports**

## 4. Testing
`npm test tasks/07-Notification-Report/test.js`
