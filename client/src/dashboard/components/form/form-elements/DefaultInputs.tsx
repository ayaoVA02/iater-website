import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import TextArea from "../input/TextArea.tsx";
import Button from "../../ui/button/Button.tsx";

const fileTypes = {
  "image/png": [],
  "image/jpeg": [],
  "image/webp": [],
  "image/svg+xml": [],
};

const selectOptions = [
  { value: "External", label: "External Project" },
  { value: "Internal", label: "Internal Activities" },
  { value: "Research", label: "Research Activities" },
];

export default function DefaultInputs() {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleTextAreaChange = (value: string) => {
    setMessage(value);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles[0]) {
      setSelectedFile(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: fileTypes,
    multiple: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || !selectedOption || !message || !selectedFile) {
      alert("Please fill all fields and select a file.");
      return;
    }

    // Form is valid; handle submission logic here
    console.log({
      inputValue,
      selectedOption,
      message,
      selectedFile,
    });
  };

  return (
    <ComponentCard title="Post blogs">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Drop Area */}
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-xl border border-dashed p-7 lg:p-10 transition ${
            isDragActive
              ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
              : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="mb-4 h-40 object-contain"
              />
            ) : (
              <>
                <div className="mb-5 flex justify-center">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    <svg
                      className="fill-current"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 3.92c-.22 0-.42.09-.55.24L8.57 9.53a.667.667 0 0 0 .07.99c.26.24.68.23.93-.01l4.18-4.11v12.19c0 .41.33.75.75.75s.75-.34.75-.75V6.48l4.11 4.11c.26.24.68.23.93-.01a.667.667 0 0 0-.01-.93l-5.34-5.34a.75.75 0 0 0-.55-.24ZM5.92 18.67c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.17c0 1.24 1 2.25 2.25 2.25h15.67c1.24 0 2.25-1.01 2.25-2.25v-3.17c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.17c0 .41-.34.75-.75.75H6.67c-.41 0-.75-.34-.75-.75v-3.17Z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
                  {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
                </h4>
                <span className="mb-5 block w-full max-w-[290px] text-center text-sm text-gray-700 dark:text-gray-400">
                  PNG, JPG, WebP, SVG files supported. Or click to browse.
                </span>
                <span className="text-brand-500 text-theme-sm font-medium underline">
                  Browse File
                </span>
              </>
            )}
          </div>
        </div>

        {/* Text Input */}
        <div>
          <Label htmlFor="input">Input <span className="text-red-500">*</span></Label>
          <Input
            type="text"
            id="input"
    
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {/* Select Dropdown */}
        <div>
          <Label>Select type <span className="text-red-500">*</span></Label>
          <Select
            options={selectOptions}
            placeholder="Select an option"
            onChange={handleSelectChange}

          />
        </div>

        {/* TextArea */}
        <div>
          <Label>Description <span className="text-red-500">*</span></Label>
          <TextArea
            value={message}
            onChange={handleTextAreaChange}
            rows={6}
        
            hint="Please enter a valid message."
          />
        </div>

        {/* Submit Button */}
        <Button>Submit</Button>
      </form>
    </ComponentCard>
  );
}
