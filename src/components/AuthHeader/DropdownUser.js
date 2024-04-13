"use client";
import { SignedIn, UserButton, currentUser } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

const DropdownUser = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="relative">
      <span className="flex items-center gap-4">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {isLoaded && user && `${user?.firstName} ${user?.lastName}`}
          </span>
          <span className="block text-xs">
            {isLoaded && user && user?.username}
          </span>
        </span>
        <span className="h-12 w-12 rounded-full flex items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </span>
      </span>
    </div>
  );
};

export default DropdownUser;
