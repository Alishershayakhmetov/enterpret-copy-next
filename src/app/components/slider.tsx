"use client";
import React, { useRef, useEffect, useState } from "react";

interface SlideProps {
  companyURL: string;
  text: string;
  profileURL: string;
  surname: string;
  position: string;
}

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const handleSlideIndex = (index: number) => {
    if (index >= slidesInfo.length) {
      setSlideIndex(0);
    } else if (index >= 0) {
      setSlideIndex(index);
    } else {
      setSlideIndex(slidesInfo.length - 1);
    }
  };

  useEffect(() => {
    // Function to calculate slide width
    const calculateSlideWidth = () => {
      if (sliderRef.current) {
        // Get the first slide element (assuming all slides have the same width)
        const firstSlide = sliderRef.current.firstElementChild as HTMLElement;
        if (firstSlide) {
          const width = firstSlide.getBoundingClientRect().width;
          setSlideWidth(width + 32);
        }
      }
    };

    // Call the function once on mount
    calculateSlideWidth();

    // Recalculate on resize (optional)
    const handleResize = () => {
      calculateSlideWidth();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideIndex(slideIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const translateXValue = -1 * slideIndex * slideWidth;

  const sliderStyles: React.CSSProperties = {
    transform: `translateX(${translateXValue}px)`,
    transition: "transform 400ms cubic-bezier(0.25, 1, 0.5, 1)",
  };

  const Slide: React.FC<SlideProps> = ({
    companyURL,
    text,
    profileURL,
    surname,
    position,
  }) => {
    return (
      <div className="slide">
        <img src={companyURL} className="testimonial-logo" />
        <div className="testimonial">{text}</div>
        <div></div>
        <div className="wrapper">
          <div className="wrapper-left">
            <div
              className="profile-pic"
              style={{ backgroundImage: `url(${profileURL})` }}
            />
          </div>
          <div className="wrapper-right">
            <div className="testimonial-name">{surname}</div>
            <div className="text-medium-16-2">{position}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="padding-global">
      <div className="container-large section">
        <div className="extra-padding">
          <div className="slider">
            <div className="carousel">
              <div
                className="splide__list"
                ref={sliderRef}
                style={sliderStyles}
              >
                {slidesInfo.map((slidedata, i) => (
                  <Slide key={i} {...slidedata} />
                ))}
              </div>
              <div className="splide__arrows">
                <div
                  className="splide__arrow prev"
                  aria-controls="splide01-track"
                  aria-label="Previous slide"
                  onClick={() => handleSlideIndex(slideIndex - 1)}
                ></div>
                <div
                  className="splide__arrow next"
                  aria-controls="splide01-track"
                  aria-label="Next slide"
                  onClick={() => handleSlideIndex(slideIndex + 1)}
                ></div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6506d20510237164c6100755_%E2%80%9C%20(1).webp"
                className="absolute-slider-tag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const slidesInfo: SlideProps[] = [
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/66295ebfc888ef80e0db22e5_apollo_small.svg",
    text: "Enterpret has transformed our ability to use feedback to prioritize customers and drive product innovation. By using Enterpret to centralize our data, it saves us time, eliminates manual tagging, and boosts accuracy. We now gain near real-time insights, measure product success, and easily merge feedback categories. Enterpret's generative AI technology has streamlined our processes, improved decision-making, and elevated customer satisfaction",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/65197f9f57f5e99c188209fd_Nathan%20Yoon_Apollo.jpeg",
    surname: "Nathan Yoon",
    position: "Business Operations, Apollo.io",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/662956b23152e4cf8c3d79a4_notion_small.svg",
    text: "Enterpret helps us have a holistic view from our social media coverage, to our support tickets, to every single interaction that we're plugging into it. Beyond just keywords, we can actually understand: what are the broader sentiments? What are our users saying?",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/65196e2d3caad1f7647664bf_emma-auscher.jpeg",
    surname: "Emma Auscher",
    position: "Global VP of Customer Experience, Notion",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/6679a5d28418ae52a4b2396d_descript-grey.png",
    text: "Before Enterpret, organizing research data took an entire day. Now, research synthesis is 83% faster - it takes just 15 minutes to pull the data and another 15 minutes to start synthesizing. Enterpret removes the manual work, allowing me to focus on strategic thinking with a clear mind.",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/6679a5e3e86b405beec0e621_mike-mcnasby.jpeg",
    surname: "Mike McNasby",
    position: "User Research Lead, Descript",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/66295f5d75924ca1cbc2dcd5_b%26b_small.svg",
    text: "We are laser-focused on giving customers more than they expect through a hospitality-first, individualized approach to drive retention and loyalty. Enterpret has allowed us to stitch together a full picture of the customer, including feedback and reviews from multiple data points. We now can super-serve our loyal customers in a way that we have never been able to before.",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/661ed9261508434e415d502d_bb%20-%20anna.jpeg",
    surname: "Anna Esrov",
    position: "Vice President of Customer Experience & Loyalty",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/66295637e7d8193ace451dd4_feeld_small%20(1).svg",
    text: "Enterpret is one of the most powerful tools in our toolkit. It's very Member-friendly. We've been able to share how other teams can modify and self-serve in Enterpret. It's bridged a gap to getting access to Member feedback, and I see all our teams finding ways to use Enterpret to answer Member-related questions.",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/65d7812c33bcf881c06ab8f5_DinaMohammad-Laity.jpeg",
    surname: "Dina Mohammad-Laity",
    position: "VP of Data",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/66295ebfc888ef80e0db22e5_apollo_small.svg",
    text: "Since launching our Voice of Customer program six months ago, our team has dropped our human inquiry rate by over 40%, improved customer satisfaction, and enabled our team to allocate resources to building features that increase LTV and revenue.",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/65d77e456fd704ef1dc40e16_%20Abishek%20Viswanathan.jpeg",
    surname: "Abishek Viswanathan",
    position: "CPO, Apollo.io",
  },
  {
    companyURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/65dce0942d756beb30700b71_Untitled%20design%20(14).png",
    text: "The Enterpret platform is like the hero team of data analysts you always wanted - the ability to consolidate customer feedback from diverse touch points and identify both ongoing and emerging trends to ensure we focus on and build the right things has been amazing. We love the tools and support to help us train the results to our unique business and users and the Enterpret team is outstanding in every way.",
    profileURL:
      "https://cdn.prod.website-files.com/6505b4884ef96252921f8bb5/6519837d44dde418ecb3c0ed_larisa%20Sheckler.jpeg",
    surname: "Larisa Sheckler",
    position: "COO, Samsung Food",
  },
];
