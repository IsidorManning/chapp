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

# How the Asynchronicity Works 

class ChatConsumer(AsyncWebsocketConsumer): Here we are creating a class named ChatConsumer which
inherits from AsyncWebsocketConsumer and is used to create,
destroy and do a few more things with WebSockets. And here
we are creating ChatSocket for the required purpose.

async def connect(self): This function works on the websocket
instance which has been created and when the connection is open
or created, it connects and accepts the connection. It creates a
group name for the chatroom and adds the group to the channel
layer group.

async def disconnect(): This just removes the instance from the
group.

async def receive(): This function is triggered when we send data
from the WebSocket ( the event for this to work is: send ),
this receives the text data which has been converted into the
JSON format ( as it is suitable for the javascript ) after the
text_data has been received, then it needs to be spread out to
the other instances which are active in the group. we retrieve
the message parameter which holds the message and the username
parameter which was sent by the socket via HTML or js.
This message which is received will be spread to other instances
via the channel_layer.group_send() method which takes the first
argument as the roomGroupName that to which group this instance
belongs and where the data needs to be sent. then the second
argument is the dictionary which defines the function which
will handle the sending of the data ( “type”: “sendMessage” )
and also dictionary has the variable message which holds the
message data.

async def sendMessage(self, event): This function takes the
instance which is sending the data and the event,
basically event holds the data which was sent via the
group_send() method of the receive() function. Then it
sends the message and the username parameter to all the
instances which are active in the group. And it is dumped in
JSON format so that js can understand the notation. JSON is
the format ( Javascript object notation)

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
