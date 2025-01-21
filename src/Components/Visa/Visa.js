import NavBar from '../NavBar/NavBar';
import './Visa.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Visa() {
  return (
    <div className='Visa'>
        <NavBar />
        <div className='main'>
            <div className='mainPage'>
                <h2>Understanding the F-1 Visa: Your Gateway to Studying in the U.S.</h2>
                <p>The F-1 visa is a non-immigrant visa that allows international students to study full-time at an accredited U.S. college or university, language training program, or other academic institutions. Whether you're pursuing an undergraduate or graduate degree, the F-1 visa is essential for foreign nationals seeking higher education in the U.S.</p>
            </div>
            <img src='https://img.edmissions.com/preset:sharp/rs:fill:741:400/gravity:sm/plain/local:///static/media/upload/blog/117._F1_Visa_Guide__US_Student_Visa_Requirements..png' />
        </div>

        <div className='applySteps'>
            <h2>How to Apply for the F-1 Visa: Step-by-Step Guide</h2>
            <p>The process of obtaining an F-1 visa involves several steps, from gaining admission to a U.S. school to attending your visa interview. Here’s an overview of the typical steps involved:</p>

            <div className='applyStep'>
                <h2><b>Step 1:</b> Get Accepted to a SEVP-Approved School</h2>
                <p>Before you can apply for an F-1 visa, you must be accepted to a Student and Exchange Visitor Program (SEVP)-approved school in the U.S. You will need a valid I-20 form from your school to begin your visa application.</p>
            </div>
            
            <div className='applyStep'>
                <h2><b>Step 2:</b> Pay the SEVIS Fee</h2>
                <p>Once you have your I-20, you’ll need to pay the SEVIS (Student and Exchange Visitor Information System) fee. This is a required fee for all F-1 visa applicants, which helps fund the SEVIS database that tracks international students in the U.S.</p>
                <ol>
                    <li><b>Link:</b> <a href="https://www.fmjfee.com/i901fee/index.html">Pay SEVIS Fee</a></li>
                </ol>
            </div>

            <div className='applyStep'>
                <h2><b>Step 3:</b> Complete the DS-160 Form</h2>
                <p>The next step is filling out the DS-160 form, which is the online application form for a non-immigrant visa. You’ll need to upload a recent passport-sized photo and provide detailed personal information.</p>
                <ol>
                    <li><b>Link:</b> <a href="https://ceac.state.gov/genniv/">Complete DS-160 Form</a></li>
                </ol>
            </div>
            
            <div className='applyStep'>
                <h2><b>Step 4:</b> Schedule Your Visa Interview</h2>
                <p>After completing the DS-160 form, you will need to schedule an appointment with the U.S. embassy or consulate in your country. Be sure to book your interview well in advance, as there may be waiting times.</p>
                <ol>
                    <li><b>Link:</b> <a href="https://www.ustraveldocs.com/np/np-niv-appointmentschedule.asp">Schedule</a></li>
                </ol>
            </div>

            <div className='applyStep'>
                <h2><b>Step 5:</b> Pay the Visa Application Fee</h2>
                <p>You’ll also need to pay a non-refundable visa application fee. This fee must be paid before your interview, and the amount can vary depending on your country of residence.</p>
            </div>
            
            <div className='applyStep'>
                <h2><b>Step 6:</b> Attend Your Visa Interview</h2>
                <p>Bring all required documentation (such as your I-20, passport, DS-160 confirmation, SEVIS fee receipt, visa application fee receipt, and any supporting documents) to the interview. The consular officer will ask questions about your study plans, financial situation, and ties to your home country.</p>
            </div>

            <div className='applyStep'>
                <h2><b>Step 7:</b> Receive Your F-1 Visa</h2>
                <p>If your visa is approved, your passport will be stamped with your F-1 visa, allowing you to travel to the U.S. to begin your studies. You will typically receive your visa within a few days to a few weeks, depending on the embassy’s processing time.</p>
            </div>
        </div>

        <div className='experiences'>
            <h2>Real Stories: F-1 Visa Experiences from Fellow Applicants</h2>
            <p>The F-1 visa process can seem daunting, but hearing from others who have successfully navigated it can offer valuable insights. Below are a few stories shared by international students who have gone through the process:</p>

            <div className='experience'>
                <img src="https://media.licdn.com/dms/image/v2/D5603AQEDwnQotRcBvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726624725389?e=2147483647&v=beta&t=YLIgMYSnsr1QsMH2ndroJ0u6mEiflBGQoLNSBSjinnI" />
                <div className='rightPart'>
                    <h2>The entire process was overwhelming at first, but I stayed organized and followed every step carefully. My interview was smooth, and I made sure to bring all necessary documents, including proof of funds and my I-20. The consular officer asked me about my plans after graduation, and I was able to demonstrate that I had strong ties to Brazil. I received my visa approval in just a few days.</h2>
                    <p>- Rista Subedi</p>
                </div>
            </div>

            <div className='experience'>
                <img src="https://media.licdn.com/dms/image/v2/D5603AQEDwnQotRcBvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726624725389?e=2147483647&v=beta&t=YLIgMYSnsr1QsMH2ndroJ0u6mEiflBGQoLNSBSjinnI" />
                <div className='rightPart'>
                    <h2>The entire process was overwhelming at first, but I stayed organized and followed every step carefully. My interview was smooth, and I made sure to bring all necessary documents, including proof of funds and my I-20. The consular officer asked me about my plans after graduation, and I was able to demonstrate that I had strong ties to Brazil. I received my visa approval in just a few days.</h2>
                    <p>- Rista Subedi</p>
                </div>
            </div>
        </div>

        <div className='footer'>
            <p>Copyright F1-Approved @</p>
        </div>
    </div>
  );
}

export default Visa;
