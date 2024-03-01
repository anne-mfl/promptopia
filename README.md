# Next.js 14 AI Prompt Sharing Application

This is a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.


## Tech Stack

- Next.js
- MongoDB
- NextAuth
- Tailwind CSS


## Features

- Discover and share AI prompts:
  It allows users to discover AI prompts shared by community and create their own prompts to share.

- Edit and delete created Prompts:
  Users can edit their created prompts and delete them.

- Profile page:
  Each user has a dedicated profile page that displays all the prompts that they have created.

- View other user's profiles:
  Users can explore the profiles of other creators to view the prompts that they have shared

- Copy to clipboard:
  Implemented a convinient "Copy to clipboard" functionality for users to easily copy the AI prompts for their usage

- Search prompts by specific tag:
  It allows users to search for prompts based on specific tags, making it easier to find prompts related to specific topics

- Google authentication using NextAuth:
  It enables secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience

- Responsive website:
  It is a fully responsive website to ensure optimal user experience across various devides, from desktops to smartphones


## Getting Started

How to set up the project locally on your machine:

1) Make sure you have the following installed on your machine:
- [Git](https://git-scm.com/) 
- [Node.js](https://nodejs.org/en) 
- [npm](https://www.npmjs.com/) 

2) Clone repository

3) Install project dependencies
```
npm install
```

4) Set up environment variables
Create a .env file in the root of your project and add the following:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), and [MongoDB](https://www.mongodb.com/).

5) Run the project

```
npm run dev
```

Open [http://localhost:3000] (http://localhost:3000) in your browser to view the project.
