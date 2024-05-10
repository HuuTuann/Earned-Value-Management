"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const BreadcrumbNavigation = () => {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop() as
    | "activity-and-week-input"
    | "value-input"
    | "result";

  const breadcrumbMap = [
    {
      name: "activity-and-week-input",
      label: "Activity and Week Input",
      href: "/earned-value-management/activity-and-week-input",
    },
    {
      name: "value-input",
      label: "Value Input",
      href: "/earned-value-management/value-input",
    },
    {
      name: "result",
      label: "Result",
      href: "/earned-value-management/result",
    },
  ];

  return (
    <Breadcrumb className="w-full">
      <BreadcrumbList>
        {breadcrumbMap.map((breadcrumb, index) => {
          const isLast = index === breadcrumbMap.length - 1;
          const isActive = breadcrumb.name === currentPage;

          return (
            <React.Fragment key={breadcrumb.name}>
              <BreadcrumbItem>
                {isActive ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <>
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                </>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;
