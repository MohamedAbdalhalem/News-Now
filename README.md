# NewsNow

NewsNow is a modern news web application built with Next.js and React. It provides a fast, clean, and responsive experience for browsing the latest headlines, exploring articles by category, searching for specific topics, and receiving push notifications through Firebase.

## Overview

This project is designed to help users stay informed with up-to-date news from multiple categories such as world, business, technology, sports, entertainment, health, and more. The interface is optimized for both desktop and mobile devices and includes a theme switcher for light, dark, and system-based appearance.

## Features

- Browse top headlines on the homepage
- Explore news by category
- Search articles by keyword
- View article details in a dedicated page
- Responsive and modern UI
- Theme toggle with light/dark/system options
- Firebase-based push notification support
- Smooth navigation with dynamic routing

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Firebase Cloud Messaging
- NewsData API

## Project Structure

- app/ - Main application routes and pages
- component/ - Reusable UI components
- hooks/ - Custom hooks
- lib/ - Helper functions and API logic
- public/ - Static assets and service worker files
- types/ - TypeScript types

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd newsnow
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit
   ```text
   http://localhost:3000
   ```

## Available Scripts

- npm run dev - Start the development server
- npm run build - Build the project for production
- npm run start - Start the production server
- npm run lint - Run ESLint checks

## Firebase Notifications

The app includes Firebase messaging support for browser push notifications. Firebase configuration is already set up in the project, and a service worker is included under the public folder for notification handling.

## Notes

This app fetches news content from the NewsData API and is intended as a polished frontend experience for reading and discovering articles quickly.

## Contributing

Contributions are welcome. If you would like to improve the app, feel free to open an issue or submit a pull request.
