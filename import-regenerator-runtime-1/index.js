main()

async function main() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('hello, babel regenerator runtime')
      resolve()
    }, 1000)
  })
}
