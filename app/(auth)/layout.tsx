import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}
      <div className='auth-asset'>
        <div>
          <Image
            src='/icons/horizonHomePage.png'
            alt='Auth image'
            width={750}
            height={700}
          />
        </div>
      </div>
    </main>
  );
}
