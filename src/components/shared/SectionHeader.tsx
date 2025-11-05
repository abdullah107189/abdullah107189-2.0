const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="my-10 relative flex items-center justify-center">
      <h2 className="md:text-5xl text-3xl font-bold text-[#60f318] text-center md:my-5 my-3">
        {title}
      </h2>
      <h2 className="md:top-2 top-6 absolute md:text-9xl text-6xl font-bold text-[#60f318]/10 text-center">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
