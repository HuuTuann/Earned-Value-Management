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
  const pageMap = pathname.split("/");

  const currentPage = pageMap[pageMap.length - 1];

  const breadcrumbMap = [
    {
      name: "",
      label: "Home",
      href: "/",
    },
    {
      name: "earned-value-management",
      label: "Earned Value Management",
      href: "/earned-value-management",
    },
    {
      name: "use-case-point",
      label: "Use Case Point",
      href: "/use-case-point",
    },
    {
      name: "result",
      label: "Result",
      href: "/earned-value-management/result",
    },
  ];

  const getBreadcrumbItem = (page: string, isActive: boolean) => {
    const breadcrumb = breadcrumbMap.find(
      (breadcrumb) => breadcrumb.name === page,
    );
    return isActive ? (
      <BreadcrumbPage>{breadcrumb?.label}</BreadcrumbPage>
    ) : (
      <BreadcrumbLink asChild>
        <Link href={breadcrumb?.href!}>{breadcrumb?.label}</Link>
      </BreadcrumbLink>
    );
  };

  return (
    <Breadcrumb className="w-full">
      <BreadcrumbList>
        {pageMap.map((page, index) => {
          const isLast = index === pageMap.length - 1;
          const isActive = page === currentPage;

          return (
            <React.Fragment key={page}>
              <BreadcrumbItem>
                {getBreadcrumbItem(page, isActive)}
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
        {/* {breadcrumbMap.map((breadcrumb, index) => {
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
        })} */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;
