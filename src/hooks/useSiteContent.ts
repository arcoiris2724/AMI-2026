import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/**
 * Reads an editable content value from the site_content table,
 * falling back to the static default when no override exists.
 * Content keys are managed from the /admin page.
 */
export function useSiteContent<T>(key: string, fallback: T): T {
  const [value, setValue] = useState<T>(fallback);

  useEffect(() => {
    let mounted = true;
    supabase
      .from("site_content")
      .select("value")
      .eq("key", key)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && mounted && data?.value != null) {
          setValue(data.value as T);
        }
      });
    return () => {
      mounted = false;
    };
  }, [key]);

  return value;
}
