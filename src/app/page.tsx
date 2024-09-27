import About from './components/about/about';
import Experience from './components/experience/experience';
import Home from './components/home/home';
import Skills from './components/skills/skills';

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Home />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}
