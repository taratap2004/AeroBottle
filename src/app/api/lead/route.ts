import { NextResponse } from "next/server"


export async function POST(req: Request) {
    const body = await req.formData()
    const lead = Object.fromEntries(body.entries())
    // TODO: send to CRM / email / Google Sheet
    console.log("New lead:", lead)
    return NextResponse.redirect(new URL("/thank-you", req.url))
}