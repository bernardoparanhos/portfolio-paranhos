// Tilt 3D + brilho que segue o cursor — o distintivo se comporta como um
// objeto fisico inclinando na mao. Usado nos nós da trilha (sem brilho) e no
// scan grande da ficha (com brilho). O wrapper precisa de `perspective`.

export function tiltMove(
  alvo: HTMLElement,
  e: React.MouseEvent,
  max: number,
  sheen?: HTMLElement | null,
) {
  const r = alvo.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  alvo.style.transition = "transform .08s ease";
  alvo.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max * 0.8}deg) scale(1.03)`;
  if (sheen) {
    sheen.style.background = `radial-gradient(circle at ${50 + px * 90}% ${50 + py * 90}%, rgba(255,255,255,.28), transparent 55%)`;
  }
}

export function tiltLeave(alvo: HTMLElement, sheen?: HTMLElement | null) {
  alvo.style.transition = "transform .45s ease";
  alvo.style.transform = "none";
  if (sheen) sheen.style.background = "none";
}
