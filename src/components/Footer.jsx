import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full glass py-8 mt-20 border-t border-glass-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Vasumani L. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1 flex items-center">
            Designed & Built with <Heart size={12} className="mx-1 text-neon-purple" /> using React
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/vasumani01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vasumani-l/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
