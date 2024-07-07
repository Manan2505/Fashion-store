
export default function Footer(){

  const showAlert = () =>{
    alert('thanks for Subscribing !');
  };
  
    return (
        <footer id="contact">
            <div className="leftFooter">
              <img src={require("../assets/Logo.png")} loading="eager" />
              <div>
              <strong>Introducing The Fashion Store:</strong> 
              <br></br> 
              <tt>Your Go-To Fashion Destination! Explore our trendy collection curated just for you. From head-turning outfits to statement accessories, discover your style effortlessly. Shop now and let your fashion story begin!</tt>
              </div>
            </div>
            <div className="rightFooter">
              <img src={require("../assets/line.png")} loading="eager" className="footline1" />
              <div className="rf1">
                <h2>Sign up for newsletter !</h2>
                <input type="email" name="email" id="email" placeholder="hello@psdfreebies.com" required/>
                <input type="submit" defaultValue="Submit" id="submit" onClick={showAlert} />
              </div>
              <div className="rf2">
                <div className="rf2_1">
                  <h3>information</h3>
                  <ul>
                    <li>
                      <details>
                        <summary>Carrers</summary>
                        <p>At The Fashion Store, collaborate with our talented team of fashion experts, designers, and developers. We craft premium content and trendy designs, ensuring your shopping experience is top-notch. Join us and explore fashion like never before!</p>
                      </details>
                    </li>

                    <li>
                      <details >
                        <summary>Investor Relations</summary>
                        <p>Explore The Fashion Store's Investor Relations for key financial highlights, stock information, and corporate governance details. Join us in shaping the future of fashion.</p>
                      </details>
                    </li>

                    <li>
                      <details >
                        <summary>Press Releases</summary>
                        <p>Stay updated with The Fashion Store's latest buzz. Read our press releases for exciting product launches, collaborations, and fashion news. Dive into the world of style!</p>
                      </details>
                    </li>
  
                    <li>
                      <details >
                        <summary>Shop with Points</summary>
                        <p>Shopping at The Fashion Store just got more rewarding! Now you can shop with points and enjoy exclusive discounts on your favorite fashion items. Start earning while you shop!</p>
                      </details>
                    </li>

                  </ul>
                </div>
                <div className="rf2_1">
                  <h3>Customer care</h3>
                  <ul>
                    <li>
                      <details >
                        <summary>Returns</summary>
                        <p><u>Our Hassle-Free Returns Policy:</u> Not satisfied with your purchase? No worries! Return your items within 7 days for a full refund or exchange. Your satisfaction is our priority at The Fashion Store.</p>
                      </details>
                    </li>
                    <li>
                      <details >
                        <summary>Shipping Info</summary>
                        <p><u>Swift and Secure Shipping:</u> Experience seamless deliveries with The Fashion Store. We offer fast shipping, reliable tracking, and safe packaging to ensure your fashion finds reach you in perfect condition. Shop now and let the fashion come to you!</p>
                      </details>
                    </li>
                    <li>
                      <details >
                        <summary>Gift Cards</summary>
                        <p><u>The Perfect Gift, Anytime:</u> Surprise your loved ones with The Fashion Store Gift Cards! Let them choose their favorite fashion pieces from our trendy collection. It's the gift of style and endless choices!</p>
                      </details>
                    </li>
                    <li>
                      <details >
                        <summary>Size Guide</summary>
                        <p><u>Find Your Perfect Fit:</u> Confused about sizes? Our Size Guide at The Fashion Store provides detailed measurements to help you pick the right fit. Enjoy stylish outfits tailored just for you!</p>
                      </details>
                    </li>
                  </ul>
                </div>
                <div className="rf2_2">
                  <h3>Store information</h3>
                  <ul>
                    <li><a href="https://maps.app.goo.gl/q3YMy4rZWoQGSD5J8" target="_blank">
                      <i className="fa-solid fa-location-dot fa-xl fa-bounce" />&nbsp; &nbsp;
                      Address: Chitkara University, Punjab.
                      </a>
                    </li>
                    <li><a href="mailto:manan0834.be21@chitkara.edu.in">
                      <i className="fa-solid fa-envelope fa-xl fa-beat-fade" />&nbsp;&nbsp;
                      Email: manan0834.be21@chitkara.edu.in
                      </a></li>
                    <li> <a href="tel:+915241914">
                        <i className="fa-solid fa-phone fa-xl fa-shake" />&nbsp;&nbsp;
                          Phone: +91 5241914.
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={require("../assets/line.png")} loading="eager" className="footline2" />
          </footer>
    );
}