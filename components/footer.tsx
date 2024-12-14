import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Footer Component
const Footer = () => {
  const footerLinks = {
    Shop: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
    About: ["Our Story", "Careers", "Press", "Blog"],
    Support: ["Contact Us", "Shipping", "Returns", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Get updates about new products and special offers
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-gray-900">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-900">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
