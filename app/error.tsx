"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeftIcon, RefreshCwIcon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      role="alert"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      <strong className="font-bold">Oops! Something went wrong:</strong>
      <p className="mt-2">{error.message}</p>
      <Button
        onClick={reset}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </Button>
    </div>
  );
}
