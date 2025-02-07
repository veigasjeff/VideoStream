import { type NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "superdata.json")

export async function GET() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8")
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    console.error("Error reading data:", error)
    return NextResponse.json({ error: "Error reading data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    await fs.writeFile(dataFilePath, JSON.stringify(body, null, 2))
    return NextResponse.json({ message: "Data updated successfully" })
  } catch (error) {
    console.error("Error writing data:", error)
    return NextResponse.json({ error: "Error writing data" }, { status: 500 })
  }
}

