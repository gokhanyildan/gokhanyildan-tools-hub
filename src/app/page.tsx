export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">
      
      {/* Arkaplan Efekti (Gradient Blob) - Opsiyonel ama derinlik katar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-4xl w-full">
          
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Gökhan Yıldan Tools
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              Simple, secure, and accessible digital tools for everyone. 
              No installation required.
            </p>
          </header>

          {/* Kartlar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* QR Generator Card */}
            <a 
              href="/qr-generator" 
              className="group relative bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c0 .621 .504 1.125 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">QR Generator</h2>
              <p className="text-slate-400 leading-relaxed">
                Instantly create QR codes for websites, Wi-Fi networks, or plain text. Customizable and fast.
              </p>
            </a>

            {/* Password Generator Card */}
            <a 
              href="/password-generator" 
              className="group relative bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-green-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-green-400 transition-colors">Password Generator</h2>
              <p className="text-slate-400 leading-relaxed">
                Generate strong, unhackable passwords with a single click. Keep your accounts safe.
              </p>
            </a>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-slate-600 text-sm relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Gökhan Yıldan. 
          <a href="https://gokhanyildan.com" target="_blank" className="hover:text-slate-400 ml-1 transition-colors">Visit Main Website &rarr;</a>
        </p>
      </footer>
    </main>
  );
}