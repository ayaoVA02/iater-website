// src/hooks/usePosts.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`http://localhost:3000/api/posts`);

 return Array.isArray(res.data) ? res.data : res.data.data || [];
}; 

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
