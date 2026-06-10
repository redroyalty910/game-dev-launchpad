import './App.css'
import ResourceCard from './components/ResourceCard'

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">☆ Tim's Community Resource Board! ☆</p>
        <h1>☆ GAME DEVELOPMENT CARDS ☆</h1>
        <p className="subtitle">
          Provided on this web-page is a strategic board of tools, tutorials, asset libraries, and communities for game developers. Also included at the end is my discord;
          which I do highly recommend joining if you're a passionate creator/developer !
        </p>
      </header>

      <main className="card-grid">
        <ResourceCard
          title="Godot Docs! ☆"
          description="The official developer documentation for learning Godot, GDScript, scenes, nodes, and 2D or 3D game development the proper way."
          link="https://docs.godotengine.org/"
        />

        <ResourceCard
          title="Unity Learn! ☆"
          description="These are beginner friendly lessons and pathways for learning Unity, C#, animation, physics, and game systems."
          link="https://learn.unity.com/"
        />

        <ResourceCard
          title="itch.io! ☆"
          description="Likely the most popular platform for uploading, sharing, selling, and discovering indie games / game jam projects."
          link="https://itch.io/"
        />

        <ResourceCard
          title="Kenney Assets! ☆"
          description="A large collection of FREE and paid game assets including sprites, UI packs, audio, and 3D models."
          link="https://kenney.nl/assets"
        />

        <ResourceCard
          title="OpenGameArt! ☆"
          description="A FREE community-driven library of sprites, tilesets, music, sound effects, and textures for games."
          link="https://opengameart.org/"
        />

        <ResourceCard
          title="Freesound! ☆"
          description="A vast FREE sound library where developers can find effects, ambience, and audio clips for creative projects."
          link="https://freesound.org/"
        />

        <ResourceCard
          title="Aseprite! ☆"
          description="A MUST-HAVE paid pixel art / animation tool commonly used for creating sprites, tilesets, and character animations."
          link="https://www.aseprite.org/"
        />

        <ResourceCard
          title="Lospec! ☆"
          description="A resource hub for pixel artists with color palettes, tutorials, and tools for retro-inspired game art."
          link="https://lospec.com/"
        />

        <ResourceCard
          title="Brackeys Guides! ☆"
          description="A sweet game development tutorial channel with beginner-friendly videos on Unity, Godot, and all the programming basics."
          link="https://www.youtube.com/@Brackeys"
        />

        <ResourceCard
          title="Tim's Server! ☆"
          description="A discord-based community for passionate creators of all kinds of varieties; highly recommended for the sake of networking and unity!"
          link="https://discord.gg/JEGeDzk4n7"
        />
      </main>
    </div>
  )
}

export default App