"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Loader2 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  number: z.string().min(1, "Number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ProblemForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const response = await axios.post("/api/contact", data);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <User className="size-4 text-apex-blue" />
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John"
                    className="focus:border-apex-blue transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <User className="size-4 text-apex-blue" />
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Doe"
                    className="focus:border-apex-blue transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Number */}
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-gray-700">
                <Phone className="size-4 text-apex-blue" />
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  placeholder="+44 123 456 7890"
                  className="focus:border-apex-blue transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-gray-700">
                <Mail className="size-4 text-apex-blue" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="john.doe@example.com"
                  className="focus:border-apex-blue transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-gray-700">
                <MessageSquare className="size-4 text-apex-blue" />
                Your Message
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className={cn(
                    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    "focus:border-apex-blue transition-all duration-300 resize-none"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full h-12 flex justify-center bg-apex-blue text-white gap-2 hover:bg-blue-600 transition-all duration-300 transform active:scale-[0.98]",
            "shadow-md hover:shadow-lg disabled:opacity-70 font-semibold text-base"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
