"use client";

import { User } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DoorOpen, UserIcon } from "lucide-react";
import { signOut } from "next-auth/react";

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer flex items-center gap-2 focus:outline-none">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={user?.image || "/blank-user.jpg"}
            alt="image user"
          />
        </Avatar>
        <p className="font-medium">{user?.name}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-background -mr-1"
        side="bottom"
        align="end"
      >
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem className="cursor-pointer">
              <UserIcon className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Profile</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <DoorOpen className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
