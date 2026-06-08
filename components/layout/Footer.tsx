import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg text-foreground">
              Ministry Events
            </h3>
            <p className="mt-2 text-sm text-muted">
              Powerful event management for churches and ministries
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground text-sm">Product</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted hover:text-primary transition">Features</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition">Pricing</Link></li>
              <li><Link href="/events" className="text-muted hover:text-primary transition">Events</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground text-sm">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted hover:text-primary transition">About</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition">Blog</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground text-sm">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted hover:text-primary transition">Help Center</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition">Privacy</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <p>&copy; 2024 Ministry Events. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="#" className="hover:text-primary transition">Twitter</Link>
            <Link href="#" className="hover:text-primary transition">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
