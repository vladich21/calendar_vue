type GetResponseParams = {
  responseBody?: any
  status?: number
  delay?: number
}

interface FakeResponseInterface {
  setStatus: (status: number) => this
  setDelay: (delay: number) => this
  setResponseBody: (body: any) => this
  create: () => Promise<Response>
}

class FakeResponse implements FakeResponseInterface {
  status: number
  delay: number
  responseBody: string | undefined

  constructor() {
    this.status = 200
    this.delay = 500
    this.responseBody = undefined
  }

  setDelay(delay: number) {
    this.delay = delay
    return this
  }

  setStatus(status: number) {
    this.status = status
    return this
  }

  setResponseBody(body: any) {
    this.responseBody = JSON.stringify(body)
    return this
  }
  
  async create() {
    await new Promise((resolve) => setTimeout(() => resolve(null), this.delay))
    return new Response(this.responseBody, { status: this.status })
  }

}

const fakeResponse = new FakeResponse()
self.addEventListener('fetch', (event: any) => {
  const requestUrl = event.request.url

  if (requestUrl.includes('api/sign-up')) {
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .create()
      )
  }
  if (requestUrl.includes('api/registration')) {
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .setDelay(1000)
        .create()
      )
  }
})
