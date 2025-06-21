
export default function Header() {
  return (
    <header className="fixed w-full py-4 bg-dark/90 backdrop-blur-sm z-50 border-b border-slate/50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold font-display">
                <span className="text-accent">&lt;</span>
                <span className="text-light">Mazen</span>
                <span className="text-accent">/&gt;</span>
            </a>
            <nav className="hidden md:flex space-x-8">
                <a href="#about" className="nav-link font-medium text-light hover:text-accent transition">
                    About
                </a>
                <a href="#skills" className="nav-link font-medium text-light hover:text-accent transition">
                    Skills
                </a>
                <a href="#work" className="nav-link font-medium text-light hover:text-accent transition">
                    Experience
                </a>
                <a href="#projects" className="nav-link font-medium text-light hover:text-accent transition">
                    Projects
                </a>
                <a href="#contact" className="nav-link font-medium text-light hover:text-accent transition">
                    Contact
                </a>
            </nav>
            <button className="md:hidden focus:outline-none text-light" id="mobileMenuButton">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>

  );
}
