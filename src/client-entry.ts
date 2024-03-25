const router = new Bun.FileSystemRouter({
    dir: "src/routes",
    style: "nextjs",
    fileExtensions: [
        ".tsx"
    ]
})

console.log(router);
