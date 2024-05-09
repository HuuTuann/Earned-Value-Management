import BreadcrumbNavigation from "@/components/earned-value-management/breadcrumb";
import ValueInput from "@/components/earned-value-management/value-input";

export default function InputValuePage() {
  return (
    <>
      <BreadcrumbNavigation currentPage="value-input" />
      <ValueInput />
    </>
  );
}
