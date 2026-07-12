import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "./components/Footer";
// import { CursorFollower } from "./components/Cursor-follower"; // ปิดชั่วคราว ใช้ MouseGlow แทน
import { MouseGlow } from "./components/MouseGlow";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      {/* ใส่ Navbar ไว้บนสุด */}
      <MouseGlow />
      {/* <CursorFollower /> */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
