import './App.css'; // Importing CSS file

// Functional component App
function App() {
  return (
    <div>
      {/* Main container */}
      <div className="main-container">
        
        {/* Mobishaala text content */}
        <div className="mobishaala-text-content">
          <h1 className="main-heading">Mobishaala</h1>
          <p className="paragraph">
            Create your <span className="styled-text">Digital Classroom</span> in 5 mins for{' '}
            <span className="styled-text">FREE</span> & connect to 1+ Million Students
          </p>
          <ul className="unordered-list-text">
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class, tests, notes, ebooks and more.</li>
            <li>Reach out to millions of students anywhere, anytime.</li>
          </ul>
          
          {/* Mobile devices video content */}
          <div className="mobile-devices-mobishaala-video-content">
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jg5d59ligW4?si=PAlyN-U6P7VLbUcu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <button className="button-element">Buy</button>
          </div>
          
          {/* Institute/Teacher section */}
          <p className="sub-paragraph">Institute/Teacher</p>
          <button className="button-element">Get Started</button>
          
          {/* Student section */}
          <p className='sub-paragraph'>Student</p>
          <button className="button-element">Download App</button>
          
          {/* Talk to Us button */}
          <button className="talk-to-us-container">
            <img
              src="https://res.cloudinary.com/dvwnbhpcy/image/upload/v1710430421/WhatsApp-logo_hkry3q.png"
              className="whatsapp-symbol"
              alt="whatsapp"
            />
            Talk to Us
          </button>
        </div>
        
        {/* Mobishaala video content */}
        <div className="mobishaala-video-content">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jg5d59ligW4?si=PAlyN-U6P7VLbUcu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <button className="button-element">Buy</button>
        </div>
        
      </div>

      {/* Mobishaala additional information */}
      <div className="mobishaala-additional-information">
        <h1 className="mobile-device-main-heading">Mobishaala</h1>
        <p className="objectives">Vision</p>
        <p className="paragraph-text">Empower Institutions & Teachers with state of the art digital classroom Technology.</p>
        <h1 className="sub-headings">Address</h1>
        <p className="paragraph-text">
          <span className="objectives">Registered Office:</span>804,5th Cross, 9th main, 4th Block Koramangala, Bangalore, Karnataka 560034
        </p>
        <p className='paragraph-text'>
          <span className='objectives'>Corporate Office:</span>293, Westend Marg, near Saket, Saidulajab,Saket,New Delhi, 110030
        </p>
        <h1 className='sub-headings'>Quick Links</h1>
        <p className='paragraph-text'>Blog</p>
        <p className='paragraph-text'>Android App</p>
        <p className='paragraph-text'>IOS App</p>
      </div>
    </div>
  );
}

export default App;
