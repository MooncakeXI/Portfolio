import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ใส่ Navbar ไว้บนสุด */}
      <Navbar />
      <Hero />
      </div>
  );
}