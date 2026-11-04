const ContentLoader = () => {
  return (
    <div data-testid="content-loader" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {new Array(9).fill("").map((i, key) => (
        <div
          key={key}
          className="h-24 bg-linear-to-r from-zinc-400 via-zinc-300 to-zinc-400 rounded-2xl animate-pulse shadow-md"
        />
      ))}
    </div>
  );
};

export default ContentLoader;
