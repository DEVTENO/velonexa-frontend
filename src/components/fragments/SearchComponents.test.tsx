"use client";
import { KeyboardEvent, useEffect, useState } from "react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";

const SearchComponents1 = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [userDataSearching, setUserDataSearching] = useState<UserProfile[]>([]);
  const [typeSearch, setTypeSearch] = useState<string>("");

  const handleSearching = async (e: KeyboardEvent<HTMLInputElement>) => {
    const target = (e.target as HTMLInputElement).value;
    const username = target.trim();
    setIsSearching(true);
    if (username == "") {
      setIsSearching(false);
      return;
    }
    setTypeSearch(target);
  };

  const fetchSearching = async (username: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/search?username=${username}`
      );
      const response: FetchApiResponse<UserProfile[]> = await res.json();
      if (!response.success) throw response;
      setUserDataSearching(response.data);
    } catch (error: { message: string; success: boolean; data: [] }) {
      setUserDataSearching(error.data);
    }
  };

  useEffect(() => {
    const filterType = typeSearch.trim().toLowerCase();
    fetchSearching(filterType);
  }, [typeSearch]);

  return <></>;
};
const SearchComponents2 = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [userDataSearching, setUserDataSearching] = useState<UserProfile[]>([]);

  const handleSearching = async (e: KeyboardEvent<HTMLInputElement>) => {
    const target = (e.target as HTMLInputElement).value;
    const username = target.trim().toLowerCase();
    setIsSearching(true);
    if (username == "") {
      setIsSearching(false);
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/search?username=${username}`
      );
      const response: FetchApiResponse<UserProfile[]> = await res.json();
      if (!response.success) throw response;
      setUserDataSearching(response.data);
    } catch (error: { message: string; success: boolean; data: [] }) {
      setUserDataSearching(error.data);
    }
  };
  return <></>;
};
