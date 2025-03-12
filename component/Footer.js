import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  bg-slate-950 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Logo & Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <p className="leading-5 font-bold text-2xl">
              Safa <br />
              <span className="text-highlight"> Tourism</span>
            </p>
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-md">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Dignissim
            facilisi et tempor integer nullam est eget. Inceptos mattis
            tristique vestibulum nostra vivamus sollicitudin facilisis.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-5">
            <FaFacebook className="text-highlight text-2xl cursor-pointer hover:text-white transition" />
            <FaTwitter className="text-highlight text-2xl cursor-pointer hover:text-white transition" />
            <FaYoutube className="text-highlight text-2xl cursor-pointer hover:text-white transition" />
            <FaInstagram className="text-highlight text-2xl cursor-pointer hover:text-white transition" />
            <FaWhatsapp className="text-highlight text-2xl cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="bg-gray-900 p-6 rounded-lg w-full">
          <div className="grid grid-cols-3 gap-6">
            {/* Useful Links */}
            <div>
              <h3 className="text-white font-semibold mb-3">Useful Links</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">
                  Required Documents
                </li>
                <li className="hover:text-white cursor-pointer">Features</li>
              </ul>
            </div>

            {/* Who Can Apply */}
            <div>
              <h3 className="text-white font-semibold mb-3">Who Can Apply</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Salaried Individuals
                </li>
                <li className="hover:text-white cursor-pointer">Businessmen</li>
                <li className="hover:text-white cursor-pointer">
                  Self-Employed
                </li>
                <li className="hover:text-white cursor-pointer">Landlord</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-3">Support</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">
                  Testimonials
                </li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">License</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
