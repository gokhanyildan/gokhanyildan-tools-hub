export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* CANLI Arkaplan Efekti (Geri Getirdik) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full">
          
          {/* HEADER: Logo + Gradient Yazı */}
          <header className="flex flex-col items-center justify-center mb-20 text-center">
            
            {/* SVG LOGO (Resim dosyası yerine bunu kullanıyoruz - Kusursuz görünür) */}
            <div className="relative mb-6 group">
                {/* Arkadaki parlama efekti */}
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Vektörel Dişli İkonu */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="w-20 h-20 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
              Gökhan Yıldan <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">Tools</span>
            </h1>

            <div className="flex items-center gap-2 mt-4 text-slate-400 font-mono text-sm bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                tools.gokhanyildan.com
            </div>
          </header>

          {/* KARTLAR GRID - Renkleri Geri Getirdik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. KART: QR Generator (MAVİ TEMA) */}
            <a 
              href="/qr-generator" 
              className="group relative bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c0 .621 .504 1.125 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">QR Generator</h2>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Create instant QR codes for links, Wi-Fi, and text.
              </p>
            </a>

            {/* 2. KART: Password Generator (YEŞİL TEMA) */}
            <a 
              href="/password-generator" 
              className="group relative bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Password Generator</h2>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Generate unhackable, strong passwords instantly.
              </p>
            </a>

            {/* 3. KART: LogSanitizer (MOR TEMA) */}
            <a 
              href="https://github.com/gokhanyildan/LogSanitizer" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-violet-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]"
            >
              <div className="absolute top-6 right-6 text-slate-600 group-hover:text-violet-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <div className="mb-6 inline-flex p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">LogSanitizer</h2>
                <span className="text-xs font-bold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-full">Desktop</span>
              </div>
              
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Securely remove sensitive data from log files.
              </p>
            </a>

            <a 
              href="/error-code-explorer" 
              className="group relative bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.15)]"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <circle cx="11" cy="11" r="6.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.5-4.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">Error Code Explorer</h2>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                Instantly search and decode system error codes to identify root causes.
              </p>
            </a>

          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-slate-600 text-sm relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Gökhan Yıldan. 
          <a href="https://gokhanyildan.com" target="_blank" className="hover:text-white ml-1 transition-colors">Main Website &rarr;</a>
        </p>
      </footer>
    </main>
  );
}
