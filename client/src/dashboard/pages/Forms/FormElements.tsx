import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="Admin-Management blogs"
        description="This is iATER dashboard management about blogs and users"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid  gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
        </div>

      </div>
    </div>
  );
}
