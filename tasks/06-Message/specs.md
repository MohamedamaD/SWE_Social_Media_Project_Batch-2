# Task 6: Messaging System

## 1. Goal
Implement private messaging between users.

## 2. Entities
Create `models/Conversation.js`:
-   `participants` ([ObjectId], ref: 'User')
-   `lastMessage` (String, optional)
-   `updatedAt`

Create `models/Message.js`:
-   `conversation` (ObjectId, ref: 'Conversation')
-   `sender` (ObjectId, ref: 'User')
-   `receiver` (ObjectId, ref: 'User')
-   `text` (String)
-   `status` (enum: Sent, Delivered, Read)
-   `timestamps`

## 3. API Endpoints
-   **POST /api/messages** (Send Message - Auto create conversation if not exists)
-   **GET /api/conversations** (List my conversations)
-   **GET /api/conversations/:id** (Get messages in a conversation)

## 4. Testing
`npm test tasks/06-Message/test.js`
