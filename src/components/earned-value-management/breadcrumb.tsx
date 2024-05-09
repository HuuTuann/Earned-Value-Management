import { ChevronRight } from "lucide-react";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type BreadcrumbNavigationProps = {
  currentPage: "activity-and-week-input" | "value-input" | "result";
};

const BreadcrumbNavigation = ({ currentPage }: BreadcrumbNavigationProps) => {
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
    <Breadcrumb>
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
        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/earned-value-management/activity-and-week-input"}>
              Activity and Week Input
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/earned-value-management/value-input"}>
              Value Input
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Result</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;
