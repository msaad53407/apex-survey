//@ts-nocheck
"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";
import { Building, HomeIcon } from "lucide-react";
import { InstantQuoteSchema } from "@/lib/schema";
import { services, subFields as renderSubFields } from "@/lib/constants";
import { CheckedState } from "@radix-ui/react-checkbox";
import { SubField } from "@/types";
import Counter from "../Counter";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Error from "../Error";

export const propertyType = [
  {
    id: "residential",
    label: "Residential",
    description: "Residential properties",
    icon: <HomeIcon className="size-8" />,
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "Commercial properties",
    icon: <Building className="size-8" />,
  },
];

interface InstantQuoteModalProps {
  trigger?: React.ReactNode;
  prefilledData?: {
    propertyType?: "residential" | "commercial";
    serviceIds?: string[];
  };
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const InstantQuoteModal = ({
  trigger,
  prefilledData,
  open: controlledOpen,
  onOpenChange,
}: InstantQuoteModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  const form = useForm<z.infer<typeof InstantQuoteSchema>>({
    resolver: zodResolver(InstantQuoteSchema),
  });
  const [subFields, setSubFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // State for loading
  const [hasSubmitted, setHasSubmitted] = useState(false); // State to track if the form has been
  const router = useRouter();

  // Prefill form data when modal opens with prefilledData
  useEffect(() => {
    if (open && prefilledData) {
      if (prefilledData.propertyType) {
        form.setValue("propertyType", prefilledData.propertyType);
      }
      if (prefilledData.serviceIds && prefilledData.serviceIds.length > 0) {
        const selectedServices = services.filter((service) =>
          prefilledData.serviceIds?.includes(service.id),
        );
        form.setValue("services", selectedServices);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, prefilledData]);

  async function onSubmit(data: z.infer<typeof InstantQuoteSchema>) {
    try {
      setLoading(true); // Set loading to true before API call
      const response = await axios.post("/api/order", data);
      const orderId = response.data.id;
      form.reset();
      setSubFields([]);
      toast.success("Quote Added moving to Checkout");
      router.push(`/checkout?orderId=${orderId}`);
    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast.error("Unsuccessful");
    } finally {
      setLoading(false); // Set loading to false after API call
      setHasSubmitted(true); // Set hasSubmitted to true after form submission attempt
    }
  }

  const handleChangeInPropertyType = (
    checked: CheckedState,
    itemId: string,
  ) => {
    if (checked) {
      form.setValue(
        "propertyType",
        itemId as z.infer<typeof InstantQuoteSchema>["propertyType"],
      );

      setSubFields([]);
      form.setValue("services", []);
    }
  };

  const handleChangeInService = (
    checked: CheckedState,
    item: z.infer<typeof InstantQuoteSchema>["services"][number],
  ) => {
    if (checked) {
      form.setValue(
        "services",
        Array.isArray(form.watch("services"))
          ? [...form.watch("services"), item]
          : [item],
      );
      setSubFields([]);
    } else {
      form.setValue(
        "services",
        form.watch("services")?.filter((value) => value.id !== item.id),
      );
      //filter out subfields of the current item from subFields array
      setSubFields([]);
    }
  };

  const renderSubFieldsOptions = (item: SubField) => {
    if (item.fieldType === "checkbox") {
      return item.options
        .filter((subFieldItem) =>
          // filtering subfields based on property type If services selected contain property type field.
          item.id === "property"
            ? subFieldItem.propertyType === form.watch("propertyType")
            : true,
        )
        .map((subFieldItem) => {
          return (
            <div key={subFieldItem.id} className="flex gap-2">
              <Checkbox
                key={subFieldItem.id}
                id={subFieldItem.id}
                value={subFieldItem.id}
                checked={form.watch(item.id) === subFieldItem.id}
                onCheckedChange={(checked) => {
                  if (checked) {
                    form.setValue(item.id, subFieldItem.id);
                  } else {
                    form.setValue(item.id, "");
                  }
                }}
                className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 size-4"
              />
              <Label
                className="w-full flex flex-row gap-2 items-center"
                htmlFor={subFieldItem.id}
              >
                <p className="text-small font-medium">{subFieldItem.label}</p>
              </Label>
            </div>
          );
        });
    }

    if (item.fieldType === "counter") {
      return (
        <div
          key={item.id}
          className="flex gap-2 items-center justify-between w-full"
        >
          <Label
            htmlFor={item.id}
            className="w-full flex flex-row gap-2 items-center"
          >
            <p className="text-small font-medium">{item.label}</p>
          </Label>
          <Counter
            value={form.watch(item.id) ?? "1"}
            onChange={(value) => {
              form.setValue(item.id, String(value));
            }}
            className="w-max"
          />
        </div>
      );
    }

    return (
      <div className="w-full flex items-center">
        <Select onValueChange={(value) => form.setValue(item.id, value)}>
          <SelectTrigger>
            <SelectValue placeholder="Area m²" />
          </SelectTrigger>
          <SelectContent>
            {item.options.map((subFieldItem) => (
              <SelectItem key={subFieldItem.id} value={`${subFieldItem.id}m²`}>
                {subFieldItem.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  useEffect(() => {
    setSubFields((prev) => {
      const newFields: string[] | undefined = form
        .watch("services")
        ?.map((item) => item.subFields)
        ?.flat();

      // remove duplicates from newFields array
      const uniqueFields: string[] | undefined = newFields?.filter(
        (item, index) => newFields.indexOf(item) === index,
      );

      if (uniqueFields?.length <= 0 || !uniqueFields) {
        return prev;
      }

      return [...prev, ...uniqueFields];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("services")]);

  const allErrors = () => {
    return Object.values(form.formState.errors).map((error) => (
      <Error key={error.message} message={error.message ?? ""} />
    ));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="w-1/2 text-center text-btn text-white bg-apex-blue hover:bg-apex-blue"
          >
            Quote Now
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-[95%] sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-sm no-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-h4">Get Instant Quote</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:px-11 px-7 w-full"
        >
          <div className="w-full flex flex-col gap-4">
            <Label htmlFor="propertyType" className="!text-h5 text-center">
              Select Property Type:
            </Label>
            {form.getFieldState("propertyType").error && (
              <p className="text-red-500 text-small">
                {form.getFieldState("propertyType").error?.message}
              </p>
            )}
            <div className="flex flex-col md:flex-row gap-4 items-center w-full">
              {propertyType.map((item) => (
                <Checkbox
                  key={item.id}
                  id={item.id}
                  value={item.id}
                  checked={form.watch("propertyType") === item.id}
                  onCheckedChange={(checked) =>
                    handleChangeInPropertyType(checked, item.id)
                  }
                  className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3 w-full md:w-1/2"
                >
                  <Label
                    className="w-full flex flex-col gap-2 items-center p-4"
                    htmlFor={item.id}
                  >
                    {item.icon}
                    <h5 className="text-para sm:text-h5 font-bold">
                      {item.label}
                    </h5>
                    <p className="text-small">{item.description}</p>
                  </Label>
                </Checkbox>
              ))}
            </div>
          </div>
          {form.watch("propertyType") && (
            <div className="w-full flex flex-col gap-4">
              <Label htmlFor="services" className="!text-h5 text-center">
                Select Your Services:
              </Label>
              {form.getFieldState("services").error && (
                <p className="text-red-500 text-small">
                  {form.getFieldState("services").error?.message}
                </p>
              )}
              <div className="grid grid-cols-1 gap-4 w-full">
                {services
                  .filter((service) =>
                    service.servicePropertyType.includes(
                      form.watch("propertyType"),
                    ),
                  )
                  .map((item) => (
                    <Checkbox
                      key={item.id}
                      id={item.id}
                      value={item.id}
                      checked={form
                        .watch("services")
                        ?.some((value) => value.id === item.id)}
                      onCheckedChange={(checked) =>
                        handleChangeInService(checked, item)
                      }
                      className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3"
                    >
                      <Label
                        className="w-full flex flex-row gap-2 items-center"
                        htmlFor={item.id}
                      >
                        <p className="text-small font-medium text-start">
                          {item.label}
                        </p>
                      </Label>
                    </Checkbox>
                  ))}
              </div>
            </div>
          )}
          {renderSubFields
            .filter((item) => subFields.includes(item.id))
            .map((item, index) => {
              return (
                <>
                  <div className="w-full flex flex-col gap-4" key={index}>
                    <Label htmlFor={item.id} className="!text-btn">
                      Select {item.label}:
                    </Label>
                    {form.getFieldState(item.id).error && (
                      <p className="text-red-500 text-small">
                        {form.getFieldState(item.id).error?.message}
                      </p>
                    )}
                    <div
                      className={cn(
                        "grid gap-4 w-full",
                        item.fieldType === "counter" ||
                          item.fieldType === "dropdown"
                          ? "grid-cols-1"
                          : "grid-cols-1 md:grid-cols-2",
                      )}
                    >
                      {renderSubFieldsOptions(item)}
                    </div>
                  </div>
                  <hr className="my-4 w-full bg-apex-grey-light" />
                </>
              );
            })}
          {hasSubmitted && allErrors()}{" "}
          {/* Show all errors above the button after form submission attempt */}
          {form.watch("propertyType") && form.watch("services") && (
            <Button
              type="submit"
              className="w-full text-white p-2 bg-apex-blue hover:bg-apex-blue relative"
              disabled={loading} // Disable button while loading
              onClick={() => {
                setHasSubmitted(true);
              }}
            >
              {loading && ( // Show loader if loading is true
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
                  </div>
                </div>
              )}
              <span className={loading ? "opacity-0" : "opacity-100"}>
                Place Order
              </span>
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InstantQuoteModal;
