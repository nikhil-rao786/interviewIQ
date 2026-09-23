# InterviewIQ.AI 🤖

> **AI-Powered Mock Interview Platform** that analyzes your resume, generates personalized interview questions, conducts interactive Technical & HR interviews, evaluates your answers using AI, and provides detailed performance reports.

<p align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://interviewiq-client-2c70.onrender.com/)

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge\&logo=github)](https://github.com/nikhil-rao786/interviewIQ)

</p>

InterviewIQ.AI is a full-stack MERN application designed to simulate a real interview experience. Users can upload their resume, receive AI-generated questions based on their profile, practice timed interviews using voice interaction, receive intelligent feedback, track interview history, and download detailed performance reports as PDFs.

---

## ✨ Features

### 📄 Resume Analysis

* Upload resume in **PDF format**
* Extract text from uploaded resumes using `pdfjs-dist`
* Automatically identify:

  * Candidate role
  * Experience
  * Projects
  * Technical skills
* Resume files are removed from the server after processing
* Extracted information is used to personalize the interview

### 🤖 AI-Powered Question Generation

* Generates interview questions dynamically using **OpenRouter AI**
* Questions are personalized using:

  * Resume content
  * Job role
  * Experience
  * Skills
  * Projects
  * Interview mode
* Generates exactly **5 questions**
* Questions follow progressive difficulty:

  * 2 Easy
  * 2 Medium
  * 1 Hard
* Each question has an individual time limit

### 🎤 Interactive AI Interview

* Supports **Technical** and **HR** interview modes
* AI interviewer speaks questions using browser **Speech Synthesis**
* Candidate can answer using:

  * Keyboard
  * Microphone / Speech Recognition
* Animated AI interviewer video
* Automatic microphone control while AI is speaking
* Real-time interview timer
* Automatic answer submission when time expires
* AI-generated feedback after every answer

### 🧠 Intelligent Answer Evaluation

Each answer is evaluated using AI on three parameters:

| Evaluation Metric | Description                                |
| ----------------- | ------------------------------------------ |
| Confidence        | How confidently the answer is presented    |
| Communication     | Clarity and effectiveness of communication |
| Correctness       | Accuracy, relevance and completeness       |

Each parameter is scored from **0–10**.

The final question score is calculated from these evaluation metrics.

### 📊 Interview Analytics Dashboard

After completing an interview, users receive:

* Overall interview score
* Confidence score
* Communication score
* Correctness score
* Question-wise scores
* AI-generated feedback
* Performance trend visualization
* Detailed question breakdown
* Performance summary

Charts are implemented using **Recharts** and circular score indicators using **React Circular Progressbar**.

### 📑 Downloadable PDF Reports

Users can download their interview performance report as a PDF.

The PDF contains:

* Interview title
* Final score
* Skill evaluation
* Professional improvement advice
* Question-wise scores
* AI feedback

PDF generation is implemented completely on the frontend using:

* `jsPDF`
* `jspdf-autotable`

### 💳 Credit-Based Access System

Interview generation uses a credit-based model.

* New users receive default credits
* Generating an interview consumes credits
* Server validates credit availability before generating questions
* Credits are deducted only after successful AI question generation

### 💰 Razorpay Payment Integration

Users can purchase additional interview credits.

Payment flow:

```text
Select Plan
     ↓
Create Razorpay Order
     ↓
Complete Payment
     ↓
Receive Payment Details
     ↓
Server Verifies Razorpay Signature
     ↓
Payment Stored in MongoDB
     ↓
Credits Added to User Account
```

Payment verification uses **HMAC-SHA256 signature validation** on the backend.

### 🔐 Authentication & Authorization

* Google Authentication using Firebase
* JWT-based backend authentication
* JWT stored using HTTP cookies
* Protected API routes using authentication middleware
* Persistent login using current-user API
* User-specific interview history and credits

### 🎨 Modern UI

* Responsive React interface
* Tailwind CSS
* Smooth animations using Motion
* React Icons
* Toast notifications
* Responsive layouts for different screen sizes
* Interactive pricing cards
* Animated authentication interface

### 📚 Interview History

Users can view their previous interviews including:

* Role
* Experience
* Interview mode
* Final score
* Interview status
* Creation date

Individual interview reports can be opened again from the history page.

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ React + Vite Client │
                         │   Tailwind CSS      │
                         └──────────┬──────────┘
                                    │
                           REST API / Axios
                                    │
                                    ▼
                     ┌───────────────────────────┐
                     │     Node.js + Express     │
                     │       REST Backend        │
                     └─────────────┬─────────────┘
                                   │
                ┌──────────────────┼───────────────────┐
                │                  │                   │
                ▼                  ▼                   ▼
        ┌─────────────┐    ┌─────────────┐    ┌──────────────┐
        │  MongoDB    │    │ OpenRouter  │    │   Razorpay   │
        │   Database  │    │     AI      │    │   Payments   │
        └─────────────┘    └─────────────┘    └──────────────┘
                                   │
                                   ▼
                          AI Questions /
                          Answer Evaluation
```

---

# 🔄 Application Workflow

## 1. User Authentication

```text
User
 │
 ▼
Firebase Google Login
 │
 ▼
Google User Information
 │
 ▼
Backend /api/auth/google
 │
 ▼
Find/Create User in MongoDB
 │
 ▼
Generate JWT
 │
 ▼
Store JWT in HTTP Cookie
```

---

## 2. Resume Processing

```text
Upload Resume PDF
       │
       ▼
Multer Middleware
       │
       ▼
PDF stored temporarily
       │
       ▼
pdfjs-dist extracts text
       │
       ▼
Text cleaned
       │
       ▼
OpenRouter AI
       │
       ▼
Role / Experience / Projects / Skills
       │
       ▼
Temporary PDF deleted
```

---

## 3. Interview Generation

```text
Resume Information
       +
Role
       +
Experience
       +
Interview Mode
       │
       ▼
Backend Validation
       │
       ▼
Check User Credits
       │
       ▼
OpenRouter AI
       │
       ▼
5 Personalized Questions
       │
       ▼
Save Interview in MongoDB
       │
       ▼
Deduct Credits
       │
       ▼
Start Interview
```

---

## 4. Answer Evaluation

```text
Candidate Answer
       │
       ▼
Submit Answer API
       │
       ▼
Check Time Limit
       │
       ▼
OpenRouter AI
       │
       ▼
┌───────────────────────┐
│ Confidence            │
│ Communication         │
│ Correctness           │
│ Final Score           │
│ Feedback              │
└───────────┬───────────┘
            │
            ▼
      MongoDB Storage
```

---

## 5. Interview Report

```text
Complete Interview
       │
       ▼
Calculate Overall Metrics
       │
       ▼
Save Final Score
       │
       ▼
Interview Analytics
       │
       ├── Overall Score
       ├── Confidence
       ├── Communication
       ├── Correctness
       ├── Question Scores
       └── AI Feedback
              │
              ▼
        PDF Generation
              │
              ▼
      AI_Interview_Report.pdf
```

---

# 🛠️ Tech Stack

## Frontend

| Technology                 | Purpose                   |
| -------------------------- | ------------------------- |
| React.js                   | Frontend UI               |
| Vite                       | Development & build tool  |
| Tailwind CSS               | Styling                   |
| Motion                     | UI animations             |
| Redux Toolkit              | Global state management   |
| React Router               | Client-side routing       |
| Axios                      | API communication         |
| Firebase                   | Google Authentication     |
| Recharts                   | Performance visualization |
| React Circular Progressbar | Score visualization       |
| React Icons                | UI icons                  |
| React Hot Toast            | Notifications             |
| jsPDF                      | PDF generation            |
| jsPDF AutoTable            | Tables inside PDF reports |

## Backend

| Technology    | Purpose                      |
| ------------- | ---------------------------- |
| Node.js       | Backend runtime              |
| Express.js    | REST API framework           |
| MongoDB       | Database                     |
| Mongoose      | MongoDB ODM                  |
| JWT           | Authentication               |
| Cookie Parser | JWT cookie handling          |
| Multer        | Resume file upload           |
| pdfjs-dist    | PDF text extraction          |
| Axios         | OpenRouter API communication |
| dotenv        | Environment configuration    |
| CORS          | Cross-origin API access      |
| Razorpay SDK  | Payment processing           |

## AI & External Services

* **OpenRouter API** — AI question generation and answer evaluation
* **Firebase Authentication** — Google Sign-In
* **Razorpay** — Credit purchases
* **Render** — Full-stack deployment

---

# 📁 Project Structure

```text
InterviewIQ.AI/
│
├── client/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   ├── interviewHistory.jsx
│   │   │   └── Pricing.jsx
│   │   │
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   │
│   │   ├── utils/
│   │   │   └── firebase.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   ├── connectDb.js
│   │   └── token.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── interview.model.js
│   │   ├── payment.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   │
│   ├── services/
│   │   ├── openRouter.service.js
│   │   └── razorpay.service.js
│   │
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

### Google Authentication

```http
POST /api/auth/google
```

Creates or retrieves a user and generates a JWT authentication cookie.

### Logout

```http
GET /api/auth/logout
```

Clears the authentication cookie.

---

## User

### Get Current User

```http
GET /api/user/current-user
```

Returns the currently authenticated user's information.

---

## Interview

### Analyze Resume

```http
POST /api/interview/resume
```

Uploads and analyzes a resume PDF.

**Request:**

```text
multipart/form-data
resume: <PDF file>
```

### Generate Interview Questions

```http
POST /api/interview/generate-questions
```

Generates personalized interview questions using AI.

### Submit Answer

```http
POST /api/interview/submit-answer
```

Evaluates the candidate's answer using AI.

### Finish Interview

```http
POST /api/interview/finish
```

Calculates overall interview performance.

### Get Interview History

```http
GET /api/interview/get-interview
```

Returns the user's previous interviews.

### Get Interview Report

```http
GET /api/interview/report/:id
```

Returns detailed analytics for a specific interview.

---

## Payments

### Create Razorpay Order

```http
POST /api/payment/order
```

Creates a Razorpay payment order for the selected credit plan.

### Verify Payment

```http
POST /api/payment/verify
```

Verifies the Razorpay payment signature and adds purchased credits to the user's account.

---

# 🔐 Authentication Architecture

InterviewIQ.AI uses two layers for authentication:

### Frontend Authentication

Firebase handles Google Sign-In.

```text
Google Account
      ↓
Firebase Authentication
      ↓
Firebase User
      ↓
Name + Email
      ↓
Backend
```

### Backend Authorization

After receiving the authenticated user's information, the backend:

1. Finds or creates the user in MongoDB.
2. Generates a JWT.
3. Stores the JWT in an HTTP cookie.
4. Protected routes use `isAuth` middleware.
5. Middleware verifies the JWT.
6. User ID is attached to `req.userId`.

```text
Request
   ↓
Cookie
   ↓
JWT
   ↓
jwt.verify()
   ↓
req.userId
   ↓
Protected Controller
```

---

# 🧠 AI Integration

The application communicates with **OpenRouter** through Axios.

The backend sends structured messages containing:

```text
Role
Experience
Interview Mode
Projects
Skills
Resume
```

The AI generates personalized interview questions based on this context.

For answer evaluation, the AI evaluates:

```text
Confidence
Communication
Correctness
```

and returns structured JSON:

```json
{
  "confidence": 8,
  "communication": 7,
  "correctness": 9,
  "finalScore": 8,
  "feedback": "Clear response with good technical understanding and relevant explanation."
}
```

This structured response is then stored in MongoDB.

---

# 💳 Credit System

The application follows a credit-based access model.

A newly created user receives:

```text
100 Credits
```

Interview generation requires:

```text
50 Credits
```

Before generating an interview, the backend verifies:

```javascript
if (user.credits < 50) {
    // reject request
}
```

After successful AI question generation:

```text
User Credits
      ↓
Credits - 50
      ↓
Updated MongoDB User
```

This prevents users from generating interviews without sufficient credits.

---

# 💰 Razorpay Payment Flow

The payment implementation follows a server-side verification approach.

### Step 1 — Create Order

Frontend sends:

```text
planId
amount
credits
```

Backend creates a Razorpay order.

### Step 2 — Payment

User completes payment through Razorpay.

### Step 3 — Signature Verification

The backend creates:

```text
razorpay_order_id + "|" + razorpay_payment_id
```

and generates an HMAC-SHA256 signature using the Razorpay secret.

The generated signature is compared with Razorpay's signature.

### Step 4 — Update Database

After successful verification:

```text
Payment Status → paid
        ↓
Credits added to User
```

Payment records are stored in MongoDB for transaction tracking.

---

# 📄 PDF Report Generation

Interview reports are generated directly in the browser using:

```text
jsPDF
      +
jspdf-autotable
```

The generated PDF contains:

* Final score
* Confidence score
* Communication score
* Correctness score
* Professional advice
* Question-wise scores
* Question-wise AI feedback

The generated file is saved as:

```text
AI_Interview_Report.pdf
```

No separate PDF-generation server is required.

---

# 🎤 Voice Interview System

InterviewIQ.AI uses browser-native speech APIs.

### Speech Synthesis

The AI interviewer speaks questions using:

```javascript
window.speechSynthesis
```

The application:

* Selects available browser voices
* Controls speech rate
* Controls pitch
* Displays subtitles
* Plays interviewer animation while speaking
* Temporarily disables microphone input while AI speaks

### Speech Recognition

Candidate responses can be captured through:

```javascript
webkitSpeechRecognition
```

The recognized transcript is automatically added to the answer field.

---

# ⏱️ Timed Interview System

Each question has an individual time limit.

Example:

```text
Easy Question     → 60 seconds
Easy Question     → 60 seconds
Medium Question   → 90 seconds
Medium Question   → 90 seconds
Hard Question     → 120 seconds
```

If the timer reaches zero, the answer is automatically submitted.

If the candidate exceeds the allowed time, the backend marks the response accordingly.

---

# 📊 Performance Analytics

The report calculates:

### Final Score

Average score across all interview questions.

### Confidence

Average confidence score across questions.

### Communication

Average communication score.

### Correctness

Average correctness score.

The frontend visualizes these metrics using:

* Circular progress indicators
* Progress bars
* Area charts
* Question-wise performance cards

---

# 🗄️ Database Models

## User

```text
User
├── name
├── email
├── credits
├── createdAt
└── updatedAt
```

## Interview

```text
Interview
├── userId
├── role
├── experience
├── mode
├── resumeText
├── questions[]
├── finalScore
├── status
├── createdAt
└── updatedAt
```

Each question stores:

```text
Question
├── question
├── difficulty
├── timeLimit
├── answer
├── feedback
├── score
├── confidence
├── communication
└── correctness
```

## Payment

Payment information is stored with:

```text
userId
planId
amount
credits
razorpayOrderId
razorpayPaymentId
status
```

---

# ⚙️ Local Setup

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB
* Git

You also need accounts/API credentials for:

* Firebase
* OpenRouter
* Razorpay

---

## 1. Clone Repository

```bash
git clone https://github.com/nikhil-rao786/interviewIQ.git
cd interviewIQ
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

## Client `.env`

Create:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

Additional Firebase configuration values can be added according to your Firebase project configuration.

---

## Server `.env`

Create:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> **Important:** Never commit `.env` files, API keys, JWT secrets, Razorpay secrets, or other credentials to GitHub.

---

# ▶️ Run the Application

## Start Backend

```bash
cd server
npm run dev
```

Backend will run on:

```text
http://localhost:8000
```

## Start Frontend

In another terminal:

```bash
cd client
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🚀 Production Deployment

The application is deployed using **Render**.

### 🌐 Live Application

**[Launch InterviewIQ.AI →](https://interviewiq-client-2c70.onrender.com/)**

### 💻 Source Code

**[View GitHub Repository →](https://github.com/nikhil-rao786/interviewIQ)**

### Frontend

Build the React application:

```bash
npm run build
```

The production build is generated inside:

```text
dist/
```

### Backend

Run the Express server using the configured production start command.

Production environment variables should be configured through the hosting platform rather than committed to the repository.

### Production Configuration

For deployment, update:

* Frontend API URL
* Backend CORS origin
* Firebase authorized domains
* Razorpay configuration
* MongoDB connection
* Environment variables
* Secure cookie configuration

---

# 🧪 Development Workflow

The project follows a layered architecture:

```text
Frontend
   ↓
React Components
   ↓
Axios API Calls
   ↓
Express Routes
   ↓
Authentication Middleware
   ↓
Controllers
   ↓
Services
   ↓
MongoDB / External APIs
```

This separation keeps business logic, authentication, database operations and external integrations organized.

---

# 🛡️ Security Considerations

The application implements several security-related practices:

* JWT-based authentication
* HTTP cookies for token storage
* Protected backend routes
* Server-side credit validation
* Server-side Razorpay signature verification
* Environment variables for secrets
* CORS configuration
* Temporary resume processing
* Uploaded resume cleanup after extraction
* Authentication middleware before protected operations

---

# 📌 Key Learning Outcomes

This project demonstrates practical experience with:

* MERN stack development
* REST API development
* React component architecture
* State management using Redux Toolkit
* Firebase authentication
* JWT authorization
* HTTP cookies
* MongoDB & Mongoose
* File uploads using Multer
* PDF text extraction
* AI API integration
* Prompt engineering
* Structured AI responses
* AI-based answer evaluation
* Browser Speech Recognition
* Browser Speech Synthesis
* Payment gateway integration
* Razorpay signature verification
* Credit-based SaaS architecture
* PDF report generation
* Data visualization
* Responsive UI development
* API integration using Axios
* Production deployment

---

# 🎯 Use Cases

InterviewIQ.AI can be useful for:

* 🎓 Final-year students preparing for placements
* 💻 Software engineering candidates
* 🧑‍💻 MERN stack developers
* 🤖 AI application developers
* 📄 Resume-based interview preparation
* 🏢 Mock technical interviews
* 🗣️ HR interview practice
* 🚀 SaaS portfolio projects
* 💼 Freelance/full-stack project demonstrations

---

# 🔮 Future Improvements

Potential future enhancements include:

* [ ] Real-time video interview using WebRTC
* [ ] Webcam-based interview monitoring
* [ ] Advanced resume ATS scoring
* [ ] Job-description-based question generation
* [ ] Multiple AI interviewer personalities
* [ ] Interview difficulty customization
* [ ] More detailed skill-wise analytics
* [ ] Leaderboards and benchmarking
* [ ] Email-based interview reports
* [ ] Interview recommendation engine
* [ ] Admin dashboard
* [ ] Payment history page
* [ ] Subscription-based plans
* [ ] More AI model providers
* [ ] Multi-language interview support
* [ ] Advanced anti-cheating mechanisms

---

# 🌟 Why InterviewIQ.AI?

InterviewIQ.AI combines multiple real-world full-stack concepts into one application:

```text
Authentication
      +
AI Integration
      +
Resume Processing
      +
Voice Interaction
      +
Timed Interviews
      +
AI Evaluation
      +
Analytics
      +
PDF Generation
      +
Payment Gateway
      +
Credit System
      +
MongoDB
      +
Production Deployment
```

Instead of being a simple CRUD project, it demonstrates how different backend services, third-party APIs, AI systems, payment infrastructure and frontend experiences can be integrated into a complete SaaS-style application.

---

# 👨‍💻 Author

**Nikhil Rao**

B.Tech — Chemical Engineering & Technology
IIT (BHU) Varanasi

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
