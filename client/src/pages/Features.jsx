import React from "react";
import "../styles/features.css";
import "../styles/features.css";
import search from "../gifs/search.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";
import loc from "../images/loc.png";
import emer from "../images/emergency.png"
import rep from "../images/reporting.png"
import mail from "../images/mail.png"
import chat from "../images/chat.png"
import lock from "../images/lock.webp"

const Features = () => {
  return (
    <div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">Feature-Packed Driving</p>
              <h2 className="features_title">Our automated features</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section my-1">
                <img src={mail} width={150} />
                <h3 className="mt-4">Emergency Mail Alert</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Your security is our priority, which is why we have integrated advanced mailing systems. 
                Your data is protected with cutting-edge encryption, ensuring safety and peace of mind. 
                Easily keep tabs on your loved ones with seamless tracking!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section my-2">
                <img src={emer} width={150} />
                <h3 className="mt-4">Emergency Service support</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Discover every aspect of safety with ease. Get instant email and mobile alerts when someone is in danger, 
                all with a single tap. Precise SOS notifications with real-time locations ensure help is just around the corner.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section my-3">
                <img src={rep} width={150} height={140} />
                <h3 className="mt-4">Report the Incident</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Building a safer community is essential, so we have introduced secure incident reporting. 
                Your personal information remains private with state-of-the-art encryption, protecting your 
                details while you help make a difference.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section my-1">
                <img src={loc} width={150} height={150} />
                <h3 className="mt-4">Live location </h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Using modern technology and widely available devices, we leverage live location tracking to safeguard victims from 
                potential threats, ensuring their safety and keeping them out of harm is way.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section my-2">
                <img src={chat} width={190} height={145} />
                <h3 className="mt-4">Emergency Chatting</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>                  
                  In emergencies, every second counts. Our operators, in collaboration with government officials, 
                  work swiftly to connect you with help and guide you out of difficult situations efficiently.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section my-3">
                <img src={lock} width={140} height={140} />
                <h3 className="mt-4">Mail services</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Stay informed effortlessly with our mailing services. Alerts are sent promptly when your loved ones or
                 close connections face danger, helping you stay prepared and take action when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
