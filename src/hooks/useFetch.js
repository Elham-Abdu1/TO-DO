import { useState, useRef, useCallback, useEffect } from "react";

/**
 * useFetch(url)
 * - fetches the given url
 * - returns { data, loading, error, refetch }
 * - refetch(url) can be used to fetch a different url on demand
 */
export default function useFetch(initialUrl = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(initialUrl));
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchUrl = useCallback(async (url) => {
    if (!url) return;
    // abort previous
    try {
      controllerRef.current?.abort();
    } catch {}
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
      if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      if (err.name === "AbortError") {
        // aborted -> ignore
        return;
      }
      setError(err.message || "Unknown error");
      setData(null);
    } finally {
      setLoading(false);
      controllerRef.current = null;
    }
  }, []);

  // initial fetch when initialUrl provided (and when it changes)
  useEffect(() => {
    if (initialUrl) fetchUrl(initialUrl);
    return () => {
      try {
        controllerRef.current?.abort();
      } catch {}
    };
  }, [initialUrl, fetchUrl]);

  // expose refetch
  const refetch = useCallback((url) => {
    return fetchUrl(url || initialUrl);
  }, [fetchUrl, initialUrl]);

  return { data, loading, error, refetch };
}
