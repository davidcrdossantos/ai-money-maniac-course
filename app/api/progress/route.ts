import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = (session.user as any).id;
    const progress = await prisma.lessonProgress.findMany({
      where: { userId, completed: true },
    });
    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = (session.user as any).id;
    const { moduleId, lessonId, completed } = await req.json();
    const progress = await prisma.lessonProgress.upsert({
      where: { userId_moduleId_lessonId: { userId, moduleId, lessonId } },
      update: { completed, completedAt: completed ? new Date() : null },
      create: { userId, moduleId, lessonId, completed, completedAt: completed ? new Date() : null },
    });
    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}