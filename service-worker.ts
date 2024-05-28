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
    await new Promise((resolve) => setTimeout(resolve, this.delay))
    return new Response(this.responseBody, { status: this.status, headers: { 'Content-Type': 'application/json' } })
  }
}

const fakeResponse = new FakeResponse()

self.addEventListener('fetch', (event: FetchEvent) => {
  const requestUrl = new URL(event.request.url)

  if (requestUrl.pathname.includes('/api/sign-up')) {
    console.log('Intercepting /api/sign-up')
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .setResponseBody({ message: 'User signed up successfully' })
        .create()
    )
  } else if (requestUrl.pathname.includes('/api/forgot-password')) {
    console.log('Intercepting /api/forgot-password')
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .setResponseBody({ message: 'Password reset link sent' })
        .create()
    )
  } else if (requestUrl.pathname.includes('/api/sign-in')) {
    console.log('Intercepting /api/sign-in')
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .setResponseBody({ message: 'User signed in successfully' })
        .create()
    )
  }
  if (requestUrl.pathname.includes('api/registration')) {
    event.respondWith(
      fakeResponse
        .setStatus(200)
        .setDelay(1000)
        .create()
      )
  }
  if(requestUrl.pathname.includes('api/authorization-status')) {
    event.respondWith(
      fakeResponse
        .setStatus(401)
        .setDelay(1000)
        .create()
      )
  }
})
