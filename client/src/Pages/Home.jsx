import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsPlayCircle,
  BsUpload,
  BsFileEarmarkPdf
} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import AuthModel from '../components/AuthModel';

// Keval wahi images import ki hain jo upar features section me use ho rahi hain
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';

function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900'>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-6 py-20 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            AI Mock Interview Platform
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-10'>
            A smart interview practice tool built to help students prepare for technical and HR rounds. Upload your resume, select your role, and practice with real-time AI feedback.
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true)
                  return;
                }
                navigate("/interview")
              }}
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm w-full sm:w-auto'>
              Start Interview
            </button>

            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true)
                  return;
                }
                navigate("/history")
              }}
              className='bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition w-full sm:w-auto'>
              View Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-16 space-y-24'>

        {/* --- HOW IT WORKS (Overview) --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className='text-3xl font-bold text-gray-800'>How It Works</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {
              [
                {
                  icon: <BsRobot size={24} />,
                  title: "1. Setup Profile",
                  desc: "Enter your target job role and experience level. The AI will customize the interview questions accordingly."
                },
                {
                  icon: <BsMic size={24} />,
                  title: "2. Voice Interview",
                  desc: "Interact with the AI using your microphone. It asks follow-up questions based on your previous answers."
                },
                {
                  icon: <BsClock size={24} />,
                  title: "3. Get Results",
                  desc: "Once the interview is over, get a detailed report with scores on confidence, communication, and correctness."
                }
              ].map((item, index) => (
                <div key={index} className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition text-center'>
                  <div className='bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {item.icon}
                  </div>
                  <h3 className='font-semibold text-lg mb-2 text-gray-800'>{item.title}</h3>
                  <p className='text-gray-600 text-sm'>{item.desc}</p>
                </div>
              ))
            }
          </div>
        </section>

        {/* --- KEY FEATURES (Alternating Rows) --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className='text-3xl font-bold text-gray-800'>Project Features</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className='space-y-16'>
            {/* Feature 1 */}
            <div className='flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-lg border border-gray-200 shadow-sm'>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                  <BsBarChart className="text-blue-600" /> AI Evaluation
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  The system uses NLP to evaluate your answers in real-time. It checks for technical accuracy, tracks your communication skills, and gives constructive feedback on where you can improve.
                </p>
              </div>
              <div className='md:w-1/2 flex justify-center'>
                <img src={evalImg} alt="Evaluation" className='w-full max-w-sm object-contain' />
              </div>
            </div>

            {/* Feature 2 (Reversed) */}
            <div className='flex flex-col md:flex-row-reverse items-center gap-10 bg-white p-8 rounded-lg border border-gray-200 shadow-sm'>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                  <BsFileEarmarkText className="text-blue-600" /> Resume Analysis
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  Upload your resume before starting. The AI extracts your skills and projects to ask highly relevant and personalized questions, simulating a real-world HR or Tech round.
                </p>
              </div>
              <div className='md:w-1/2 flex justify-center'>
                <img src={resumeImg} alt="Resume" className='w-full max-w-sm object-contain' />
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className='flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-lg border border-gray-200 shadow-sm'>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                  <BsBarChart className="text-blue-600" /> Performance Dashboard
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  View your complete interview history in the dashboard. Download your results as a PDF report to share with mentors or keep track of your progress over time.
                </p>
              </div>
              <div className='md:w-1/2 flex gap-4 justify-center'>
                <img src={pdfImg} alt="PDF Report" className='w-1/2 max-w-[150px] object-contain' />
                <img src={analyticsImg} alt="Analytics" className='w-1/2 max-w-[150px] object-contain' />
              </div>
            </div>
          </div>
        </section>

        {/* --- PLATFORM USAGE GUIDE (Replaced Supported Modes) --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className='text-2xl font-bold text-gray-800'>How to Use This Platform</h2>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {
              [
                { 
                  step: "1", 
                  icon: <BsPlayCircle size={28} />, 
                  title: "Click Start", 
                  desc: "Hit the 'Start Interview' button from the home page." 
                },
                { 
                  step: "2", 
                  icon: <BsUpload size={28} />, 
                  title: "Upload Resume", 
                  desc: "Provide your job role, experience, and upload your PDF resume." 
                },
                { 
                  step: "3", 
                  icon: <BsMic size={28} />, 
                  title: "Answer via Mic", 
                  desc: "Turn on your mic, listen to the AI, and answer naturally." 
                },
                { 
                  step: "4", 
                  icon: <BsFileEarmarkPdf size={28} />, 
                  title: "Get Report", 
                  desc: "Check your scores, feedback, and download the PDF report." 
                }
              ].map((item, index) => (
                <div key={index} className="relative bg-white border border-gray-200 rounded-lg p-6 pt-10 flex flex-col items-center text-center hover:-translate-y-1 transition duration-200 shadow-sm mt-4">
                  
                  {/* Floating Step Number */}
                  <div className="absolute -top-5 bg-blue-100 text-blue-700 font-bold w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                    {item.step}
                  </div>
                  
                  <div className="text-blue-500 mb-3">
                    {item.icon}
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))
            }
          </div>
        </section>

      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Home