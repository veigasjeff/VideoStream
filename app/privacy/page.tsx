import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/tmdb";
import AdsterraAd from "@/components/AdsterraAd";
import AdComponent from "@/components/AdComponent";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Read about how ${SITE_NAME} collects, uses, and protects your personal information.`,
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Read about how ${SITE_NAME} collects, uses, and protects your personal information.`,
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  const lastUpdated = "March 18, 2025";

  return (
    <div className="container py-12 text-center">
      <AdsterraAd />

      <h1 className="text-4xl font-bold mb-2">
        <strong>Privacy Policy</strong>
      </h1>
      <p className="text-muted-foreground mb-8">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-center">
        <p className="lead font-semibold">
          <strong>At {SITE_NAME}, we take your privacy seriously.</strong> This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Information We Collect</strong>
        </h2>
        <p>We may collect information about you in various ways when you use our website:</p>
        <ul className="list-disc list-inside text-left inline-block">
          <li>
            <strong>Personal Data:</strong> We may ask you to provide certain personally identifiable information that can be used to contact or identify you.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information on how the service is accessed and used, such as your computer's IP address, browser type, and time spent on pages.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and tracking technologies to monitor activity on our service.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">
          <strong>How We Use Your Information</strong>
        </h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc list-inside text-left inline-block">
          <li>Providing and maintaining our service</li>
          <li>Notifying you about changes to our service</li>
          <li>Enabling interactive features</li>
          <li>Providing customer support</li>
          <li>Improving our service through data analysis</li>
          <li>Monitoring service usage</li>
          <li>Detecting and preventing security issues</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Disclosure of Your Information</strong>
        </h2>
        <p>We may disclose your personal information under the following circumstances:</p>
        <ul className="list-disc list-inside text-left inline-block">
          <li>
            <strong>Business Transfers:</strong> If involved in a merger or acquisition, your information may be transferred.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose data to comply with legal obligations or protect our users.
          </li>
          <li>
            <strong>Law Enforcement Requests:</strong> We may disclose information if required by law or legal authorities.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Security of Your Information</strong>
        </h2>
        <p>
          We implement administrative, technical, and physical security measures to protect your personal data.
          However, no security system is completely secure, and we cannot guarantee absolute protection.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Changes to This Privacy Policy</strong>
        </h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted on this page, and we encourage you to review it regularly.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          <strong>Contact Us</strong>
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <strong>Contact Page</strong>.
        </p>
      </div>
    </div>
  );
}
