import ScrollReveal from "@/components/animate-ui/components/text/ScrollReveal";

export default function About() {
  return (
    <div className="px-4">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={20}
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a
        disease? No! When he ate a soup made out of a poisonous mushroom? No! A
        man dies when he is forgotten!
      </ScrollReveal>
    </div>
  );
}
