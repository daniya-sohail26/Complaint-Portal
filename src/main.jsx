import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import TypewriterEffectDemo from './components/homepage/homepage1.jsx'
import RegisterPage from './components/citizen/register_page.jsx';
import LoginPage from './components/citizen/login_page.jsx';
import Feature1 from './components/citizen/user_dashboard_feature_1.jsx';
import Feature2 from './components/citizen/user_dashboard_feature_2.jsx';
import Feature3 from './components/citizen/user_dashboard_feature_3.jsx';
import Feedback from './components/citizen/user_feedback.jsx';
import Update_Profile from './components/citizen/update_profile_page.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <Routes>
  <Route path='/' element={<TypewriterEffectDemo/>}/>
  <Route path='/Register' element={<RegisterPage/>}/>
  <Route path='/Login' element={<LoginPage/>}/>
  <Route path='/F1' element={<Feature1/>}/>
  <Route path='/F2' element={<Feature2/>}/>
  <Route path='/F3' element={<Feature3/>}/>
  <Route path='/Feedback' element={<Feedback/>}/>
  <Route path='/Update_Profile' element={<Update_Profile/>}/>
  </Routes>
</BrowserRouter>
  
)
