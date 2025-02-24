import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span>Course-Cherchary</span>
            </Link>

            <SearchInput />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <nav>
              <SignedIn>
                <Link
                  prefetch={false}
                  href="/my-courses"
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:border-md md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="w-4 h-4" />
                  <span className="hidden md:block">My Courses</span>
                </Link>
              </SignedIn>
            </nav>

            <DarkModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
