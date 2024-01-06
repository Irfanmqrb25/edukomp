"use client";

import { useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { toast } from "sonner";
import { CheckCircle2, Copy } from "lucide-react";

interface CopyLinkProps {
  src: string;
}

const CopyLink: React.FC<CopyLinkProps> = ({ src }) => {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    setIsCopied(true);
    navigator.clipboard.writeText(src);
    toast.success("Link copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-full">
        <Input
          readOnly
          value={src}
          className="focus-visible:ring-0 focus-visible:ring-offset-0 pl-20 border-brand font-medium"
        />
        <div className="absolute top-0 h-full flex items-center justify-center px-2 rounded-l-md bg-brand text-white">
          Source
        </div>
      </div>
      <Button
        aria-label="Copy link"
        size="icon"
        onClick={copyToClipboard}
        className="bg-brand hover:bg-brand/80"
      >
        {isCopied ? (
          <CheckCircle2 size={20} color="green" fill="white" />
        ) : (
          <Copy size={18} className="dark:text-white" />
        )}
      </Button>
    </div>
  );
};

export default CopyLink;
