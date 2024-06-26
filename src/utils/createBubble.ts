export const createBubble = (x: number, y: number, parent: HTMLElement) => {
  // 파티클 생성
  const particle = document.createElement("p");
  particle.className = "bubble";
  parent.appendChild(particle);

  // 파티클 스타일 적용
  const size = Math.floor(Math.random() * 20 + 10);
  particle.style.position = "absolute";
  particle.style.left = "0px";
  particle.style.top = "0px";

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = `rgb(255, 255, 255)`;

  // 애니메이션
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  const animation = particle.animate(
    [
      {
        transform: `translate(${x}px, ${y}px)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1500 + Math.random() * 1000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 500,
    }
  );

  animation.onfinish = () => {
    particle.remove();
  };
};
