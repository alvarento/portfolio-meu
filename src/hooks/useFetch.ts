import { useState, useRef, useEffect, useCallback } from "react";

const fetchData = async (url: string) => {
   const response = await fetch(url);
   const informations = await response.json();
   return informations;
};


export function useFetch<T = unknown>(url: string) {
   const [data, setData] = useState<T | null>(null);

   const handleData = useCallback(async () => {
      const data = await fetchData(url);
      setData(data);
   }, [url]);

   useEffect(() => { handleData() }, [handleData]);

   return { data };
};