import { Button } from "@/components/ui/button"
import { Youtube, Twitter, Github, Twitch, Music, Cat, Code, ArrowRight, Banana } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react';

interface Video {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  // other properties...
}

export default function Component() {
  const [email, setEmail] = useState('')
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        if (!response.ok) throw new Error('Error al obtener los videos');
        const data = await response.json();
        setVideos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
      
    };

    fetchVideos();
  }, []);

  function vibrar() {
    const elemento = document.getElementById('falopa');
    elemento?.classList.add('animate-pulse');
  
    // Eliminar la clase después de un tiempo para que la animación no se repita indefinidamente
    setTimeout(() => {
      elemento?.classList.remove('animate-pulse');
    }, 1000);
  }

  const handleClick = () => {
    vibrar()
    setClickCount(clickCount + 1);

    if (clickCount >= 2) {
      setIsModalOpen(true);
    }
  };

  const typewriterRef = useRef(null);

      useEffect(() => {
        
      }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 backdrop-blur-md bg-gray-900/50">
        <a className="flex items-center justify-center" href="#">
          <img
            src="/logo.jpg"
            alt="Logo de Dot Dager"
            width={32}
            height={32}
            className="mr-2 rounded-full"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Dot Dager</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#videos">Videos</a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#music">Música</a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#about">Sobre mí</a>
          <a className="text-sm font-medium hover:text-purple-400 transition-colors" href="#contact">Contacto</a>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    <span ref={typewriterRef} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Código, Música y Gatos</span>
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                    Explora el fascinante mundo donde la programación, la música, los felinos y los pepinos se encuentran.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2 hover:cursor-pointer ml-0 mx-20" id="falopa" onClick={handleClick}>
                  falopa
                </div>
                {isModalOpen && (
                  <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="modal bg-white rounded-lg shadow-lg p-6">
                       <iframe title="Lumber Jack Game" src="https://tbot.xyz/lumber/" width="300" height="500"></iframe> 
                      <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold py-2 px-4 rounded">Cerrar</button>
                    </div>
                   
                  </div>
                )}
              </div>
              <div className="hidden lg:block">
                <img
                  src="/logo.jpeg"
                  alt="Logo de Dot Dager"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-purple-600 shadow-lg"
                  
                />
                
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1C1835" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,250.7C672,235,768,181,864,186.7C960,192,1056,256,1152,261.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Videos Destacados</h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400 mb-5">
                    Ultimos videos mas famosos del canal. 
                    Aquí encontrarás Guias, opiniones y cosas sobre el mundo de la programación.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((i) => (
                <a href={i.link} target="_blank" className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <img
                    alt={`Thumbnail ${i.title}`}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                    height="200"
                    src={i.thumbnail}
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-2">{i.title}</h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{i.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section id="music" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
            <div className="hidden lg:block">
                <img
                  src="/music.png"
                  alt="Dager tocando falopa"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-purple-600 shadow-lg"
                  
                />
                
              </div>
              <div className="rounded-full bg-purple-600 p-3 shadow-lg">
                
                <Music className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Rincón Musical</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre mis creaciones musicales y tutoriales de producción. La programación y la música van de la mano en mi mundo creativo.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => window.open("https://www.youtube.com/c/DagerMusic", "_blank")}>
                Explorar Música
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E1938" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,176C672,171,768,117,864,101.3C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="relative group">
                <img
                  alt="Mariano con su gato"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl transition-transform duration-300 group-hover:scale-100"
                  height="560"
                  src="/cat.jpg"
                  width="460"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Sobre Dot Dager</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soy un desarrollador apasionado, músico amateur y amante de los gatos. Mi misión es combinar estas pasiones para crear contenido único y educativo.
                </p>
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-inner">
                  <Cat className="h-8 w-8 text-purple-400" />
                  <span className="text-lg font-medium">Le gustan los gatos, la programacion y la música.</span>
                </div>
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-inner">
                  <Banana className="h-8 w-8 text-purple-400" />
                  <span className="text-lg font-medium">No es un pepinillo pero le gustan las formas fálicas.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Conéctate conmigo</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sígueme en mis redes sociales para mantenerte actualizado con mis videos, música y fotos de gatos. 
              </p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@DotDager" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                  <Youtube className="h-8 w-8" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="https://www.twitter.com/Dager_32" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                  <Twitter className="h-8 w-8" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://github.com/MarianoVilla" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.twitch.tv/dagerxiv" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                  <Twitch className="h-8 w-8" />
                  <span className="sr-only">Twitch</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,122.7C672,85,768,75,864,106.7C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Dot Dager. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

