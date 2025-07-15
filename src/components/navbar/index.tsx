"use client";

import { useState } from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";
import { useMediaQuery } from "@/hooks/media-query/use-media-query";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen } = useMediaQuery();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "price",
      link: "#price",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
  ];

  return (
    <header className={` top-0 fixed  left-0  right-0 z-50 w-full`}>
      <>
        <Navbar>
          {!isOpen ? (
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-4">
                {/* <div className="w-20"></div> */}

                <NavbarButton variant="secondary" href="/contact-us">
                  Contact Us
                </NavbarButton>
                 <NavbarButton
                    variant="primary"
                    href="auth/sign-in"
                  >
                    Free Trial
                  </NavbarButton>
                {/* <NavbarButton variant="secondary">Book a call</NavbarButton>  */}
                {/* <Link href="/login">
                  <RainbowButton>Get Started</RainbowButton>
                </Link> */}
              </div>
            </NavBody>
          ) : (
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <NavbarButton variant="secondary" href="/contact-us">
                    Contact Us
                  </NavbarButton>
                  
                  <NavbarButton
                    variant="primary"
                    href="auth/sign-in"
                  >
                    Free Trial
                  </NavbarButton>

                  {/* <Link href="/login">
                  <RainbowButton>Get Started</RainbowButton>
                </Link> */}
                  {/* <RainbowButton /> */}
                </div>
              </MobileNavMenu>
            </MobileNav>
          )}
        </Navbar>
      </>
    </header>
  );
};
