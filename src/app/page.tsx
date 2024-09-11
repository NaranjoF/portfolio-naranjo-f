import About from './components/about/about';
import Home from './components/home/home';

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Home />
      <About />
    </main>
  );
}
