import type { Metadata } from 'next';
import type { Message } from 'ai';
import { zoro } from '@/assets/images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Chat } from './chat';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Bot',
  description: 'My personal AI Chat Bot called Zoro which speaks about me',
};

interface BotPageProps {
  searchParams: {
    prompt?: string;
  };
}

export default function BotPage({ searchParams: { prompt } }: BotPageProps) {
  const initialMessages = Boolean(prompt)
    ? []
    : (JSON.parse(
        cookies().get('messages')?.value ?? JSON.stringify([])
      ) as Message[]);
  return (
    <section className='space-y-4'>
      <header className='flex items-center gap-3'>
        <Avatar className='ring ring-green-500 sm:h-12 sm:w-12'>
          <AvatarImage alt='zoro' src={zoro.src} />
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
        <h1 className='animate-pulse bg-gradient-to-br from-green-900 to-green-400 bg-clip-text font-mono text-2xl font-bold italic text-transparent sm:text-3xl'>
          Zoro
        </h1>
      </header>
      <Chat initialMessages={initialMessages} />
    </section>
  );
}
