import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:block relative bg-riso-black w-full md:min-h-[500px] lg:min-h-[930px] overflow-hidden">
      {/* Decorative SVG Shapes Layer - Each with Unique Personality */}
      <div className="absolute inset-0">

        {/* 1. Moon → Float (dreamy) */}
        <img
          src="/images/footer section/moon.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-float absolute top-[56%] left-[24%] w-24 h-20 lg:w-32 lg:h-28 cursor-pointer"
        />

        {/* 2. "B" → Wiggle (excited) */}
        <img
          src="/images/footer section/B.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-wiggle absolute top-[73%] left-[53%] w-28 h-24 lg:w-36 lg:h-32 cursor-pointer"
        />

        {/* 3. "M" → Spin (dizzy) */}
        <img
          src="/images/footer section/m.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-spin absolute top-[47%] left-[70%] w-32 h-28 lg:w-40 lg:h-36 cursor-pointer"
        />

        {/* 4. Circle → Bounce (playful) */}
        <img
          src="/images/footer section/circle.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-bounce absolute top-[11%] left-[36%] w-24 h-24 lg:w-32 lg:h-32 cursor-pointer"
        />

        {/* 5. Star → Rotate slowly (magical) */}
        <img
          src="/images/footer section/star.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-rotate absolute top-[37%] left-[47%] w-28 h-28 lg:w-36 lg:h-36 cursor-pointer"
        />

        {/* 6. "U" → Wobble (jello) */}
        <img
          src="/images/footer section/shape-u.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-wobble absolute top-[23%] left-[9%] w-24 h-24 lg:w-32 lg:h-32 cursor-pointer"
        />

        {/* 7. Teardrop → Drift side-to-side (graceful) */}
        <img
          src="/images/footer section/teardrop.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-drift absolute top-[11%] left-[78%] w-32 h-30 lg:w-44 lg:h-40 cursor-pointer"
        />

        {/* 8. Square → Tilt (curious) */}
        <img
          src="/images/footer section/shape-square.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-tilt absolute top-[76%] left-[86%] w-20 h-28 lg:w-24 lg:h-36 cursor-pointer"
        />

        {/* 9. Triangle → Shake (nervous) */}
        <img
          src="/images/footer section/shape-triangle.svg"
          alt=""
          aria-hidden="true"
          className="footer-shape footer-shape-shake absolute top-[73%] left-[6%] w-28 h-28 lg:w-36 lg:h-36 cursor-pointer"
        />

      </div>
    </footer>
  );
};

export default Footer;
