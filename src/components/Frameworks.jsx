import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Outer circle skills (larger radius)
  const outerSkills = [
    "react",
    "tailwindcss",
    "git",
    "github",
    "javascript",
    "cplusplus",
    "threejs",
    "html5",
    "css3",
    "vitejs",
  ];

  // Middle circle skills (medium radius, reverse)
  const middleSkills = [
    "csharp",
    "dotnet",
    "blazor",
    "azure",
    "sqlite",
    "auth0",
    "stripe",
    "microsoftsqlserver",
  ];

  // Inner circle skills (smaller radius)
  const innerSkills = [
    "visualstudiocode",
    "dotnetcore",
    "wordpress",
    "microsoft",
  ];

  return (
    <div className="relative flex h-[18rem] md:h-[22rem] w-full flex-col items-center justify-center overflow-hidden">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={36} radius={150} duration={25} speed={1}>
        {outerSkills.map((skill, index) => (
          <Icon key={`outer-${index}`} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>

      {/* Middle Orbit (Reverse) */}
      <OrbitingCircles iconSize={30} radius={100} reverse duration={20} speed={1.2}>
        {middleSkills.map((skill, index) => (
          <Icon key={`middle-${index}`} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={24} radius={55} duration={15} speed={1.5}>
        {innerSkills.map((skill, index) => (
          <Icon key={`inner-${index}`} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img src={src} alt={alt} className="size-full object-contain duration-200 rounded-sm hover:scale-125 hover:brightness-125 drop-shadow-md" />
);
