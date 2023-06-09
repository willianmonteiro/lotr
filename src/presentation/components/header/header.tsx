import { Brand } from "./brand";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="relative py-12 px-4">
      <Brand />
      <Nav 
        links={[
          { slug: '/', label: 'Movies' },
          { slug: '/characters', label: 'Characters' },
        ]} 
      />
    </header>
  );
}