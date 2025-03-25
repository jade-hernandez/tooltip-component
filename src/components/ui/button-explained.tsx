import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, cloneElement, forwardRef } from "react";

/**
 * Configuration for button styling variants using Class Variance Authority (CVA).
 * Defines the base styles and variants for the button component.
 *
 * @see https://cva.style/docs for more information about CVA
 */
const buttonVariants = cva(
  // Base styles applied to all button variants
  "flex items-center font-medium",
  {
    variants: {
      /**
       * Visual style variants of the button
       * Each variant defines its own set of styles including:
       * - Background colors
       * - Text colors
       * - Border styles
       * - Shadow effects
       * - Interactive states (hover, focus, disabled)
       */
      variant: {
        primary: [
          // Default state
          "bg-indigo-700 fill-white text-white",
          "shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
          // Hover state
          "hover:bg-indigo-800 hover:shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
          // Focus state
          "focus:bg-indigo-800 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]",
          // Disabled state
          "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:fill-neutral-400 disabled:text-neutral-400"
        ],
        secondary: [
          "border-[0.5px] border-neutral-200 bg-white fill-neutral-900 text-neutral-900",
          "shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
          "hover:border hover:border-neutral-200 hover:bg-neutral-50",
          "hover:shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
          "focus:border focus:border-neutral-200 focus:bg-neutral-50",
          "focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]",
          "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:fill-neutral-400 disabled:text-neutral-400"
        ],
        tertiary: [
          "bg-transparent fill-indigo-700 text-indigo-700",
          "focus:bg-neutral-50 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]",
          "disabled:cursor-not-allowed disabled:fill-neutral-400 disabled:text-neutral-400"
        ],
        linkColor: [
          "bg-transparent fill-indigo-700 text-indigo-700",
          "hover:bg-transparent hover:fill-indigo-800 hover:text-indigo-800",
          "focus:fill-indigo-800 focus:text-indigo-800",
          "focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]",
          "disabled:cursor-not-allowed disabled:fill-neutral-400 disabled:text-neutral-400"
        ],
        linkGray: [
          "bg-transparent fill-neutral-600 text-neutral-600",
          "hover:bg-transparent hover:fill-neutral-900 hover:text-neutral-900",
          "focus:text-neutral-900 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]",
          "disabled:cursor-not-allowed disabled:fill-neutral-400 disabled:text-neutral-400"
        ],
        destructive: [
          "bg-red-600 fill-white text-white",
          "hover:bg-red-700 focus:bg-red-700",
          "focus:shadow-[0_0px_0px_1px_rgba(217,45,32,1),0_0px_0px_4px_rgba(217,45,32,0.12)]",
          "disabled:cursor-not-allowed disabled:bg-neutral-400"
        ]
      },
      /**
       * Size variants defining the dimensions and spacing of the button
       * Each size variant includes:
       * - Padding
       * - Gap between elements
       * - Font size
       * - Border radius
       */
      size: {
        md: "gap-1 rounded px-4 py-[10px] text-sm",
        lg: "gap-[6px] rounded px-[18px] py-[10px] text-base",
        xl: "gap-[6px] rounded px-[22px] py-3 text-base",
        "2xl": "gap-[10px] rounded px-[26px] py-4 text-lg",
        "icon-2xl": "gap-[10px] rounded p-4 text-lg",
        "md-link": "gap-1 rounded text-sm",
        "lg-link": "gap-[6px] rounded text-base",
        "xl-link": "gap-[6px] rounded text-base",
        "2xl-link": "gap-[10px] rounded text-lg"
      }
    },
    // Default variant settings if none are specified
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

/**
 * Props interface for the Button component.
 * Extends both HTML button attributes and variant props from CVA.
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** The text content to display inside the button */
  textContent?: string;
  /** An optional icon component to render (must be a valid React element) */
  icon?: React.ReactElement;
  /** The position of the icon relative to the text content */
  iconPosition?: "left" | "right";
  /** The size of the icon in pixels */
  iconSize?: number;
  /** Whether the button is disabled */
  isDisabled?: boolean;
}

/**
 * A versatile button component that supports multiple variants, icons, and sizes.
 * Uses the forwardRef pattern to allow parent components to access the underlying button element.
 *
 * @component
 * @example
 * ```tsx
 * <Button
 *   variant="primary"
 *   size="lg"
 *   textContent="Click me"
 *   icon={<Icon />}
 *   iconPosition="left"
 *   iconSize={20}
 * />
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // Destructure props with defaults
      textContent,
      isDisabled = false,
      icon,
      iconPosition = "left",
      iconSize,
      variant,
      size,
      className,
      ...props // Collect remaining props to spread to button element
    },
    ref // Forwarded ref from parent component
  ) => {
    // If both icon and iconSize are provided, clone the icon with the new size
    // This pattern allows us to modify the icon properties without mutating the original
    const renderedIcon = icon && iconSize ? cloneElement(icon, { size: iconSize }) : icon;

    return (
      <button
        // Forward the ref to access the DOM node
        ref={ref}
        // Combine variant classes with any additional className provided
        className={cn(buttonVariants({ variant, size }), className)}
        // Use isDisabled prop for disabled state
        disabled={isDisabled}
        // Spread remaining props to button element
        {...props}
      >
        {/* Render left-positioned icon if specified */}
        {iconPosition === "left" && renderedIcon}

        {/* Render text content if provided */}
        {textContent}

        {/* Render right-positioned icon if specified */}
        {iconPosition === "right" && renderedIcon}
      </button>
    );
  }
);

// Set display name for React DevTools debugging
Button.displayName = "Button";

// Export the button component and its variants
export { Button, buttonVariants };
