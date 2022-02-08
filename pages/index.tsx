import { Box } from "@chakra-ui/react";
import NavBar from "../sections/navBar";
import Hero from "../sections/hero";
import Carousel from "../sections/carousel";
import ContactForm from "../sections/contactForm";
import { getEntries } from "../services/contentful";
import { Image, BasicImage, CTA } from "../types/atoms";

export async function getStaticProps({}) {
  const post = await getEntries({
    content_type: "carousel",
    include: 10,
  });

  return {
    props: {
      landscapeCarousel: post.items[0].fields,
    },
  };
}

interface HomeHero {
  title: string;
  description: string;
  cta: CTA;
  image: BasicImage;
}

interface LandscapeCarousel {
  title: string;
  description: any;
  images: Image[];
}

const heroContent: HomeHero = {
  title: "Grasshoppers Content Studio",
  description:
    "Grasshoppers Academy Content Studio (GACS) is an initiative that allows students to build (partial) dynamic websites for real clients.",
  cta: { label: "Documentation", href: "documentation" },
  image: { src: "ontwikkelen-jstack.jpg", alt: "ontwikkelen jstack" },
};

const Home = ({
  landscapeCarousel,
}: {
  landscapeCarousel: LandscapeCarousel;
}) => {
  return (
    <div>
      <NavBar />
      <Hero
        title={heroContent.title}
        description={heroContent.description}
        cta={heroContent.cta}
        image={heroContent.image}
      />
      <Carousel
        title={landscapeCarousel.title}
        description={landscapeCarousel.description}
        images={landscapeCarousel.images}
      />
      <ContactForm />
      <Box my="16" />
    </div>
  );
};

export default Home;
