import './TestPrep.css';
import NavBar from '../NavBar/NavBar';

function TestPrep() {
  return (
    <div className="TestPrep">
        <NavBar />
        <div className='main'>
            <div className='mainPage'>
                <h2>Welcome to Your Ultimate Test Prep Hub!</h2>
                <p>Are you ready to take your SAT, TOEFL, or IELTS exams? At [Your Company Name], we provide expert guidance, top-notch resources, and a comprehensive study plan to help you achieve your best score. Whether you're preparing for college entrance exams or English proficiency tests, we have everything you need to succeed!</p>
            </div>
            <img src="https://9clouds.com/wp-content/uploads/2023/02/istockphoto-1371547852-612x612-1.jpg" />
        </div>

        <div className='testTypes'>
            <h2>Understand the Test: SAT, TOEFL, and IELTS</h2>
            <p>Every exam has its unique format and requirements. Here’s a quick overview of the tests we offer preparation for:</p>
            <div className='testType'>
                <h2>1. SAT – The Pathway to College</h2>
                <p>The SAT is a widely recognized college entrance exam in the United States. It measures your skills in reading, writing, and math and plays a critical role in your college application.</p>
                <ul>
                    <li><b>Format:</b> Reading, Writing, and Math (Optional Essay)</li>
                    <li><b>Score Range:</b> 400 - 1600</li>
                    <li><b>When to Take It:</b> Ideal for students planning to study in English-speaking countries.</li>
                </ul>
            </div>

            <div className='testType'>
                <h2>2. TOEFL – Proving Your English Skills</h2>
                <p>The Test of English as a Foreign Language (TOEFL) is designed for students whose first language is not English. It’s widely accepted for admissions to colleges and universities worldwide.</p>
                <ul>
                    <li><b>Format:</b> Reading, Listening, Speaking, and Writing</li>
                    <li><b>Score Range:</b> 0 - 120</li>
                    <li><b>When to Take It:</b> Ideal for students planning to study in English-speaking countries.</li>
                </ul>
            </div>

            <div className='testType'>
                <h2>3. IELTS – Your Global English Test</h2>
                <p>The International English Language Testing System (IELTS) is another widely recognized English proficiency test. It’s used by students and professionals looking to study or work in English-speaking environments.</p>
                <ul>
                    <li><b>Format:</b> Reading, Listening, Speaking, and Writing</li>
                    <li><b>Score Range:</b> 0 - 9</li>
                    <li><b>When to Take It:</b> Ideal for students planning to study in English-speaking countries.</li>
                </ul>
            </div>
        </div>

        <div className='footer'>
            <p>Copyright F1-Approved @</p>
        </div>
    </div>
  );
}

export default TestPrep;
