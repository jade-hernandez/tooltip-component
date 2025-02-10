// src/hooks/use-focus-trap.ts
"use client";

import { useEffect } from "react";

export function useFocusTrap(ref: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    console.log("element", element);
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    console.log("focusableElements", focusableElements);
    console.table(focusableElements);

    const firstFocusable = focusableElements[0] as HTMLElement;
    console.log("firstFocusable", firstFocusable);
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
    console.log("lastFocusable", lastFocusable);

    function handleTabKey(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      console.log("Tab is pressed", e.key === "Tab");

      if (e.shiftKey) {
        // If shift + tab and on first element, move to last
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // If tab and on last element, move to first
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    // Store last focused element to restore focus when menu closes
    const lastFocusedElement = document.activeElement as HTMLElement;
    console.log("lastFocusedElement", lastFocusedElement);

    // Focus first element when opened
    firstFocusable?.focus();
    console.log("First elements has been focused", firstFocusable);

    element.addEventListener("keydown", handleTabKey);

    return () => {
      element.removeEventListener("keydown", handleTabKey);
      // Restore focus when menu closes
      lastFocusedElement?.focus();
    };
  }, [isActive, ref]);
}

// import { useEffect, RefObject } from "react";

// export interface FocusTrapOptions {
//   enabled?: boolean;
//   restoreFocus?: boolean;
//   focusFirstElement?: boolean;
// }

// const FOCUSABLE_ELEMENTS = [
//   "a[href]",
//   "button:not([disabled])",
//   "input:not([disabled])",
//   "select:not([disabled])",
//   "textarea:not([disabled])",
//   '[tabindex]:not([tabindex="-1"])',
//   "[contenteditable]"
// ].join(", ");

// export function useFocusTrap(ref: RefObject<HTMLElement>, options: FocusTrapOptions = {}) {
//   const { enabled = true, restoreFocus = true, focusFirstElement = true } = options;

//   useEffect(() => {
//     if (!enabled || !ref.current) return;

//     const element = ref.current;
//     const focusableElements = element.querySelectorAll(FOCUSABLE_ELEMENTS);
//     const firstFocusable = focusableElements[0] as HTMLElement;
//     const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

//     // Store last focused element to restore focus when closing
//     const lastFocusedElement = document.activeElement as HTMLElement;

//     function handleTabKey(e: KeyboardEvent) {
//       if (e.key !== "Tab") return;

//       // Prevent the default tab behavior
//       e.preventDefault();

//       const isShiftTab = e.shiftKey;
//       const activeElement = document.activeElement;

//       if (!activeElement) {
//         firstFocusable?.focus();
//         return;
//       }

//       if (isShiftTab) {
//         // If shift+tab and on first element or before modal, go to last
//         if (activeElement === firstFocusable || !element.contains(activeElement)) {
//           lastFocusable?.focus();
//         } else {
//           // Find the previous focusable element
//           const focusableArray = Array.from(focusableElements);
//           const currentIndex = focusableArray.indexOf(activeElement);
//           (focusableArray[currentIndex - 1] as HTMLElement)?.focus();
//         }
//       } else {
//         // If tab and on last element or before modal, go to first
//         if (activeElement === lastFocusable || !element.contains(activeElement)) {
//           firstFocusable?.focus();
//         } else {
//           // Find the next focusable element
//           const focusableArray = Array.from(focusableElements);
//           const currentIndex = focusableArray.indexOf(activeElement);
//           (focusableArray[currentIndex + 1] as HTMLElement)?.focus();
//         }
//       }
//     }

//     // Focus first element when opened
//     if (focusFirstElement && firstFocusable) {
//       firstFocusable.focus();
//     }

//     // Add event listener to document instead of modal
//     document.addEventListener("keydown", handleTabKey);

//     return () => {
//       document.removeEventListener("keydown", handleTabKey);
//       // Restore focus when closing
//       if (restoreFocus) {
//         lastFocusedElement?.focus();
//       }
//     };
//   }, [enabled, ref, restoreFocus, focusFirstElement]);
// }
