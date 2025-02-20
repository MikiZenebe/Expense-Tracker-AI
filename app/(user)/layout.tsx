import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}
