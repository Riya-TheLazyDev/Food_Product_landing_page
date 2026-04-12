import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-main py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo/Icon */}
        <div className="mb-16 text-brand-green">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0V16M20 40V24M0 20H16M40 20H24M6 6L16 16M34 34L24 24M34 6L24 16M6 34L16 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Links & Newsletter */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-text-secondary">
          
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-brand-green transition-colors">Shop All Wine</a>
            <a href="#" className="hover:text-brand-green transition-colors">Wine Club</a>
            <a href="#" className="hover:text-brand-green transition-colors">About Us</a>
            <a href="#" className="hover:text-brand-green transition-colors">Journal</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-brand-green transition-colors">FAQ</a>
            <a href="#" className="hover:text-brand-green transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-medium text-text-primary mb-4 uppercase tracking-wider text-xs">Join our newsletter</h4>
            <div className="flex relative border-b border-text-secondary pb-2 mb-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none w-full text-text-primary placeholder:text-text-muted"
              />
              <button className="text-brand-green hover:text-brand-greenHover absolute right-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-text-muted">By subscribing you agree to our terms and conditions.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
