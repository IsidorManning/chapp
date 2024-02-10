# Chapp

# Overview

This local Django-based chat application provides users with real-time communication capabilities between different browsers. Users can sign up, log in, and engage in conversations with other users through a web interface. The application utilizes Django Channels for handling WebSocket connections, enabling asynchronous communication.

# Goals

Real-time Messaging: Create a platform for users on multiple browsers to exchange messages in real-time without page refresh.
User Authentication: Implement user authentication to ensure secure access to the chat functionality.

# Components

# Frontend:

HTML Templates: Define the structure of web pages, including login, sign up, and chat interfaces.
CSS Styling: Enhance the visual appeal and user experience through custom styling.
JavaScript (AJAX): Handle asynchronous requests for sending and receiving messages without disrupting the user interface.

# Backend:

Django Framework: Powers the backend server, handling user authentication, routing, and database operations.
Django Channels: For WebSocket connections for real-time communication between clients.
Python: Implement business logic and backend functionality, including message handling and user management.

# Usage

# Authentication:

Users can sign up for a new account by providing necessary details.
Existing users can log in using their credentials.

Chatting:

Upon authentication, users can access the chat interface.
They can send and receive messages in real-time with other users that have logged in on different browsers.
Messages are displayed dynamically without the need for page refresh.

# Installation

Clone the repository from GitHub.
Install the required dependencies using pip install -r requirements.txt.
Run migrations using python manage.py migrate.
Start the Django development server with python manage.py runserver.

# Access the application through a web browser.
Sign up for a new account or log in with existing credentials.
Set up two or three users on different webbrowsers (for example, one on FireForx, one on Chrome, and one on Microsoft Edge)
Start a conversation by typing messages in the chat input box.
Messages are instantly delivered to other users in the same, local chat room.

# Code Structure in Python

Views: Handle HTTP requests and render appropriate HTML templates.
Models: Define database schema, including user authentication and message storage.
Forms: Manage user input for sign-up and login functionalities.
Consumers: Implement WebSocket consumers using Django Channels for real-time message handling.

# Possible Future Improvements

Implement message encryption for improved security.
Explore scalability options for handling a larger user base.
Host the application online on a website somehow (then security will need to be a much higher priority)
