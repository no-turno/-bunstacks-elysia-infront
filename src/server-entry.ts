const fileSystem = new Bun.FileSystemRouter({
  dir: "./src/routes",
  style: "nextjs",
  fileExtensions: [".ts"],
});

fileSystem.ctx = new Set();

export { fileSystem };
