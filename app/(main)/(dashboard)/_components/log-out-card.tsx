"use client";

import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogOutCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Out Account</CardTitle>
        <CardDescription>Log out of your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-red-500 border-red-500" variant="outline">
              Log Out Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Logout</DialogTitle>
              <DialogDescription>
                Are you sure you want log out of your account?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className="ml-auto" variant="outline">
                Cancel
              </Button>
              <Button onClick={() => signOut()}>Logout</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default LogOutCard;
