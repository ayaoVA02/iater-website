import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { usePosts } from "../../../hook/usePosts";
import { BsPencil, BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";
import Loading from "../ui/loading/Laoding";

// Define the TypeScript interface for the table rows
import axios from 'axios';
import { useAuth } from "../../../context/AuthProvider";
export default function RecentOrders() {
  const { data: posts, isLoading, error } = usePosts()

  const { token } = useAuth();
 const handleDelete = async (postId: string) => {
  if (!token) {
    alert("Unauthorized: No token found");
    return;
  }

  try {
    const response = await axios.delete(`http://localhost:3000/api/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Adjust this based on your actual backend response
    if (response.status !== 200) {
      throw new Error("Delete failed");
    }

    alert("Post deleted successfully");
    window.location.reload();
    // Optionally: refetch posts or navigate
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Failed to delete the post");
  }
};

  if (isLoading) {
    <Loading />
  }

  if (!posts) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">게시물을 찾을 수 없습니다</h2>
        <p className="mb-4">요청하신 게시물이 존재하지 않거나 삭제되었습니다.</p>

      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Post list
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Products
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {posts.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={`/uploads/${product.images}`}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.title.slice(0, 5)}..
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.viewer} views
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.types}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {/* <Badge
                    size="sm"
                    color={
                      product.status === "Delivered"
                        ? "success"
                        : product.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {product.status}
                  </Badge> */}
                  <div className="flex items-center gap-1">

                    <Link to={`/editpost/${product.id}`}>

                      <button className="text-sm font-medium py-3 px-4 rounded-2xl hover:text-white cursor-pointer hover:bg-indigo-600 hover:underline dark:text-indigo-500">
                        <BsPencil size={14} className=" text-blue-500" />
                      </button>
                    </Link>

                    <button onClick={() => {
                      if (confirm('Are you sure you want to delete this post?')) {
                        handleDelete(product.id);
                      }
                    }} className="text-sm font-medium py-3 px-4 rounded-2xl text-white cursor-pointer hover:bg-yellow-600 hover:underline dark:text-indigo-500">
                      <BsTrash size={14} color="red" />
                    </button>

                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
