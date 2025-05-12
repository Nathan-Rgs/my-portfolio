import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      let el: HTMLElement | null = target;
      while (el && el !== document.body) {
        if (el.tagName === "DIV" && el.id) {
          const cliques = JSON.parse(localStorage.getItem("divClicks") || "[]");
          cliques.push({ id: el.id, timestamp: Date.now(), coords: {
            x: event.clientX,
            y: event.clientY,
          } });
          localStorage.setItem("divClicks", JSON.stringify(cliques));
          break;
        }
        el = el.parentElement;
      }
    };

    document.addEventListener("click", handleClick);

    const interval = setInterval(async () => {
      const stored = localStorage.getItem("divClicks");
      if (!stored) return;
    
      const cliques = JSON.parse(stored);
      if (cliques.length === 0) return;
    
      // Captura navegador
      const navegador = navigator.userAgent;
    
      // Captura coordenadas (última posição do clique)
      const lastClick = cliques[cliques.length - 1];
    
      try {
        await fetch("http://4.201.154.145:8000/api/click-track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            navegador,
            clicks: cliques,
            ip: '123'
          }),
        });
    
        localStorage.removeItem("divClicks");
      } catch (error) {
        console.error("Erro ao enviar cliques:", error);
      }
    }, 30000);
    

    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(interval);
    };
  }, []);

  return <Component {...pageProps} />;
}
