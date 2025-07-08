import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import TextArea from "../input/TextArea.tsx";
import { useAuth } from "../../../../context/AuthProvider.tsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const fileTypes = {
    "image/png": [],
    "image/jpeg": [],
    "image/webp": [],
    "image/svg+xml": [],
};

const selectOptions = [
    { value: "EXTERNAL", label: "External Project" },
    { value: "INTERNAL_ACTIVITY", label: "Internal Activities" },
    { value: "RESEARCH", label: "Research Activities" },
];

export default function EditPost() {
      const { id } = useParams();
    const { token } = useAuth();

    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [message, setMessage] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [oldImageUrl, setOldImageUrl] = useState<string | null>(null);

    // Fetch post data on mount
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/posts/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const post = response.data;
                setInputValue(post.title);
                setSelectedOption(post.types);

                setMessage(post.content);
                if (post.images) {
                    setOldImageUrl(post.images);
                }
                // if (post.images) setPreview(post.images); // Optional if API returns image URL
            } catch (err) {
                console.error("Failed to load post", err);
                setError("Failed to load post data.");
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id, token]);

    const handleDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles[0]) {
            setSelectedFile(acceptedFiles[0]);
            setPreview(URL.createObjectURL(acceptedFiles[0]));
            setOldImageUrl(null); // clear old image
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: fileTypes,
        multiple: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!inputValue || !selectedOption || !message) {
            setError("Please fill all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", inputValue);
        formData.append("types", selectedOption);
        formData.append("content", message);
        formData.append("viewer", "0");
        if (selectedFile) {
            formData.append("images", selectedFile);
        }

        try {
            const response = await axios.put(
                `http://localhost:3000/api/posts/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                setSuccess("Post updated successfully!");
            } else {
                setError("Failed to update post.");
            }
        } catch (err) {
            console.error("Error updating post:", err);
            setError("An error occurred while updating the post.");
        }
    };

    return (
        <ComponentCard title="Edit Post">
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="text-red-600 font-medium">{error}</div>}
                {success && <div className="text-green-600 font-medium">{success}</div>}

                {/* Image Upload */}
                <div
                    {...getRootProps()}
                    className={`cursor-pointer rounded-xl border border-dashed p-7 lg:p-10 transition ${isDragActive
                        ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
                        : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
                        }`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center">
                        {preview || oldImageUrl ? (
                            <img
                                src={preview ? preview : `/uploads/${oldImageUrl}`}
                                alt={`${oldImageUrl}`}
                                className="mb-4 h-40 object-contain"
                            />
                        ) : (
                            <>
                                <div className="mb-5 flex justify-center">
                                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                        📁
                                    </div>
                                </div>
                                <h4 className="mb-3 font-semibold text-gray-800 dark:text-white/90">
                                    {isDragActive ? "Drop files here" : "Drag & Drop files here"}
                                </h4>
                                <span className="text-sm text-gray-700 dark:text-gray-400">
                                    PNG, JPG, WebP, SVG files supported. Or click to browse.
                                </span>
                            </>
                        )}
                    </div>

                </div>

                {/* ID Input */}
                <div>
                    <Label htmlFor="title">ID <span className="text-red-500">*</span></Label>
                    <Input
                        type="text"
                        id="title"
                        disabled
                        value={id}

                    />
                </div>
                {/* Title Input */}
                <div>
                    <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                    <Input
                        type="text"
                        id="title"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>

                {/* Type Selector */}
                <div>
                    <Label>Select Type <span className="text-red-500">*</span></Label>
                    <Select
                        options={selectOptions}

                        placeholder={`${selectedOption}`}
                        onChange={(value: string) => setSelectedOption(value)}
                    />
                </div>

                {/* Content */}
                <div>
                    <Label>Description <span className="text-red-500">*</span></Label>
                    <TextArea
                        value={message}
                        onChange={setMessage}
                        rows={6}
                        hint="Write your content here. Use markdown or rich text."
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-amber-500 py-4 px-8 rounded-2xl text-white text-sm cursor-pointer hover:bg-amber-600"
                >
                    Update
                </button>
            </form>
        </ComponentCard>
    );
}
