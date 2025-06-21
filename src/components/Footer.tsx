import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate border-t border-slate/50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <a href="#" className="text-2xl font-bold font-display">
                        <span className="text-accent">&lt;</span>
                        <span className="text-light">Mazen</span>
                        <span className="text-accent">/&gt;</span>
                    </a>
                    <p className="mt-2 text-gray">Frontend Developer & Creative Writer</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 footer-links">
                    <a href="#about" className="text-gray hover:text-accent transition">About</a>
                    <a href="#skills" className="text-gray hover:text-pink transition">Skills</a>
                    <a href="#work" className="text-gray hover:text-teal transition">Experience</a>
                    <a href="#projects" className="text-gray hover:text-orange transition">Projects</a>
                    <a href="#contact" className="text-gray hover:text-accent transition">Contact</a>
                </div>
            </div>
            
            <div className="border-t border-slate/50 mt-8 pt-8 text-center text-gray">
                <p>© 2025 Mazen Emad Ramadan. All rights reserved.</p>
                <p className="mt-2">Built using React.js Tailwind CSS</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray hover:text-accent transition">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="text-gray hover:text-accent transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
