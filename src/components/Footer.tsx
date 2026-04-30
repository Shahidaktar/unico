export default function Footer() {
  return (
    <footer className="bg-luxury-cream pt-32 pb-16 px-8 md:px-16 border-t border-luxury-ink/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/unico-logo.png" 
              alt="Unico Logo" 
              className="h-24 w-auto"
              referrerPolicy="no-referrer"
            />
            {/* <span className="text-2xl font-bold uppercase tracking-wider">Unico</span> */}
          </div>
          <p className="text-luxury-muted text-sm font-light leading-relaxed max-w-xs">
            A bespoke atelier for private travel and unique life experiences. Redefining luxury through the lens of quiet immersion.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-luxury-muted">Journeys</h4>
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Private Islands</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Wilderness Expeditions</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Heritage Retreats</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Urban Escapes</a>
          </nav>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-luxury-muted">Company</h4>
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Our Story</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">The Studio</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Careers</a>
            <a href="#" className="text-sm font-light hover:opacity-100 transition-opacity opacity-60">Privacy Policy</a>
          </nav>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-luxury-muted">Studio</h4>
          <p className="text-sm font-light opacity-60 leading-loose mb-6">
            18 Curzon St, London<br />
            W1J 7T1, United Kingdom
          </p>
          <a href="mailto:concierge@unicovoyages.com" className="text-sm font-medium border-b border-luxury-ink/20 pb-1">
            concierge@unicovoyages.com
          </a>
        </div>
      </div>

      <div className="pt-12 border-t border-luxury-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted opacity-60">
          © {new Date().getFullYear()} Unico Voyages. All Rights Reserved.
        </p>
        <div className="flex gap-12">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted opacity-60 hover:opacity-100">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted opacity-60 hover:opacity-100">LinkedIn</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted opacity-60 hover:opacity-100">Vimeo</a>
        </div>
      </div>
    </footer>
  );
}
