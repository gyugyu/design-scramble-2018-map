const fetch = require('node-fetch')

const main = async () => {
  const res = await fetch('https://designscramble.jp/')
  const text = await res.text()
  const found = text.match(/window\.__NUXT__=(.+?);<\/script>/)
  const parsed = JSON.parse(found[1])
  console.log(JSON.stringify(parsed.state.programs))
}

main()
