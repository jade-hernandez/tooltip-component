import { useEffect, useCallback, RefObject } from "react";

export interface FocusTrapOptions {
  enabled?: boolean;
  restoreFocus?: boolean;
  focusFirstElement?: boolean;
}

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "[contenteditable]"
].join(", ");

export function useFocusTrap(ref: RefObject<HTMLElement>, options: FocusTrapOptions = {}) {
  const { enabled = true, restoreFocus = true, focusFirstElement = true } = options;

  const handleFocus = useCallback(
    (event: KeyboardEvent) => {
      if (!ref.current || event.key !== "Tab") return;

      const focusableElements = ref.current.querySelectorAll(FOCUSABLE_ELEMENTS);
      const firstFocusable = focusableElements[0] as HTMLElement;
      const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (!firstFocusable) return;

      const isTabbing = event.key === "Tab";
      const isShiftTabbing = isTabbing && event.shiftKey;

      if (isShiftTabbing && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
        return;
      }

      if (!isShiftTabbing && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
        return;
      }
    },
    [ref]
  );

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    const lastFocusedElement = document.activeElement as HTMLElement;
    const focusableElements = element.querySelectorAll(FOCUSABLE_ELEMENTS);
    const firstFocusable = focusableElements[0] as HTMLElement;

    if (focusFirstElement && firstFocusable) {
      firstFocusable.focus();
    }

    element.addEventListener("keydown", handleFocus);

    return () => {
      element.removeEventListener("keydown", handleFocus);
      if (restoreFocus) {
        lastFocusedElement?.focus();
      }
    };
  }, [enabled, ref, handleFocus, restoreFocus, focusFirstElement]);
}
