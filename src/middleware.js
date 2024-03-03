import { NextResponse } from "next/server";

export default function middleware(req, event) {
  console.log(req.nextUrl.pathname);
  event.waitUntil(
    fetch("http://localhost:3000/api/hello", {
      method: "GET",
    }).then(async (res) => {
      res = await res.json();
      console.log(res);
    })
  );
  return NextResponse.next();
}
export const config = {
  matcher: "/api/:path*",
};
