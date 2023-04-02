import { AboutContentWrapper, AboutHeader, AboutMain } from "./styles";
import Head from "../../components/Head";

/**
 * About page component.
 * @returns {JSX.Element} About page
 */
function AboutPage() {
  return (
    <AboutMain>
      <Head title="About" description="About TechBeauty" />
      <AboutHeader>
        <h1>About TechBeauty</h1>
      </AboutHeader>
      <AboutContentWrapper>
        <p>
          Welcome to TechBeauty, your one-stop shop for all things fashion, health, electronics, and accessories. Our mission is to provide you with the latest and greatest products at affordable
          prices.
        </p>
        <div></div>
        <p>
          We understand that life can be busy and hectic, so we've made it our goal to make shopping easy and convenient. Our online store is open 24/7, so you can shop from the comfort of your own
          home, at any time of the day or night.
        </p>
        <p>
          At TechBeauty, we're passionate about delivering exceptional customer service. We strive to provide you with a seamless shopping experience from start to finish. If you ever have any
          questions or concerns, our friendly and knowledgeable customer support team is always here to help.
        </p>
        <p>We're also committed to giving back to our community. That's why a portion of every purchase made on our site goes towards supporting various charities and non-profit organizations.</p>
        <p> Thank you for choosing TechBeauty. We look forward to serving you and helping you look and feel your best!</p>
      </AboutContentWrapper>
    </AboutMain>
  );
}

export default AboutPage;
