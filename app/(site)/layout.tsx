import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import StickyWidget from "@/components/layout/StickyWidget";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <StickyWidget />
      <Footer />
    </>
  );
}
