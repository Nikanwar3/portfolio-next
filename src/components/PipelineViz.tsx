"use client";

import { useEffect, useRef } from "react";

const STAGES = ["INGEST", "PROCESS", "INDEX", "SERVE"];

type Packet = { t: number; y: number; speed: number };

export default function PipelineViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let packets: Packet[] = [];
    let raf = 0;
    let lastSpawn = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const nodeX = (i: number) => (w / (STAGES.length + 1)) * (i + 1);
    const nodeY = () => h * 0.42;

    function colors() {
      const cs = getComputedStyle(document.documentElement);
      return {
        accent: cs.getPropertyValue("--accent").trim(),
        faint: cs.getPropertyValue("--faint").trim(),
        border: cs.getPropertyValue("--border-strong").trim(),
      };
    }

    function draw() {
      if (!ctx) return;
      const c = colors();
      ctx.clearRect(0, 0, w, h);
      const y = nodeY();

      ctx.strokeStyle = c.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(nodeX(0), y);
      ctx.lineTo(nodeX(STAGES.length - 1), y);
      ctx.stroke();

      STAGES.forEach((label, i) => {
        const x = nodeX(i);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = c.accent;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 11, 0, Math.PI * 2);
        ctx.strokeStyle = c.border;
        ctx.stroke();

        ctx.font = "500 10px var(--font-geist-mono), monospace";
        ctx.fillStyle = c.faint;
        ctx.textAlign = "center";
        ctx.fillText(label, x, y + 28);
      });

      packets.forEach((p) => {
        const span = nodeX(STAGES.length - 1) - nodeX(0);
        const x = nodeX(0) + span * p.t;
        ctx.beginPath();
        ctx.rect(x - 3, p.y - 3, 6, 6);
        ctx.fillStyle = c.accent;
        ctx.fill();
      });
    }

    function spawn() {
      packets.push({ t: 0, y: nodeY() + (Math.random() * 18 - 9), speed: 0.006 + Math.random() * 0.004 });
    }

    function tick(ts: number) {
      if (ts - lastSpawn > 650) {
        spawn();
        lastSpawn = ts;
      }
      packets = packets.filter((p) => p.t < 1).map((p) => ({ ...p, t: p.t + p.speed }));
      draw();
      raf = requestAnimationFrame(tick);
    }

    if (reduceMotion) {
      packets = [
        { t: 0.22, y: nodeY(), speed: 0 },
        { t: 0.55, y: nodeY() - 6, speed: 0 },
        { t: 0.82, y: nodeY() + 5, speed: 0 },
      ];
      draw();
    } else {
      raf = requestAnimationFrame(tick);
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const retheme = () => draw();
    mq.addEventListener?.("change", retheme);

    return () => {
      window.removeEventListener("resize", resize);
      mq.removeEventListener?.("change", retheme);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[260px] block" />;
}
