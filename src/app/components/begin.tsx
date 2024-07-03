import "../assets/styles.scss";
import canva_small_new from "../assets/canva_small_new.svg";
import descript from "../assets/descript_small.svg";
import apollo from "../assets/apollo_small.svg";
import strava from "../assets/strava_smaller.svg";
import okx from "../assets/OKX_small.svg";
import atlassian from "../assets/atlassian_small.svg";
import arc from "../assets/Arc_small.svg";
import coda from "../assets/coda_small.svg";
import notion from "../assets/notion_small.svg";
import ironclad from "../assets/ironclad_small.svg";

import Slider from "./slider";
import DotLottiePlayer from "./dotlottie-player";

export default function Begin() {
  return (
    <>
      <div className="gradient-bg-home">
        <div className="grey-layer"></div>
        <div className="padding-global">
          <div className="hero-theme" style={{ margin: "3rem 0" }}>
            <h1 className="h1-center center is-h1">
              Transform customer feedback into{" "}
              <span className="text-gradient">product growth with AI</span>
            </h1>
            <div className="center top-margin-30 homepage-hero-subtext">
              All customer feedback unified automatically and categorized
              accurately to empower product orgs to prioritize and build what
              matters.
            </div>
            <div className="button-wrapper top-margin-30">
              <a className="button">
                <div className="button-text">Book a Demo</div>
              </a>
              <a className="button">
                <div className="button-text">Take Product Tour ▶</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div
            className="padding-for-logo-section section"
            style={{ borderTop: "1px solid var(--divider)" }}
          >
            <div className="logo-outer-wrapper">
              <div className="text-medium-16 centre">
                Trusted by customer-led product companies
              </div>
              <div className="logo-wrapper">
                <img src={canva_small_new.src} className="brand-logo" />
                <img src={descript.src} className="brand-logo" />
                <img src={apollo.src} className="brand-logo" />
                <img src={strava.src} className="brand-logo" />
                <img src={okx.src} className="brand-logo" />
                <img src={atlassian.src} className="brand-logo" />
                <img src={arc.src} className="brand-logo" />
                <img src={coda.src} className="brand-logo" />
                <img src={notion.src} className="brand-logo" />
                <img src={ironclad.src} className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global cta-block">
        <div className="container-large">
          <div className="padding-for-logo-section section">
            <div
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <DotLottiePlayer />
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <div className="center cta-card">
              <div className="cta-card-left"></div>
              <div className="cta-card-right">
                <div className="blue-text">The Enterpret Advantage</div>
                <div className="white-text-for-cta-card top-margin-10">
                  Enterpret automatically unifies your customer feedback across
                  all data types and builds adaptive AI models tailored to your
                  feedback architecture, delivering precise and granular
                  insights.{" "}
                </div>
                <a
                  href="/enterpret-in-action"
                  className="button-wrapper-learn-more is-blue top-margin-10 w-inline-block"
                >
                  <div className="get-started-text">Get Started</div>
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6505a300ef3d3e0c85905059_Group%201801758.webp"
                    loading="lazy"
                    alt=""
                    width="16"
                    className="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <h2 className="homepage-h2">
              Leading customer feedback intelligence for product development
              teams
            </h2>
            <div className="feature-wrapper top-margin-60">
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Centralize</div>
                  <div className="features-title top-margin-20">
                    Consolidate and organize customer feedback in hours not days
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret connected millions of feedback records
                          immediately. Connecting all sources of feedback made
                          it possible for us to see what users were asking for
                          and make it accessible to all our teams.”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/66794554c9175a374ea902ff_image%20(4).png"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Jesse Walker
                              <br />
                              Head of Insights and User Advocacy
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/658c0797f3efd1f4a4ce5fb5_canva_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-canva-leverages-enterpret-to-build-products-that-delight-over-170-million-users"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Canva customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min.webp"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8aa70c2e1c507e33463_taxonomy-min.webp 733w"
                      className="big-images-on-homepage img"
                      width="651"
                    />
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Discover</div>
                  <div className="features-title top-margin-20">
                    Surface the insights that matter
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret helps us have a holistic view. We can
                          actually understand: “What are the broader sentiments?
                          What are our users saying?”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/667942afe68099a0dcd15ab2_emma.jpeg"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Emma Auscher,
                              <br />
                              Global VP of Customer Experience
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/658c094aa7939e4251762e79_notion_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-notion-is-supercharging-its-product-feedback-loop-using-enterpret"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Notion customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right flip">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min.png"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8b39902136d71fcd57e_anom-min.png 685w"
                      className="big-images-on-homepage img"
                      width="655.5"
                    />
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-left">
                  <div className="blue-text">Act</div>
                  <div className="features-title top-margin-20">
                    Confidently drive product strategy with actionable insights
                  </div>
                  <div className="feature-left-bottom-wrapper top-margin-20">
                    <section className="section-tag">
                      <div className="div-block-9">
                        <div className="text-block">
                          “Enterpret helps us focus on the 20% that causes the
                          impact. It is like finding the needle in a haystack,
                          especially when you have issues coming from all over
                          the place.”
                        </div>
                        <div className="div-block-11">
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/667942af178f5d06ff0cf181_abhishek.jpeg"
                              width={70}
                              className="image-4"
                            />
                          </div>
                          <div className="div-block-12">
                            <div className="text-block-8">
                              Abishek Viswanthan,
                              <br />
                              Chief Product Officer
                            </div>
                            <div>
                              <img
                                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/664f450d9f9311db47898ab7_apollo_small.svg"
                                className="img-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <a
                    href="https://www.enterpret.com/blog/how-apollo-uses-voice-of-customer-to-turn-customer-feedback-into-revenue"
                    className="button top-margin-40 w-inline-block"
                  >
                    <div className="button-text">
                      Read the Apollo customer story
                    </div>
                  </a>
                </div>
                <div className="feature-right">
                  <div className="big-images-on-homepage">
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min.webp"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 84vw, 53vw"
                      alt=""
                      srcSet="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min-p-500.webp 500w, https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651bf8ba5416c9d4b6e8e98b_growth-min.webp 681w"
                      className="big-images-on-homepage img"
                      width="637.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <h2 className="homepage-h2">
              Listen, learn, and act on customer feedback
            </h2>
            <div className="features-3c-wrapper top-margin-60-2">
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65059bbc8da9ae0eec69f74d_Layer_1%20(7).webp"
                    className="features-2-icon"
                    width={50}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      Source of truth
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      Unify all feedback from all sources in a matter of few
                      minutes to get the most comprehensive voice of your
                      customer.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65059bbc80671c09d554569d_Layer_1%20(8).webp"
                    className="features-2-icon"
                    width={50}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      Custom Unified Feedback Taxonomy
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      Give structure to unstructured customer feedback -
                      customized just for you. Taxonomy adapts to changes in
                      feedback over time.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65059bbdf53261fa63238432_Vector%20(31).webp"
                    className="features-2-icon"
                    width={40}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      Powerful semantic search
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      Uncomplicated Google-like search across all of your
                      feedback. Search for what the user meant, not just how the
                      user said it.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65059bbcbf101fe68545183f_Layer_1%20(9).webp"
                    className="features-2-icon"
                    width={50}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      User-friendly analytics suite
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      Built for powerful insights but easy for non-technical
                      operators with pleasant UI, easy to build dashboards, and
                      automated summaries of relevant data.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651b4b5bce751ea0ca3e4544_Enterpret_Profile%20Love.svg"
                    className="features-2-icon"
                    width={50}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      Partners
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      From implementation and onwards, get dedicated data
                      auditors for weekly model refreshes, plus a dedicated CSM
                      partner
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gradient-for-features" />
                <div className="features-2-card-main">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65059bbd4ef962529210183b_Layer_1%20(11).webp"
                    className="features-2-icon"
                    width={50}
                  />
                  <div className="justify-content-center">
                    <div className="features-2-card-title top-margin-20">
                      Unlimited user seats
                    </div>
                    <div className="text-medium-16-2 top-margin-10">
                      Bring your entire team into Enterpret without prohibitive
                      costs and foster a culture of customer-centric strategy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <div className="feature">
              <div className="feature-left">
                <div className="blue-text">INTEGRATIONS</div>
                <div className="features-title top-margin-20">
                  Unified view of your customers
                </div>
                <div className="features-left-bottom-wrapper">
                  <div className="features-left-bottom-text top-margin-20">
                    Enterpret will integrate directly with any feedback channel.
                    Take advantage of our CSV importer or API
                  </div>
                </div>
                <a
                  href="https://www.enterpret.com/integrations"
                  className="button top-margin-40 w-inline-block"
                >
                  <div className="button-text">View all Integrations</div>
                </a>
              </div>
              <div className="feature-right">
                <div className="big-images-on-homepage">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651b4a382ae560bd8fd8eab2_Group%2037782.webp"
                    className="big-images-on-homepage width-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large section">
          <div className="extra-padding">
            <div className="feature">
              <div className="feature-left">
                <div className="blue-text">SECURITY</div>
                <div className="features-title top-margin-20">
                  Built for scale and enterprise level security
                </div>
                <div className="feature-left-bottom-wrapper">
                  <div className="feature-left-bottom-text top-margin-20">
                    SOC-2 Type II certification, penetration tested, and regular
                    vulnerability scans. Hosted behind a VPC. Data encryption at
                    rest and transit.
                  </div>
                </div>
                <a
                  href="https://www.enterpret.com/security"
                  className="button top-margin-40 w-inline-block"
                >
                  <div className="button-text">Learn More</div>
                </a>
              </div>
              <div className="feature-right flip">
                <div className="big-images-on-homepage">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/651c8916a3a77ae004635b2c_Group%201801708.webp"
                    loading="lazy"
                    width="410.5"
                    alt=""
                    className="big-images-on-homepage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div className="padding-global">
        <div className="container-large section">
          <div className="relative">
            <div className="extra-padding">
              <div className="bottom-banner-on-homepage">
                <div className="banner-title text-center">
                  Struggling to scale customer insights?
                </div>
                <div className="banner-subtext center top-margin-16-2">
                  Join customer-centric companies and start driving revenue and
                  reduce churn with Enterpret.
                </div>
                <a
                  href="https://www.enterpret.com/enterpret-in-action"
                  className="black-cta-banner top-margin-30 w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6506d8aa91feec8652da7e1f_Group%201801646.webp"
                    className="img"
                    width={36.5}
                  />
                  <div className="black-button-text">
                    Get a demo with your data
                  </div>
                </a>
                <div className="banner-image-absolute-one">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6509ed92c684d5f4210dbe47_Mask%20group%20(14).webp"
                    className="img"
                    width={196}
                  />
                </div>
                <div className="banner-image-absolute-second">
                  <img
                    src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6509ed92ac966ebcf5de4dea_Mask%20group%20(13).webp"
                    loading="lazy"
                    width={196}
                  />
                </div>
              </div>
            </div>
            <div className="footer-gradient" />
          </div>
        </div>
      </div>
      <div className="section_footer top-border">
        <div className="padding-global">
          <div className="container-large">
            <div className="extra-padding">
              <div className="footer-wrapper">
                <div className="footer-wrapper-left">
                  <a
                    href="https://www.enterpret.com/old-home"
                    className="w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6504838be48715c9bfc65cf5_image%2033%20(1).webp"
                      loading="lazy"
                      height={36}
                      width={206}
                    />
                  </a>
                  <div className="homepage-hero-subtext is-footer top-margin-20">
                    Customer Feedback Analytics
                    <br />
                    like it is supposed to be!
                  </div>
                  <div className="social-icons-wrapper top-margin-36">
                    <a
                      href="https://www.linkedin.com/company/enterpret/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/650483745108b54093267fe3_image%2031.webp"
                        loading="lazy"
                        width="32"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://twitter.com/enterpret_ai"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65048375061c4f771cf0a744_image%2032.webp"
                        loading="lazy"
                        width="32"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@enterpret"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65dc290922b6ba3faede460d_youtube-svgrepo-com.svg"
                        loading="lazy"
                        width="32"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.g2.com/products/enterpret-inc-enterpret/reviews#reviews"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/65dc2c297eb940ee37a02317_G2_grey.svg"
                        loading="lazy"
                        width="32"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-medium-16 is-footer-text top-margin-20">
                    Copyright © Enterpret Inc. 2024 All Rights Reserved
                  </div>
                </div>
                <div className="footer-wrapper-right">
                  <div className="footer_wrapper-right-column">
                    <div className="footer-items-title">Company</div>
                    <a
                      href="https://www.enterpret.com/old-home"
                      className="footer-items"
                    >
                      Home
                    </a>
                    <a
                      href="https://www.enterpret.com/about-us"
                      className="footer-items"
                    >
                      About Us
                    </a>
                    <a
                      href="https://boards.greenhouse.io/enterpret/"
                      className="footer-items"
                    >
                      Careers
                    </a>
                    <a
                      href="https://techcrunch.com/2022/03/02/enterpret-launches-with-4-4m-nlp-technology-to-decipher-customer-feedback/"
                      target="_blank"
                      className="footer-items"
                    >
                      Press
                    </a>
                  </div>

                  <div className="footer_wrapper-right-column">
                    <div className="footer-items-title">Products</div>
                    <a
                      href="https://www.enterpret.com/changelog"
                      className="footer-items"
                    >
                      Changelog
                    </a>
                    <a
                      href="https://www.enterpret.com/about-us"
                      className="footer-items"
                    >
                      About Us
                    </a>
                    <a
                      href="https://boards.greenhouse.io/enterpret/"
                      className="footer-items"
                    >
                      Careers
                    </a>
                    <a
                      href="https://techcrunch.com/2022/03/02/enterpret-launches-with-4-4m-nlp-technology-to-decipher-customer-feedback/"
                      target="_blank"
                      className="footer-items"
                    >
                      Press
                    </a>
                  </div>

                  <div className="footer_wrapper-right-column">
                    <div className="footer-items-title">Company</div>
                    <a
                      href="https://www.enterpret.com/privacy-and-policy"
                      className="footer-items"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="https://www.enterpret.com/security"
                      className="footer-items"
                    >
                      Security
                    </a>
                    <a
                      href="https://www.enterpret.com/privacy-commitment"
                      className="footer-items"
                    >
                      Commitment to Privacy
                    </a>
                    <a
                      href="https://www.enterpret.com/contact-us"
                      className="footer-items"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
