import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('hit api')
  
  const { username, password } = data;

  if (username === 'admin' && password === 'password') {
    const user = {
      userId: '12345',
      username: 'admin',
      token: 'abc123xyz456token',
      expiresIn: 3600,
    };

    return NextResponse.json(
      {
        success: true,
        status: 'success',
        message: 'Login successful',
        data: user,
      }
    );
  } else {
    return NextResponse.json(
      { 
        success: false,
        status: 'error',
        message: 'Invalid username or password',
      }
    );
  }
}
