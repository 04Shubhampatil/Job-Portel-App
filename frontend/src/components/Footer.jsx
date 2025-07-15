import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  FacebookIcon,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Description */}
        <div>
          <h1 className="text-xl font-bold ">
            job<span className="text-[#f83002]">hub</span>
          </h1>
          <p className="text-sm mt-2">
            Your trusted job portal for top opportunities in tech, design, and
            more.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3 mt-2">
            <Link to="#">
              <Facebook className="h-5 w-5 text-[#6A38c2]" />
            </Link>
            <Link to="#">
              <Twitter className="h-5 w-5 text-[#6A38c2]" />
            </Link>
            <Link to="#">
              <Instagram className="h-5 w-5 text-[#6A38c2]" />
            </Link>
            <Link to="#">
              <Linkedin className="h-5 w-5 text-[#6A38c2]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t mt-4 py-4 text-center text-sm">
        © {new Date().getFullYear()} JobPort. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
