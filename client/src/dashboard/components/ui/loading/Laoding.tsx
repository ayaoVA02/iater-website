// Loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="animate-spin h-12 w-12 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-blue-700 text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
}
