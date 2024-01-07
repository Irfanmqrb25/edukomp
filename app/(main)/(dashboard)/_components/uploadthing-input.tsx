"use client";

import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/uploadthing";

interface UploadThingInputProps {
  onChange: (url?: string) => void;
  value: string;
}

const UploadThingInput: React.FC<UploadThingInputProps> = ({
  onChange,
  value,
}) => {
  return (
    <div className="flex items-center gap-10">
      <div className="relative w-24 h-24">
        <Image
          fill
          src={value}
          alt="Upload"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <UploadButton
        appearance={{
          button: cn(
            buttonVariants({ variant: "outline" }),
            "text-black dark:text-white"
          ),
          container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
          allowedContent: "hidden",
        }}
        content={{
          button({ ready, isUploading = true, uploadProgress }) {
            if (ready) return "Upload New Image";
            if (isUploading) return `Uploading... ${uploadProgress}%`;

            return "Getting ready...";
          },
        }}
        endpoint="imageUpload"
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default UploadThingInput;
