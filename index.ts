const url = Deno.args[0]
const res = await fetch(url)

// JSON Version
console.log('JSON Version')
const body = await res.json()
console.log(body)

// Stream Version
console.log('Stream Version')
const bodyStream = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(bodyStream)
