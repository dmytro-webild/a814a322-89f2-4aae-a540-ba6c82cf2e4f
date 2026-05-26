"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Why Us",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Experience",
          id: "#experience",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Central Barbershop"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="Central Barbershop"
      description="For generations, Central Barbershop has been serving hardworking men, local families, business professionals, first responders, and visitors looking for something rare: A barber who listens. A haircut done right. And a place that still feels like home."
      buttons={[
        {
          text: "GET A HAIRCUT TODAY",
          href: "#contact",
        },
        {
          text: "CALL NOW",
          href: "tel:+14075551234",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-armchairs-barber-shop_140725-7720.jpg"
      imageAlt="Interior of a traditional barbershop with vintage chairs"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "rating",
          value: "4.9+",
          title: "Rating",
          items: [
            "★★★★★",
          ],
        },
        {
          id: "years",
          value: "20+",
          title: "Years",
          items: [
            "Serving Kissimmee",
          ],
        },
        {
          id: "customers",
          value: "Thousands",
          title: "Loyal",
          items: [
            "Customers",
          ],
        },
        {
          id: "experience",
          value: "Traditional",
          title: "Barber",
          items: [
            "Experience",
          ],
        },
      ]}
      title="Trusted by Thousands of Local Customers"
      description="Where Kissimmee Still Gets a Real Haircut"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="WHY MEN KEEP COMING BACK"
      description="Not because we're fancy. Because we're consistent."
      accordionItems={[
        {
          id: "precision",
          title: "Precision Haircuts",
          content: "The haircut you asked for. Done right the first time.",
        },
        {
          id: "service",
          title: "Old-School Service",
          content: "No rushing. No upselling. No nonsense.",
        },
        {
          id: "conversation",
          title: "Friendly Conversation",
          content: "Many customers stay for the stories as much as the haircut.",
        },
        {
          id: "prices",
          title: "Fair Prices",
          content: "Exceptional value without sacrificing quality.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/composition-shaving-objects_23-2148122071.jpg"
      imageAlt="Barber giving a precision straight razor shave to a client"
      mediaAnimation="opacity"
      mediaPosition="right"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Kirk J.",
          role: "Customer",
          testimonial: "\"Mark nailed my haircut the first time. I'd been searching for years for the right barber.\"",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-senior-man-hairdresser-salon_23-2149220586.jpg",
          imageAlt: "Portrait of Kirk J., satisfied customer",
          icon: Star,
        },
        {
          id: "2",
          name: "James S.",
          role: "Customer",
          testimonial: "\"This is exactly what a barbershop should be.\"",
          imageSrc: "http://img.b2bpic.net/free-photo/client-barber-greeting-each-other-barbershop_23-2148181951.jpg",
          imageAlt: "Portrait of James S., satisfied customer",
          icon: Star,
        },
        {
          id: "3",
          name: "Sherri G.",
          role: "Customer",
          testimonial: "\"When I walked in, I felt like family.\"",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-hairdresser-salon_52683-111009.jpg",
          imageAlt: "Portrait of Sherri G., satisfied customer",
          icon: Star,
        },
        {
          id: "4",
          name: "David G.",
          role: "Customer",
          testimonial: "\"Like the barber shops I grew up with.\"",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-getting-haircut_23-2149220556.jpg",
          imageAlt: "Portrait of David G., satisfied customer",
          icon: Star,
        },
        {
          id: "5",
          name: "Multiple longtime customers",
          role: "Customers",
          testimonial: "\"Worth the drive. I won't go anywhere else.\"",
          imageSrc: "http://img.b2bpic.net/free-photo/musician-producer-work-soundboard-pads-professional-studio_482257-122100.jpg",
          imageAlt: "Customers laughing with barber",
          icon: Star,
        },
      ]}
      title="THIS IS WHAT PEOPLE LOVE ABOUT CENTRAL BARBERSHOP"
      description="Pull directly from customer sentiment. What Kissimmee is saying:"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "MEET MARK: A Barber First. A Business Owner Second.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/stylish-man-placing-his-bow-tie_1153-1519.jpg",
          alt: "Portrait of Mark, the owner of Central Barbershop",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "mens-haircut",
          name: "Men's Haircut",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-barber-trimming-his-client-s-beard_23-2148242814.jpg",
          imageAlt: "Classic men's haircut service",
        },
        {
          id: "beard-trim",
          name: "Beard Trim & Shape",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-barber-combing-moustache-client_23-2147778838.jpg",
          imageAlt: "Professional beard trim service",
        },
        {
          id: "razor-neck-shave",
          name: "Straight Razor Neck Shave",
          price: "$10",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-shaving_23-2147638137.jpg",
          imageAlt: "Traditional straight razor neck shave",
        },
        {
          id: "kids-haircut",
          name: "Kids Haircuts",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-holding-scissors-cutting-his-hair-smiling_141793-37100.jpg",
          imageAlt: "Kids haircut service",
        },
        {
          id: "senior-haircut",
          name: "Senior Haircuts",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-hairdresser-shop_23-2149220528.jpg",
          imageAlt: "Senior men's haircut service",
        },
        {
          id: "hot-towel-shave",
          name: "Hot Towel Shave",
          price: "$30",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-barber-wiping-clients-face-with-hot-towel_107420-94798.jpg",
          imageAlt: "Hot towel shave service",
        },
      ]}
      title="Traditional Barber Services"
      description="Expert craftsmanship for every client."
    />
  </div>

  <div id="experience" data-section="experience">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Friendly",
        "Genuine",
        "Welcoming",
        "Professional",
        "Affordable",
        "Authentic",
        "Comfortable",
        "Consistent",
        "Hometown",
        "Family-Oriented",
      ]}
      title="WALK IN A CUSTOMER. LEAVE A REGULAR."
      description="The difference isn't the haircut. It's how you're treated. Customers describe Central Barbershop as:"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="LOOKING FOR A REAL BARBER?"
      description="Not a chain. Not a franchise. Not a trendy shop chasing social media. A real barber. A real conversation. A real haircut. Traditional Barbering. Genuine Service. Timeless Quality."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us what you need...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/adorable-little-dog-out-walk_23-2148740410.jpg"
      imageAlt="Exterior view of Central Barbershop with vintage sign"
      mediaAnimation="opacity"
      buttonText="Book Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Men's Haircut",
              href: "#services",
            },
            {
              label: "Beard Trim",
              href: "#services",
            },
            {
              label: "Razor Shave",
              href: "#services",
            },
            {
              label: "Kids & Seniors",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Visit Us",
          items: [
            {
              label: "123 Main St, Kissimmee, FL",
              href: "https://maps.app.goo.gl/YourGoogleMapsLink",
            },
            {
              label: "Mon-Sat: 9 AM - 6 PM",
              href: "#",
            },
            {
              label: "(407) 555-1234",
              href: "tel:+14075551234",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Central Barbershop. All rights reserved."
      bottomRightText="Traditional Barbering. Timeless Quality."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
