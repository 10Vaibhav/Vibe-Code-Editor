# VibeCode - Online Code Editor & Playground

## Overview

VibeCode is a web-based IDE that allows developers to create, edit, and run code directly in the browser using WebContainers technology. It provides a seamless development experience with multiple framework templates, integrated terminal, Monaco editor, and AI assistance.

## Features

### Core Features

- **Browser-Based Code Execution**: Run Node.js environments directly in the browser using WebContainers API
- **Monaco Editor Integration**: Full-featured code editor with syntax highlighting, IntelliSense, and multi-language support
- **Multiple Framework Templates**: Quick-start templates for popular frameworks:
  - React
  - Next.js
  - Vue
  - Angular
  - Express
  - Hono
- **Integrated Terminal**: Full xterm.js terminal with web links, search, and fit addons
- **Real-time File System**: Create, edit, and manage files and folders in your playground
- **Resizable Panels**: Customizable layout with draggable panel dividers

### AI-Powered Features

- **AI Chat Assistant**: Integrated chat interface for coding help and guidance
- **Code Completion**: AI-powered code suggestions and completions
- **Markdown Support**: Rich markdown rendering with math equations (KaTeX) and GitHub-flavored markdown

### User Management

- **Authentication**: Secure authentication with NextAuth v5
  - GitHub OAuth
  - Google OAuth
- **User Roles**: Role-based access control (Admin, User, Premium User)
- **Personal Dashboard**: Manage your playgrounds and projects
- **Star/Bookmark System**: Mark and organize favorite playgrounds

### Data Persistence

- **MongoDB Database**: Powered by Prisma ORM
- **Playground Saving**: Save and restore your code projects
- **Template Files**: Store and version your project files
- **Chat History**: Persistent AI chat conversations

### UI/UX Features

- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Dark/Light Theme**: System-aware theme switching with next-themes
- **Responsive Design**: Mobile-friendly interface
- **Toast Notifications**: User feedback with Sonner
- **Loading States**: Smooth transitions and progress indicators

## Tech Stack

### Frontend
- **Framework**: Next.js 15.5.4 with React 19
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: Radix UI primitives
- **Code Editor**: Monaco Editor (@monaco-editor/react)
- **Terminal**: xterm.js with addons
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Runtime**: Node.js with Next.js API routes
- **Authentication**: NextAuth v5 with Prisma adapter
- **Database**: MongoDB with Prisma ORM
- **WebContainers**: @webcontainer/api for browser-based code execution

### Development
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Linting**: ESLint
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 20+ installed
- MongoDB database (local or cloud)
- GitHub OAuth App credentials
- Google OAuth App credentials

## License

This project is licensed under the terms specified in the LICENSE file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
