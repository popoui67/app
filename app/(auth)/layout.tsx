
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className=" flex flex-centre items-centre justify-center ">
{children}
</div>
      
  );
}
