import ScrollReveal from "@/components/animate-ui/components/text/ScrollReveal";

export default function About() {
  return (
    <div className="overflow-hidden md:my-20 my-10 max-w-7xl mx-auto">
      <ScrollReveal
        baseOpacity={0}
        rotationEnd="#23b33a"
        enableBlur={true}
        baseRotation={0}
        blurStrength={50}
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a
        disease? No! When he ate a soup made out of a poisonous mushroom? No! A
        man dies when he is forgotten!
      </ScrollReveal>
    </div>
  );
}
