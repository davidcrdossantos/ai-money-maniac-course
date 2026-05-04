import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { hasPurchased: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { hasPurchased: true },
    });

    return NextResponse.json({ 
      hasPurchased: user?.hasPurchased ?? false 
    });
  } catch (error) {
    console.error('Error checking purchase status:', error);
    return NextResponse.json(
      { hasPurchased: false, error: 'Failed to check purchase status' },
      { status: 500 }
    );
  }
}
