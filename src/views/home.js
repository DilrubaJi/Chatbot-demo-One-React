import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'
import Chatbot from '../components/Chatbot/Chatbot'
import OpenAIChatbot from '../components/OpenAIChatbot'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chatbot demo One</title>
        <meta property="og:title" content="Chatbot demo One" />
      </Helmet>
      <main>

        <Chatbot></Chatbot>

        <div className="home-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer home-navbar-interactive"
          >
            <span className="logo">DIGITAL1</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span className="bodySmall">Home</span>
                <span className="home-nav22 bodySmall">Services</span>
                <span className="home-nav32 bodySmall">Portfolio</span>
                <span className="home-nav42 bodySmall">AI Chatbot</span>
                <span className="home-nav52 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons">
                <button className="home-login buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-mobile-menu1 mobileMenu"
            >
              <div className="home-nav">
                <div className="home-top">
                  <span className="logo">DIGITAL</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="home-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav121 bodySmall">Home</span>
                  <span className="home-nav221 bodySmall">Services</span>
                  <span className="home-nav321 bodySmall">Portfolio</span>
                  <span className="home-nav421 bodySmall">AI Chatbot</span>
                  <span className="home-nav521 bodySmall">Contact</span>
                </nav>
                <div className="home-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="heroContainer home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">
                Welcome to our website demonstration of a basic chatbot
                integration
              </h1>
              <span className="home-hero-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>Crafting Innovative Solutions for Your Business</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              <div className="home-btn-group">
                <button className="buttonFilled">Get Started</button>
                <button className="buttonFlat">Learn More →</button>
              </div>
            </div>
          </div>
        </div>

        {/* <OpenAIChatbot></OpenAIChatbot> */}

        <div className="home-features">
          <div className="featuresContainer">
            <div className="home-features1">
              <div className="home-container02">
                <span className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Our AI Chatbot Features
                </h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        Explore the key features that make our AI chatbots stand
                        out.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container03">
                <FeatureCard
                  heading="Custom AI Chatbot Development"
                  subHeading="Tailored AI chatbot solutions to meet your specific business needs."
                ></FeatureCard>
                <FeatureCard
                  heading="Seamless Integration"
                  subHeading="Effortless integration of the AI chatbot into your existing systems and platforms."
                ></FeatureCard>
                <FeatureCard
                  heading="Advanced Natural Language Processing"
                  subHeading="Utilizing cutting-edge NLP technology for more human-like interactions."
                ></FeatureCard>
                <FeatureCard
                  heading="24/7 Support &amp; Maintenance"
                  subHeading="Continuous support and maintenance to ensure optimal performance of the AI chatbot."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="pricingContainer">
            <div className="home-container04">
              <span className="overline">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="heading2">
                Choose the Right Plan for Your Business
              </h2>
              <span className="home-pricing-sub-heading bodyLarge">
                <span>
                  <span>
                    Unlock the potential of AI Chatbots with our flexible pricing
                    options
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container05">
              <div className="freePricingCard home-pricing-card">
                <div className="home-container06">
                  <span className="home-text36 heading3">Free</span>
                  <span className="bodySmall">
                    Get started with our basic features for free
                  </span>
                </div>
                <div className="home-container07">
                  <span className="home-text37">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">0</span>
                </div>
                <div className="home-container08">
                  <div className="home-container09">
                    <span className="home-text40">✔</span>
                    <span className="bodySmall">
                      Access to basic AI Chatbot functionality
                    </span>
                  </div>
                  <div className="home-container10">
                    <span className="home-text41">✔</span>
                    <span className="bodySmall">
                      Limited customization options
                    </span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text42">✔</span>
                    <span className="bodySmall">Email support</span>
                  </div>
                </div>
                <button className="home-button buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="basicPricingCard home-pricing-card1">
                <div className="home-container12">
                  <span className="home-text43 heading3">BASIC</span>
                  <span className="bodySmall">
                    Upgrade to unlock more advanced features
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text44">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">29</span>
                  <span className="home-text47">/ month</span>
                </div>
                <div className="home-container14">
                  <div className="home-container15">
                    <span className="home-text48">✔</span>
                    <span className="bodySmall">All features of FREE plan</span>
                  </div>
                  <div className="home-container16">
                    <span className="home-text50">✔</span>
                    <span className="bodySmall">
                      Advanced AI Chatbot capabilities
                    </span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text51">✔</span>
                    <span className="bodySmall">Customizable chatbot design</span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text52">✔</span>
                    <span className="bodySmall">Priority email support</span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text53">✔</span>
                    <span className="bodySmall">Basic analytics dashboard</span>
                  </div>
                </div>
                <button className="home-button1 buttonFilledSecondary">
                  Try the Basic plan
                </button>
              </div>
              <div className="proPricingCard home-pricing-card2">
                <div className="home-container20">
                  <span className="home-text54 heading3">
                    <span>PRO</span>
                    <br></br>
                  </span>
                  <span className="bodySmall">
                    Experience the full power of our AI Chatbot solution
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text57">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">59</span>
                  <span className="home-text60">/ month</span>
                </div>
                <div className="home-container22">
                  <div className="home-container23">
                    <span className="home-text61">✔</span>
                    <span className="bodySmall"> All features of BASIC plan</span>
                  </div>
                  <div className="home-container24">
                    <span className="home-text63">✔</span>
                    <span className="bodySmall">All Basic features included</span>
                  </div>
                  <div className="home-container25">
                    <span className="home-text64">✔</span>
                    <span className="bodySmall">
                      Advanced analytics and reporting tools
                    </span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text65">✔</span>
                    <span className="bodySmall">Dedicated account manager</span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text66">✔</span>
                    <span className="bodySmall">24/7 priority support</span>
                  </div>
                </div>
                <button className="home-button2 buttonFilledSecondary">
                  Try the PRO plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              Transforming Ideas into Reality
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    At our digital agency, we specialize in creating cutting-edge
                    apps, websites, digital products, and AI solutions tailored to
                    meet your unique needs. With a team of experts dedicated to
                    excellence, we bring your vision to life.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <button className="buttonFilled">Learn More</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="faqContainer">
            <div className="home-faq1">
              <div className="home-container28">
                <span className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text84 heading2">Common questions</h2>
                <span className="home-text85 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container29">
                <Question1
                  answer="We specialize in creating apps, websites, and AI solutions for our clients."
                  question="What kind of digital products do you create?"
                ></Question1>
                <Question1
                  answer="An AI Chatbot can enhance customer service, streamline processes, and provide personalized interactions with users."
                  question="How can an AI Chatbot benefit my business?"
                ></Question1>
                <Question1
                  answer="Yes, we provide ongoing maintenance and support services to ensure the smooth functioning of the digital products we create."
                  question="Do you offer maintenance services for the products you develop?"
                ></Question1>
                <Question1
                  answer="Yes, we can tailor the AI Chatbot to meet your unique business needs and branding guidelines."
                  question="Can you customize the AI Chatbot according to our specific requirements?"
                ></Question1>
                <Question1
                  answer="Simply reach out to us through our contact form, and we will schedule a consultation to discuss your project requirements."
                  question="How do I get started with developing a digital product with your agency?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container30">
            <span className="logo">DIGITAL</span>
            <nav className="home-nav1">
              <span className="bodySmall">Home</span>
              <span className="home-nav222 bodySmall">Services</span>
              <span className="home-nav322 bodySmall">Portfolio</span>
              <span className="home-nav422 bodySmall">AI Chatbot</span>
              <span className="home-nav522 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container31">
            <span className="bodySmall home-text88">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
