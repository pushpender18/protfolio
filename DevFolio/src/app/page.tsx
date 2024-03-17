
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/me.jpg"
              alt="PUSHPENDER Profile"
              className="shadow-dark"
            />
            <h1>PUSHPENDER</h1>
            <p>WEB-DEVELOPER</p>
            <div className="social-links">
             { /*<a href="https://twitter.com/" target="_blank"> 
                <i className="fa fa-twitter" /> 
              </a> */} 
              <a href="https://www.facebook.com/share/uH7cD1rZ9q8efxN5/?mibextid=qi2Omg" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/sidrawat18" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/18siddi?utm_source=qr&igsh=MTFiNzFmOHlmbTRwaw==" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/pushpender-rawat-88ba52291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
