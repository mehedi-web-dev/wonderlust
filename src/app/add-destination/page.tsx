import type { Metadata } from "next";
import { AddPackageForm } from "@/components/add-package-form";

export const metadata: Metadata = {
  title: "Add Travel Package – Wanderlust",
};

export default function AddDestinationPage() {
  return (
    <main className="min-h-screen bg-muted/30 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="font-heading text-4xl md:text-5xl">
          Add New Travel Package
        </h1>
        <div className="mx-auto mt-10 max-w-2xl md:mt-14">
          <AddPackageForm />
        </div>
      </div>
    </main>
  );
}
