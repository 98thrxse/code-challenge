# Problem6

![image_2024-08-05_22-25-25](https://github.com/user-attachments/assets/c0830d78-90a6-4232-8e62-cfb86dc566a2)

## System Overview

The diagram illustrates a system architecture responsible for managing user scores and displaying a live scoreboard. The system comprises the following key components:

  - User: Represents an individual interacting with the system.
  - Website: The user interface through which users perform actions.
  - API Server: Handles communication between the website and other system components.
  - Auth Service: Authenticates user requests.
  - Database: Stores user scores and other relevant data.

## Core Functionality

1. User Performs Action:
    - A user interacts with the website, triggering an action (e.g., submitting a score).

2. Update Score Request:
    - The website sends an "Update score request" to the API server, containing the user's score and potentially other data.

3. Authentication:
    - The API server forwards the request to the Auth Service for user authentication.

4. Authentication Success/Failure:
    - If authentication is successful, the Auth Service returns a success message. Otherwise, an authentication failure is returned.

5. Update User Score:
    - Upon successful authentication, the API server updates the user's score in the database.

6. Score Update Success/Failure:
    - The database returns a success or failure message indicating whether the score update was successful.

7. Scoreboard Update:
    - If the score update is successful, the API server fetches the top 10 scores from the database and updates the scoreboard on the website.

8. Live Update:
    - The system periodically (e.g., every minute) retrieves the top 10 scores and updates the scoreboard to ensure it displays the latest information.

## Error Handling

  - Authentication Failure: If authentication fails, the system displays an appropriate error message to the user.
  - Score Update Failure: In case of a score update failure, an error message is logged, and the user might be notified. The system could retry the update or implement alternative error handling strategies.
