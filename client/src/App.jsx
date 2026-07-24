import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { setUserData } from "./redux/userSlice";
import InterviewPage from "./Pages/InterviewPage";
import InterviewHistory from "./Pages/interviewHistory";
import InterviewReport from "./Pages/InterviewReport";
import Pricing from "./Pages/Pricing";

export const ServerUrl = "https://interviewiq-ijwv.onrender.com";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/user/current-user",
          {
            withCredentials: true,
          }
        );

        dispatch(setUserData(result.data));
        console.log(result.data);
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };

    getUser();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/history" element={<InterviewHistory/>}/>
        
        <Route path="pricing" element={<Pricing/>}/>
        <Route path='/report/:id' element={<InterviewReport/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
