import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PierSeeker",
  description: "PierSeeker terms of service. Rules and guidelines for using our Oklahoma fishing pier directory.",
  openGraph: { title: "Terms of Service — PierSeeker", url: "https://www.pierseeker.com/terms", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Terms of Service — PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-[Cabin] text-3xl font-bold text-charcoal mb-2">Terms of Service</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: April 2, 2026</p>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <p>By accessing and using PierSeeker (pierseeker.com), you agree to these terms. If you do not agree, please do not use the site.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Informational Purposes Only</h2>
        <p>PierSeeker provides a fishing pier directory for informational purposes only. The information is provided &quot;as is&quot; without warranties of any kind, express or implied. Fishing pier conditions, fees, access rules, and amenities can change without notice. Always verify conditions locally before visiting a pier.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Accuracy of Information</h2>
        <p>While we strive for accuracy, we cannot guarantee that all information is current, complete, or error-free. GPS coordinates are approximate. Road and water conditions vary. Always use caution when navigating to a fishing pier and verify the location visually before fishing. We are not responsible for errors in GPS coordinates, amenity listings, fee information, or pier conditions.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">User Submissions</h2>
        <p>If you submit a pier, correction, or other content to PierSeeker, you grant us a non-exclusive, royalty-free, perpetual license to use, edit, publish, and distribute that content in our directory. We reserve the right to edit or remove any user submission at our discretion.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Intellectual Property</h2>
        <p>The PierSeeker website, including its design, text, graphics, code, and organization, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without written permission. Fishing pier locations derived from public data sources remain in the public domain.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Third-Party Content and Links</h2>
        <p>Our site contains links to third-party websites, Google Maps embeds, and affiliate product links. We are not responsible for the content, privacy practices, or availability of third-party sites. Inclusion of a link does not imply endorsement.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Disclaimer of Warranties</h2>
        <p>PIERSEEKER IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Limitation of Liability</h2>
        <p>PierSeeker, its owners, and contributors shall not be liable for any damages, injuries, losses, or expenses arising from the use of information on this site, including but not limited to property damage, personal injury, or lost revenue. Boating is inherently risky — always follow safety guidelines, wear life jackets, and check weather conditions before launching.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Advertising</h2>
        <p>PierSeeker may display third-party advertisements, including ads served by Google AdSense. We are not responsible for the content of third-party ads. Ad placement does not constitute endorsement of advertised products or services.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Changes to These Terms</h2>
        <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10">Contact</h2>
        <p>Questions about these terms? Email <a href="mailto:hello@pierseeker.com" className="text-water hover:underline">hello@pierseeker.com</a>.</p>
      </div>
    </div>
  );
}
