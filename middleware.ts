import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const access = req.cookies.get("Access");
  const url = req.nextUrl.pathname;

  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://aplicacionmarveldayanaotagri.vercel.app/";

  if (url.includes("CompraConfirmacion")) {
    if(!access){
      return NextResponse.redirect(server);
    }
  }

};

middleware