import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  await middlewareRoutesAPI(req, res)

  // Needs to be the last one, so redirect works properly
  return middlewareAuthPages(req, res)
}

async function middlewareRoutesAPI(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname.startsWith('/api')) {
    const supabase = createMiddlewareClient({ req, res })

    await supabase.auth.getSession()
  }
}

async function middlewareAuthPages(req: NextRequest, res: NextResponse) {
  const protectedPages = ['/auth/password-update']

  if (req.nextUrl.pathname.startsWith(protectedPages[0])) {
    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.user) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/'
      redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }
}
