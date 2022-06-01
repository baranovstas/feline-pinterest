function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        margin: "0 auto",
        background: "none",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
      }}
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#354aba"
        strokeWidth="12"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        style={{
          animationPlayState: "running",
          animationDelay: "0s"
        }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          style={{
            animationPlayState: "running",
            animationDelay: "0s"
          }}>
        </animateTransform>
      </circle>
    </svg>
  );
}

export default Spinner;