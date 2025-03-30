# KIDS LEAGUE
### Descripción
KIDS LEAGUE es una plataforma web diseñada para la gestión de ligas deportivas infantiles. Su objetivo es facilitar la administración de torneos, equipos y jugadores, permitiendo un seguimiento detallado de las competiciones. La plataforma ofrece módulos especializados para organizadores, árbitros y directivos, asegurando una gestión eficiente y estructurada de los eventos deportivos.

#### Características
- Registro y gestión de jugadores, equipos y campeonatos. Cada usuario 'ADMINISTRATIVO' puede registrar nuevos jugadores y equipos, así como asociarlos a campeonatos activos.

- Visualización de eventos y partidos. La plataforma proporciona una agenda detallada de los próximos eventos deportivos.

- Módulos específicos para árbitros y directivos. Permite a los árbitros registrar resultados y a los directivos gestionar la logística de los torneos.

- Sistema de autenticación para distintos roles. Cada usuario accede con credenciales específicas según su función dentro de la liga.

- Interfaz intuitiva y responsive. Optimizada para su uso en dispositivos móviles y de escritorio.

#### Estructura del Proyecto
````bash
src/
├── components/
│   ├── arbitrosResources/    # Components related to referees
│   ├── bloques/              # Block components or UI sections
│   ├── registroResources/    # Registration related components
│   ├── common/               # Reusable common components
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── SocialMedia.astro
│   │   └── ...
│   ├── events/               # Event related components
│   │   ├── EventosSection.astro
│   │   ├── EventosVs.astro
│   │   └── ...
│   ├── home/                 # Homepage components
│   │   ├── Hero.astro
│   │   ├── HeroContent.astro
│   │   ├── Slider.astro
│   │   └── ...
│   ├── about/                # About page components
│   │   ├── HeroSobreNosotros.astro
│   │   ├── TeamSobreNosotros.astro
│   │   └── ...
│   ├── auth/                 # Authentication components
│   │   ├── LoginContent.astro
│   │   ├── RegisterContent.astro
│   │   └── ...
│   ├── sponsors/             # Sponsor related components
│   │   ├── SponsorIndex.astro
│   │   ├── SponsorLogos.astro
│   │   ├── SponsorSection.astro
│   │   └── ...
│   ├── tournaments/          # Tournament related components
│   │   ├── Clasificacion.astro
│   │   ├── GanadoresDeLiga.astro
│   │   ├── Medallas.astro
│   │   ├── Trofeos.astro
│   │   ├── UltimosGanadores.astro
│   │   └── ...
│   └── ui/                   # UI elements
│       ├── NewsCard.astro
│       └── ...
├── layouts/                  # Layout components
├── pages/                    # Your page files
├── assets/                   # Static assets
└── ...
````
#### Instalación y Uso
Clonar el repositorio

````bash
git clone https://github.com/AyelmerCorzoB/KidsLeague.git 
````


También puedes alojarlo en un servidor local para mayor funcionalidad.

Explorar las funcionalidades

Registra jugadores y equipos.

Accede a los perfiles de jugadores y equipos.

Gestiona partidos y eventos deportivos.

Utiliza los módulos específicos para árbitros y directivos.

Tecnologías Utilizadas
PHP para el manejo del backend y la lógica del servidor.

Astro para la construcción de interfaces modernas y optimizadas.

Tailwind CSS para el diseño rápido y responsive de la plataforma.

JavaScript para la interactividad y la gestión de datos en el frontend.

JSON para almacenar información de jugadores, equipos y partidos.

Git/GitHub para el control de versiones y colaboración en el desarrollo.

Contribuciones
Si deseas contribuir al proyecto:

Haz un fork del repositorio.

Realiza las mejoras o correcciones en una nueva rama.

Envía un pull request explicando los cambios realizados.

Autor
Desarrollado por el equipo de KIDS LEAGUE.

📬 Contacto

📧 Correo electrónico: criscacereskarenlorena@gmail.com

💼 LinkedIn: www.linkedin.com/in/karencristancho
