export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-blue-900 text-white">
      {/* Fondo con imagen difuminada */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm" 
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hospital,healthcare')" }}>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Bienvenido a Nuestro Sistema Médico
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fade-in delay-200">
          Una plataforma moderna y eficiente para gestionar la información de tus pacientes con seguridad y rapidez.
        </p>
        <a href="public/login" 
           className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition transform hover:scale-105 animate-fade-in delay-400">
          Iniciar Sesión
        </a>
      </div>
    </div>
  );
}
