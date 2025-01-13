const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="title">
        <div className="container section">
          <div className="main-heading">
            <h2>Don&apos;t Know What To Start With?</h2>
            <p>Get A Solutions For All Construction Services</p>
          </div>
        </div>
      </div>
      <div className="container section">
        <div className="left">
          <div className="heading">
            <p>Offices</p>
            <h1>Our Office</h1>
          </div>
          <div className="manual-border"></div>
          <div className="time-table">
            <p>
              AlMadinah AlMunawarah Road - AL Ruwais District - Aletqan Square
              Floor10 - Office1001
            </p>
            <p>Jeddah - Kingdom of Saudi Arabia</p>
            <p>Office tel .:+966 12 6930030</p>
          </div>
        </div>
        <div className="right">
          <div className="main-heading">
            <h2>Free Consultaion</h2>
            <p>Get A Free Quote</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter your full name"
              aria-label="name"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              aria-label="phone number"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email"
              required
            />
            <input
              type="text"
              placeholder="Service Description"
              aria-label="service description"
              required
            />
            <textarea
              placeholder="Message"
              aria-label="name"
              required
            ></textarea>
            <button type="submit">GET A FREE QUOTE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
