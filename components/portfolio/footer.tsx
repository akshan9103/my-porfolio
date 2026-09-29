import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-black uppercase tracking-widest">
            Shantha Kumar
          </h2>
          <p className="text-gray-500 text-sm font-light">
            Full-Stack AI Developer. Building intelligent solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/akshan9103" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 border border-gray-200 text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} strokeWidth={1.5} />
          </a>
          <a 
            href="https://linkedin.com/in/shanthakumarpm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 border border-gray-200 text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} strokeWidth={1.5} />
          </a>
          {/* <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 border border-gray-200 text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Twitter"
          >
            <FiTwitter size={20} strokeWidth={1.5} />
          </a> */}
          <a 
            href="mailto:shanthapm2003@gmail.com" 
            className="p-3 border border-gray-200 text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <FiMail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright and Location */}
      <div className="w-full bg-[#f8f9fa] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
            © {currentYear} Shantha Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#About" className="text-xs text-gray-500 hover:text-black font-medium tracking-widest uppercase transition-colors">
              About
            </a>
            <a href="#Projects" className="text-xs text-gray-500 hover:text-black font-medium tracking-widest uppercase transition-colors">
              Work
            </a>
            <a href="#Contact" className="text-xs text-gray-500 hover:text-black font-medium tracking-widest uppercase transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}