# VELONEXA FRONTEND DOCUMENTATION

## Table of Contents

1. [Project Overview](#1-project-overview)
   1. [Introduction](#11-introduction)
2. [Getting Started](#2-getting-started)
   1. [Prerequisites](#21-prerequisites)
   2. [Installation](#22-installation)
   3. [Configuration](#23-configuration)
3. [Project Structure](#3-project-structure)
4. [API Guidelines](#4-api-guidelines)
5. [Coding Guidelines](#5-coding-guidelines)
   1. [Coding Standards](#51-coding-standards)
   1. [Commit Message](#52-commit-message)
6. [Usage](#6-usage)
7. [LICENSE](#licence)

## 1. Project Overview

#### 1.1 Introduction

Velonexa-frontend is an application frontend that focuses on creating interactive web displays, fast navigation experiences and ensuring a good user experience with certain criteria.

The main goals and objectives of the project are:

- Make sure the ui looks good
- Ensure high performance and reliability for user experience.
- Easy to integrate

### 2. Getting Started

#### 2.1 Prerequisites

- [Node.js](https://nodejs.org) 18 or higher
- [Next.Js](https://nextjs.org/docs) 12.8 or higher

#### 2.2 Installation

- Step-by-step guide on how to set up the project locally.

```bash
git clone https://github.com/DEVTENO/velonexa-frontend velonexa-frontend

cd velonexa-frontend

npm install

```

#### 2.3 Configuration

Before running, you need to set up the environment variables. Create a .env file based on the provided .env.example file. You can do this by running the following command:

```bash
cp .env.example .env
```

Instructions on how to configure environment variables and other settings.

```bash
# .env file and .env.development file
API_URL=
NEXT_PUBLIC_API_URL=
```

### 3. Project Structure

Explanation of the project's directory structure.

```bash
public/
src/
  ├── app/
  │   ├── (auth)/
  |   |   ├── register/
  |   |   ├── login/
  |   |   ├── layout.tsx
  |   |   ├── formLayout.tsx
  │   ├── (profile)/
  |   ├── explore/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   ├── not-found.tsx
  |   ├── other/
  ├── components/
  │   ├── ui/
  │   ├── fragments/
  │   ├── layouts/
  │   ├── logoRegister.tsx
  ├── lib/
  │   ├── constant.ts
  |   ├── type /
  |   |   ├── type.ts
  |   ├── utils.ts
  ├── middleware/
  │   ├─ withAuth.ts
  ├── middleware.ts
```

### 4. API Structure

Because FE and BE are still in development stage. we create our own dummy API. by following the agreed endpoints.
here is the API structure which is in <code>app/api</code>

```bash
public/
src/
  ├── app/
  │   ├── api/
  |   |   ├── v1/
  |   |   |    ├── users/
  |   |   |    |    ├── login/
  |   |   |    |    |   ├── route.ts
  |   |   |    |    ├── register/
  |   |   |    |    |   ├── route.ts
  |   |   |    |    ├── [username]/route.ts
  |   |   |    |    ├── me/
  |   |   |    |    |   ├── bookmarks/
  |   |   |    |    |   ├── media/
  |   |   |    |    |   ├── route.ts
  |   |   |    ├── media/
```

If there is still an API missing in this structure. try to create your own. adjust the one in postman
an example of creating an API is in the bookmark API, username API

### 5. Coding Guidelines

#### 5.1 Coding Standards

- Preferred coding style and standards.
- Linting rules and configuration.

#### 5.2 Commit Message

- Guidelines for writing clear and consistent commit messages.

### 6. Usage

```bash

npm run dev #run as usual

```

TYou can access the endpoints at http://localhost:3000 (assuming the default port is used).

### LICENCE

MIT Lincense
