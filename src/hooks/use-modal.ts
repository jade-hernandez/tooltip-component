import { useState, useCallback } from "react";

export interface IUseModalOptions {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface IUseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useModal(options: IUseModalOptions = {}): IUseModalReturn {
  const { defaultOpen = false, onOpenChange } = options;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange]);

  const close = useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  }, [onOpenChange]);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
