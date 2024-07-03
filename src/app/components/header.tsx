"use client";

import logo from "../assets/6503172bbd2faa32137e335c_Frame (1).webp";
import arrow_right from "../assets/arrow_right.webp";
import menu from "../assets/menu-menu.svg";
import canva from "../assets/Canva.webp";
import notion from "../assets/notion.webp";
import figma from "../assets/figma.svg";
import apollo from "../assets/apollo1.svg";
import feeld from "../assets/feeld.svg";
import bollandbranch from "../assets/bollandbranch.svg";
import blog from "../assets/blog.svg";
import templates from "../assets/templates.webp";
import aboutus from "../assets/aboutus.webp";
import press from "../assets/press.webp";
import product from "../assets/product.webp";
import voiceofcustomer from "../assets/voiceofcustomer.webp";
import customerexperience from "../assets/customer.webp";
import leadership from "../assets/leadership.webp";
import cancel from "../assets/cancel-30.svg";

import unified from "../assets/unified.webp";
import custom from "../assets/custom.webp";
import insight from "../assets/insight.webp";
import close from "../assets/close.webp";
import integration from "../assets/integration.webp";
import wisdom from "../assets/wisdom.webp";
import validate from "../assets/validate.webp";
import synced from "../assets/synced.webp";

import "../assets/styles.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(0);

  return (
    <header className="nav-component">
      <div className="relative">
        <div className="padding-global">
          <div
            className="container"
            style={isMenuActive ? {} : { position: "relative" }}
          >
            <a
              href="https://www.enterpret.com/?ref=landingfolio"
              className="nav_brand-logo-link"
              style={isMenuActive ? { zIndex: "1" } : {}}
            >
              <img src={logo.src} className="logo" loading="lazy" />
            </a>
            <nav
              className={
                isMenuActive ? "active-menu-container" : "nav-container"
              }
            >
              <div
                className="nav-dropdown"
                onClick={() =>
                  setIsDropdownActive(isDropdownActive === 1 ? 0 : 1)
                }
              >
                <div className="dropdown-container">
                  <div>Product</div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78033 1.53033C10.0732 1.23744 10.0732 0.762558 9.78033 0.469667C9.48744 0.176777 9.01256 0.176777 8.71967 0.469667L9.78033 1.53033ZM5 5.25L4.46967 5.7803C4.76256 6.0732 5.23744 6.0732 5.53033 5.7803L5 5.25ZM1.2803 0.469667C0.987403 0.176777 0.512603 0.176777 0.219703 0.469667C-0.0731974 0.762557 -0.0731974 1.23744 0.219703 1.53033L1.2803 0.469667ZM8.71967 0.469667L4.46967 4.7197L5.53033 5.7803L9.78033 1.53033L8.71967 0.469667ZM5.53033 4.7197L1.2803 0.469667L0.219703 1.53033L4.46967 5.7803L5.53033 4.7197Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div
                    className="dropdown-pointer"
                    style={{ top: "62px", left: "32px" }}
                  />
                </div>
                <nav
                  className="nav-dropbox-list"
                  style={isDropdownActive === 1 ? { display: "block" } : {}}
                >
                  <div className="right-dropbox-list" style={{ zIndex: "100" }}>
                    <div className="nav-dropbox-list-left">
                      <div
                        className="nav-link font-weight-700"
                        style={{ marginBottom: "24px" }}
                      >
                        Capabilities
                      </div>
                      <div className="dropdown-flex">
                        <a
                          href="https://www.enterpret.com/product/unified-feedback-repository"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={unified.src} width={35} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Unified Feedback Repository
                            </div>
                            <div className="dropdown-item-text">
                              Eliminate data silos to get a unified source of
                              truth
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/integrations"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={integration.src} width={22} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Integrations
                            </div>
                            <div className="dropdown-item-text">
                              Connect to any app containing customer feedback
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/custom-taxonomy"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={custom.src} width={35} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Custom Taxonomy
                            </div>
                            <div className="dropdown-item-text">
                              Adaptive models for deeper insights
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/wisdom-co-pilot"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={wisdom.src} width={20} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Wisdom <span className="beta">BETA</span>
                            </div>
                            <div className="dropdown-item-text">
                              The copilot for instant customer insights
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/insights"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={insight.src} width={23} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Insights
                            </div>
                            <div className="dropdown-item-text">
                              Get credible and and actionable insights quickly
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/inspire-validate"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={validate.src} width={22} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Validate and inspire{" "}
                              <span className="beta">BETA</span>
                            </div>
                            <div className="dropdown-item-text">
                              Get insights to help inspire and validate your
                              roadmap
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/close-the-loop"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={close.src} width={35} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Close the Loop
                            </div>
                            <div className="dropdown-item-text">
                              Take action to drive product outcomes
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/product/synced-users-and-accounts"
                          className="dropbox-link-element-first width-for-wrapping"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={synced.src} width={22} />
                          </div>
                          <div>
                            <div className="nav-link font-weight-700">
                              Synced Users and Accounts
                            </div>
                            <div className="dropdown-item-text">
                              Connect feedback to revenue
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="nav-dropbox-list-right">
                      <div
                        className="nav-link font-weight-700"
                        style={{ marginBottom: "24px" }}
                      >
                        Solution
                      </div>
                      <div className="row-gap-8">
                        <a
                          href="https://www.enterpret.com/solutions/product"
                          className="dropbox-link-element-first"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={product.src} width={35} />
                          </div>

                          <div className="nav-link font-weight-700">
                            Product
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/solutions/voice-of-customer"
                          className="dropbox-link-element-first"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={voiceofcustomer.src} width={33} />
                          </div>

                          <div className="nav-link font-weight-700">
                            Voice of Customer
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/solutions/customer-experience"
                          className="dropbox-link-element-first"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={customerexperience.src} width={30} />
                          </div>

                          <div className="nav-link font-weight-700">
                            Customer Experience
                          </div>
                        </a>
                        <a
                          href="https://www.enterpret.com/solutions/leadership"
                          className="dropbox-link-element-first"
                        >
                          <div className="dropdown-link-item-left-first">
                            <img src={leadership.src} width={21} />
                          </div>

                          <div className="nav-link font-weight-700">
                            Leadership
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div
                className="nav-dropdown"
                onClick={() =>
                  setIsDropdownActive(isDropdownActive === 2 ? 0 : 2)
                }
              >
                <div className="dropdown-container">
                  <div>Customers</div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78033 1.53033C10.0732 1.23744 10.0732 0.762558 9.78033 0.469667C9.48744 0.176777 9.01256 0.176777 8.71967 0.469667L9.78033 1.53033ZM5 5.25L4.46967 5.7803C4.76256 6.0732 5.23744 6.0732 5.53033 5.7803L5 5.25ZM1.2803 0.469667C0.987403 0.176777 0.512603 0.176777 0.219703 0.469667C-0.0731974 0.762557 -0.0731974 1.23744 0.219703 1.53033L1.2803 0.469667ZM8.71967 0.469667L4.46967 4.7197L5.53033 5.7803L9.78033 1.53033L8.71967 0.469667ZM5.53033 4.7197L1.2803 0.469667L0.219703 1.53033L4.46967 5.7803L5.53033 4.7197Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div
                    className="dropdown-pointer"
                    style={{ top: "62px", left: "32px" }}
                  />
                </div>
                <nav
                  className="nav-dropbox-list"
                  style={isDropdownActive === 2 ? { display: "block" } : {}}
                >
                  <div className="dropbox-list" style={{ zIndex: "100" }}>
                    <a
                      href="https://www.enterpret.com/blog/how-canva-leverages-enterpret-to-build-products-that-delight-over-170-million-users"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={canva.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Canva</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-notion-is-supercharging-its-product-feedback-loop-using-enterpret"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={notion.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Notion</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-apollo-uses-voice-of-customer-to-turn-customer-feedback-into-revenue"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={apollo.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Apollo</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-figma-leverages-ai-to-scale-its-product-feedback-loops"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={figma.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Figma</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-feeld-uses-enterpret-to-actively-listen-to-community-feedback-during-a-product-launch"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={feeld.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Feeld</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-boll-and-branch-uses-enterpret-to-transform-feedback-into-customer-loyalty-and-revenue"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img
                            src={bollandbranch.src}
                            width={20}
                            height={"auto"}
                          />
                        </div>
                        <div>
                          <div
                            className="nav-link font-weight-700"
                            style={{ textDecorationColor: "white" }}
                          >
                            Boll & Branch
                          </div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>
                  </div>
                </nav>
              </div>
              <div
                className="nav-dropdown"
                onClick={() =>
                  setIsDropdownActive(isDropdownActive === 3 ? 0 : 3)
                }
              >
                <div className="dropdown-container">
                  <div>Insights</div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78033 1.53033C10.0732 1.23744 10.0732 0.762558 9.78033 0.469667C9.48744 0.176777 9.01256 0.176777 8.71967 0.469667L9.78033 1.53033ZM5 5.25L4.46967 5.7803C4.76256 6.0732 5.23744 6.0732 5.53033 5.7803L5 5.25ZM1.2803 0.469667C0.987403 0.176777 0.512603 0.176777 0.219703 0.469667C-0.0731974 0.762557 -0.0731974 1.23744 0.219703 1.53033L1.2803 0.469667ZM8.71967 0.469667L4.46967 4.7197L5.53033 5.7803L9.78033 1.53033L8.71967 0.469667ZM5.53033 4.7197L1.2803 0.469667L0.219703 1.53033L4.46967 5.7803L5.53033 4.7197Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div
                    className="dropdown-pointer"
                    style={{ top: "62px", left: "32px" }}
                  />
                </div>
                <nav
                  className="nav-dropbox-list"
                  style={isDropdownActive === 3 ? { display: "block" } : {}}
                >
                  <div className="dropbox-list" style={{ zIndex: "100" }}>
                    <a
                      href="https://www.enterpret.com/blog/how-canva-leverages-enterpret-to-build-products-that-delight-over-170-million-users"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={blog.src} width={30} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Blog</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-notion-is-supercharging-its-product-feedback-loop-using-enterpret"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={templates.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">
                            Templates
                          </div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-apollo-uses-voice-of-customer-to-turn-customer-feedback-into-revenue"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={aboutus.src} width={20} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">
                            About us
                          </div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>

                    <a
                      href="https://www.enterpret.com/blog/how-figma-leverages-ai-to-scale-its-product-feedback-loops"
                      className="dropbox-link-element"
                    >
                      <div className="left-item-container">
                        <div className="dropdown-link-item-left-secondary">
                          <img src={press.src} width={25} height={"auto"} />
                        </div>
                        <div>
                          <div className="nav-link font-weight-700">Press</div>
                        </div>
                      </div>
                      <img src={arrow_right.src} height={12} width={"auto"} />
                    </a>
                  </div>
                </nav>
              </div>
              <a
                href="https://www.enterpret.com/pricing"
                className={
                  isMenuActive ? "dropdown-link-container" : "nav-link"
                }
              >
                Pricing
              </a>
              <a
                href="https://www.enterpret.com/changelog"
                className={
                  isMenuActive ? "dropdown-link-container" : "nav-link"
                }
              >
                Changelog
              </a>
            </nav>
            <div className="nav-right-wrapper">
              <a
                href="https://dashboard.enterpret.com/login"
                className="nav-link sign-in"
              >
                Sign In
              </a>
              {!isMenuActive && (
                <a
                  href="https://www.enterpret.com/enterpret-in-action"
                  className="button"
                >
                  <div className="button-text">Book a Demo</div>
                </a>
              )}

              <div
                className="burger-menu"
                onClick={() => setIsMenuActive(!isMenuActive)}
              >
                <img
                  src={cancel.src}
                  width={50}
                  height={50}
                  className={isMenuActive ? "show" : "hide"}
                  style={{ position: "absolute" }}
                />
                <img
                  src={menu.src}
                  width={50}
                  height={50}
                  className={isMenuActive ? "hide" : "show"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
