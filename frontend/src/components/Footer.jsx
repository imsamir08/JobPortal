import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t mt-16 bg-white">
      <div className="max-w-10xl mx-auto px-6 py-10">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col md:items-start">
            <h2 className="text-2xl font-bold">
              Job<span className="text-blue-600">Portal</span>
            </h2>

            <p className="text-gray-500 mt-3 leading-7 max-w-xs">
              Find and apply jobs easily.
            </p>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-lg font-semibold mb-4">
              About Us
            </h3>

            <div className="flex flex-col gap-1 text-gray-600 items-center">
              <a
                href="https://github.com/imsamir08/imsamir08"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href="mailto:samirkr0802@gmail.com"
                className="hover:text-blue-600"
              >
                Contact
              </a>

              {/* <a
                href="tel:+919876543210"
                className="hover:text-blue-600"
              >
                +91 98765 43210
              </a> */}

              <Link
                to="https://www.linkedin.com/in/samir-kumar-5b11a422b/"
                className="hover:text-blue-600"
              >
                About
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-1 text-gray-600 items-center">
              <Link
                to="/jobs"
                className="hover:text-blue-600"
              >
                Browse Jobs
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-blue-600"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="hover:text-blue-600"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-8 pt-5">
          <p className="text-gray-500 text-sm text-center">
            © 2026 JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;