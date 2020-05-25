const url = Deno.args[0]
const res = await fetch(url)

const body = await res.json()
console.log(body)
