import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/tmdb";
import AdsterraAd from "@/components/AdsterraAd";
import AdComponent from "@/components/AdComponent";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: `Learn more about ${SITE_NAME} and our mission to provide high-quality streaming content.`,
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: `Learn more about ${SITE_NAME} and our mission to provide high-quality streaming content.`,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="container py-12 text-center">
      <AdsterraAd />

      <h1 className="text-4xl font-bold mb-8">
        <strong>About {SITE_NAME}</strong>
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-center">
        <p className="lead font-semibold">
          <strong>Welcome to {SITE_NAME}, your premier destination for streaming movies and TV shows online.</strong>
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Our Mission</strong>
        </h2>
        <p>
          At <strong>{SITE_NAME}</strong>, we're dedicated to providing a seamless and enjoyable streaming experience. Our platform offers a vast library of movies and TV shows, from the latest blockbusters to classic favorites, all accessible with just a few clicks.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>What We Offer</strong>
        </h2>
        <ul className="list-disc list-inside text-left inline-block">
          <li><strong>Extensive collection</strong> of movies and TV shows</li>
          <li><strong>High-quality streaming</strong> from multiple sources</li>
          <li><strong>User-friendly interface</strong> for easy navigation</li>
          <li><strong>Regular updates</strong> with the latest releases</li>
          <li><strong>Personalized recommendations</strong> based on your viewing history</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Our Story</strong>
        </h2>
        <p>
          <strong>Founded in 2025</strong>, {SITE_NAME} was created by a team of passionate movie enthusiasts who wanted to build a better streaming platform. We noticed that existing services often had limited libraries or poor streaming quality, so we set out to create a solution that addresses these issues.
        </p>
        <p>
          Since our launch, we've been continuously improving our platform based on user feedback and technological advancements. Our goal is to become the go-to destination for movie and TV show streaming worldwide.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Looking Forward</strong>
        </h2>
        <p>
          As we continue to grow, we're excited about the future of <strong>{SITE_NAME}</strong>. We're constantly working on new features and expanding our content library to enhance your viewing experience.
        </p>
        <p className="font-semibold">
          <strong>Thank you for choosing {SITE_NAME} for your entertainment needs.</strong> We hope you enjoy our platform as much as we enjoy building it for you.
        </p>
      </div>
    </div>
  );
}
