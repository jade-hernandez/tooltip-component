"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/ui/button";
import { Modal } from "@/ui/modal";

import { useModal } from "@/hooks/use-modal";

export default function HelloWorld() {
  const { isOpen, open, close } = useModal();

  return (
    <section className='gfe-gradient-container items-center'>
      <h1>Hello World</h1>
      <div className="flex flex-col items-center justify-center w-full space-y-4">
        {/* Primary button with icon */}
        <Button
          textContent='Click me'
          variant='primary'
          size='lg'
          icon={<MenuIcon />}
          iconSize={24}
          iconPosition='left'
        />

        {/* Link-style button */}
        <Button
          textContent='Learn more'
          variant='linkColor'
          size='md-link'
        />

        {/* Icon-only button */}
        <Button
          variant='secondary'
          size='icon-2xl'
          icon={<MenuIcon />}
          iconSize={24}
        />
      </div>
      <>
        <button onClick={open}>Open Modal</button>

        <Modal
          isOpen={isOpen}
          onClose={close}
          title="My Modal"
        >
          <p>Modal content here</p>
        </Modal>
      </>
    </section>
  );
}
