import { useEffect, useRef } from "react";
import useMouse from "../../hooks/useMouse";
import gsap from "gsap";

const Stickers = () => {
  const smile = useRef<HTMLDivElement>(null!);
  const { x, y } = useMouse();

  useEffect(() => {
    const opt = {
      duration: 1,
      ease: "power3.out",
    };
    gsap.set(smile.current, { xPercent: 0, yPercent: 0 });
    const xTo = gsap.quickTo(smile.current, "x", opt);
    const yTo = gsap.quickTo(smile.current, "y", opt);

    xTo(x * 0.05);
    yTo(y * 0.05);
  }, [x, y]);

  // 별 두개는 커서에서 빼고 양사이드 빈부분에 스케일이나 투명도 애니메이션 돌려놓기

  return (
    <div
      ref={smile}
      className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full max-w-[1440px] h-full">
        <svg
          style={{
            rotate: "20deg",
          }}
          className="absolute top-[30%] left-[50px]"
          width="300px"
          height="300px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="primary"
            d="M21,15H15.49A13.17,13.17,0,0,1,3,6"
            fill="none"
            stroke="#38d9f9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <polyline
            id="primary-2"
            data-name="primary"
            points="18 18 21 15 18 12"
            fill="none"
            stroke="#38d9f9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>

        {/* smile */}
        <svg
          className="absolute top-[55%] left-[65%]"
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14C7.44771 14 7 14.4477 7 15C7 15.5523 7.44771 16 8 16H15.9991C16.5514 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8Z"
            fill="#f3f326"
          />
          <path
            d="M10.7041 7.2924C10.3141 6.90253 9.68178 6.90253 9.29176 7.2924L8.49735 8.0865L7.70797 7.29743C7.31795 6.90756 6.68561 6.90756 6.29559 7.29743C5.90557 7.6873 5.90556 8.3194 6.29558 8.70926L7.08496 9.49833L6.29251 10.2905C5.9025 10.6803 5.90249 11.3124 6.29251 11.7023C6.68254 12.0922 7.31488 12.0922 7.7049 11.7023L8.49735 10.9102L9.2951 11.7076C9.68512 12.0975 10.3175 12.0975 10.7075 11.7076C11.0975 11.3177 11.0975 10.6856 10.7075 10.2958L9.90974 9.49833L10.7041 8.70424C11.0942 8.31437 11.0942 7.68227 10.7041 7.2924Z"
            fill="#f3f326"
          />
          <path
            d="M16.2918 7.2924C16.6818 6.90253 17.3141 6.90253 17.7041 7.2924C18.0942 7.68227 18.0942 8.31437 17.7041 8.70424L16.9097 9.49833L17.7075 10.2958C18.0975 10.6856 18.0975 11.3177 17.7075 11.7076C17.3175 12.0975 16.6851 12.0975 16.2951 11.7076L15.4974 10.9102L14.7049 11.7023C14.3149 12.0922 13.6825 12.0922 13.2925 11.7023C12.9025 11.3124 12.9025 10.6803 13.2925 10.2905L14.085 9.49833L13.2956 8.70926C12.9056 8.3194 12.9056 7.6873 13.2956 7.29743C13.6856 6.90756 14.318 6.90756 14.708 7.29743L15.4974 8.0865L16.2918 7.2924Z"
            fill="#f3f326"
          />
          <path
            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
            fill="#f3f326"
          />
        </svg>
      </div>
    </div>
  );
};

export default Stickers;
