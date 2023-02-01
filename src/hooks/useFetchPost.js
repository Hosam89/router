import { useState, useEffect, useRef } from "react";

export const useFetchPost = (url, otherOptions) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState(null);
  const options = useRef(otherOptions).current;
  console.log(data);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setErrors(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setErrors(e);
          setIsPending(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, errors };
};
