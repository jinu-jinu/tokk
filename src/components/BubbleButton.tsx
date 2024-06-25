import { MouseEvent } from "react";

// mouse enter로 변경

const BubbleButton = () => {
  const createParticle = (x, y) => {
    // 파티클 생성
    const particle = document.createElement("p");
    particle.className = "bubble";
    document.body.appendChild(particle);

    // 파티클 스타일 적용
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

    // 애니메이션
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    const animation = particle.animate(
      [
        {
          transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
          opacity: 1,
        },
        {
          transform: `translate(${destinationX}px, ${destinationY}px)`,
          opacity: 0,
        },
      ],
      {
        duration: 500 + Math.random() * 1000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: Math.random() * 200,
      }
    );

    animation.onfinish = () => {
      particle.remove();
    };
  };

  const onClickBubbleButton = (e: MouseEvent) => {
    for (let i = 0; i < 30; i++) {
      createParticle(e.clientX, e.clientY);
    }
  };

  return <button onClick={onClickBubbleButton}>click</button>;
};

export default BubbleButton;
