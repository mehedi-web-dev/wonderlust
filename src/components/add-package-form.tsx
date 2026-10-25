"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackagePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

const API_URL = "http://localhost:8000/add-destination";

const categoryOptions = [
  "Beach",
  "Mountain",
  "City Tour",
  "Adventure",
  "Honeymoon",
];

const fieldClass = "h-9 rounded-md border-input bg-input/50 px-3";

type PackageData = {
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

type PackageField = keyof PackageData;

const emptyPackage: PackageData = {
  destinationName: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

export function AddPackageForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<PackageData>({ ...emptyPackage });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(field: PackageField, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
        }),
      });

      const responseText = await response.text();

      let result: { message?: string } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = { message: responseText };
        }
      }

      if (!response.ok) {
        throw new Error(
          result.message || `Request failed with status ${response.status}`,
        );
      }

      setSuccess(result.message || "Travel package added successfully!");

      setFormData({ ...emptyPackage });

      router.refresh();
    } catch (err) {
      console.error("Failed to add travel package:", err);

      if (err instanceof TypeError) {
        setError(
          "Could not connect to the backend. Check that your server is running and CORS is configured.",
        );
      } else {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-border bg-white px-5 py-8 md:px-14 md:py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Success message */}
        {success && (
          <div
            role="status"
            className="mb-3 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700"
          >
            {success}
          </div>
        )}

        {/* Error message */}
        {error && (
          <div
            role="alert"
            className="mb-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Destination name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="destination-name">Destination Name</Label>

          <Input
            id="destination-name"
            name="destinationName"
            placeholder="Bali Paradise"
            value={formData.destinationName}
            onChange={(event) =>
              handleChange("destinationName", event.target.value)
            }
            required
            disabled={isSubmitting}
            className={fieldClass}
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Country */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="country">Country</Label>

            <Input
              id="country"
              name="country"
              placeholder="Indonesia"
              value={formData.country}
              onChange={(event) => handleChange("country", event.target.value)}
              required
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="category">Category</Label>

            <Select
              value={formData.category}
              onValueChange={(value) => {
                if (value !== null) handleChange("category", value);
              }}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger
                id="category"
                className={`${fieldClass} w-full bg-white`}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                {categoryOptions.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="price">Price (USD)</Label>

            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 1299"
              value={formData.price}
              onChange={(event) => handleChange("price", event.target.value)}
              required
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="duration">Duration</Label>

            <Input
              id="duration"
              name="duration"
              placeholder="e.g. 7 Days/6 Nights"
              value={formData.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>

          {/* Departure date */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label htmlFor="departure-date">Departure Date</Label>

            <Input
              id="departure-date"
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={(event) =>
                handleChange("departureDate", event.target.value)
              }
              required
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label htmlFor="image-url">Image URL</Label>

            <Input
              id="image-url"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.imageUrl}
              onChange={(event) => handleChange("imageUrl", event.target.value)}
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 flex flex-col gap-1.5">
          <Label htmlFor="description">Description</Label>

          <Textarea
            id="description"
            name="description"
            placeholder="Describe the travel experience..."
            value={formData.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
            disabled={isSubmitting}
            className="min-h-28 rounded-md border-input bg-input/50 px-3 py-2"
          />
        </div>

        {/* Submit button */}
        <div className="mt-8 flex flex-col-reverse justify-end gap-3 sm:flex-row">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="gap-2 bg-brand px-6 font-medium text-white hover:bg-brand/85"
          >
            <PackagePlus aria-hidden="true" />

            {isSubmitting ? "Adding Package..." : "Add Travel Package"}
          </Button>
        </div>
      </form>
    </div>
  );
}
