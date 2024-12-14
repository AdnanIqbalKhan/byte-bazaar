"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, User, Menu, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
type NavLinkProps = {
  href: string;
  label: string;
  isMobile?: boolean;
};

const NavLink = ({ href, label, isMobile = false }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const baseStyles = "transition-colors duration-200";
  const activeStyles = "text-primary font-semibold";
  const inactiveStyles = "text-muted-foreground hover:text-primary";
  const mobileStyles = isMobile ? "block w-full py-2 px-4" : "";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${
        isActive ? activeStyles : inactiveStyles
      } ${mobileStyles}`}
    >
      {label}
    </Link>
  );
};

const NavIcons = ({
  href,
  label,
  isMobile = false,
  icon: Icon,
}: NavLinkProps & { icon: any }) => {
  const router = useRouter();
  if (isMobile) {
    return (
      <Link
        href={href}
        className="flex items-center gap-4 rounded-lg px-4 py-3 text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
      >
        <Icon className="h-6 w-6" />
        <span>{label}</span>
      </Link>
    );
  } else {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-zinc-700 hover:text-zinc-900"
        onClick={() => router.push(href)}
      >
        <Icon className="h-5 w-5" />
      </Button>
    );
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/categories",
      label: "Categories",
    },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Sale", href: "/sale" },
  ];

  const icons = [
    { label: "Search", href: "/search", icon: Search },
    { label: "Theme Toggle", href: "", icon: ThemeToggle },
    {
      label: "Wishlist",
      href: "/wishlist",
      icon: Heart,
    },
    {
      label: "Cart",
      href: "/cart",
      icon: ShoppingCart,
    },
    {
      label: "Account",
      href: "/account",
      icon: User,
    },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold">Store</h1>
            </Link>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {routes.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden items-center space-x-2 md:flex">
              {icons.map(({ href, label, icon: Icon }) => (
                <NavIcons key={href} href={href} label={label} icon={Icon} />
              ))}
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col space-y-4">
                    {routes.map(({ href, label }) => (
                      <NavLink
                        key={href}
                        href={href}
                        label={label}
                        isMobile={true}
                      />
                    ))}
                  </div>
                  <div className="mt-8 border-t border-zinc-100 pt-8">
                    <div className="space-y-1">
                      {icons.map(({ href, label, icon: Icon }) => (
                        <NavIcons
                          key={href}
                          href={href}
                          label={label}
                          icon={Icon}
                          isMobile
                        />
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
