import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function FooterSection() {
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Services" },
    { href: "#", label: "Projects" },
    { href: "#", label: "News" },
  ];

  return (
    <footer className="border-t mt-32 border-[#49535B]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row-reverse">
          <Button
            variant={"ghost"}
            size="sm"
            className="text-muted-foreground -mx-2"
            asChild
          >
            <a href="#">
              <Mail className="size-4" />
              contact@medixa.kasimsaifi.in
            </a>
          </Button>
          <p className="text-muted-foreground text-sm/6">
            © 2026 Medixa. Helping you make better health decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
