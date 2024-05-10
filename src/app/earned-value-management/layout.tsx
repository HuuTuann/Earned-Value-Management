import BreadcrumbNavigation from "@/components/earned-value-management/breadcrumb";
import { PropsWithChildren } from "react";

const EarnedValueLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container flex min-h-screen flex-col justify-center gap-10">
      <h1 className="text-center text-5xl font-bold">
        Earned Value Management
      </h1>
      <div>
        <BreadcrumbNavigation />
        {children}
      </div>
    </div>
  );
};

export default EarnedValueLayout;
