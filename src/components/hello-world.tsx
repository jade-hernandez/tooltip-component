"use client";

import { useState, useRef } from "react";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { Button } from "@/ui/button";
import { ToggleSwitch } from "@/ui/toggle-button";


export default function HelloWorld() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isEnabled, setIsEnabled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [cookiesConsent1, setCookiesConsent1] = useState<boolean>(false);
  const [cookiesConsent2, setCookiesConsent2] = useState<boolean>(false);
  const [cookiesConsent3, setCookiesConsent3] = useState<boolean>(false);

  // Use the focus trap with isActive boolean
  useFocusTrap(modalRef, isModalOpen);

  return (
    <div className="p-4">
      {/* Trigger button */}
      <Button
        onClick={() => setIsModalOpen(true)}
        textContent="Open Modal"
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            ref={modalRef}
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
          >
            <h2 className="mb-4 text-xl font-semibold">Hello World Modal</h2>

            {/* Some focusable elements to demonstrate the trap */}
            <input
              type="text"
              placeholder="Type something..."
              className="mb-4 w-full rounded border p-2"
            />

            <select className="mb-4 w-full rounded border p-2">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>

            <div className="mb-4 flex  items-center justify-between">
              <span className="text-sm text-gray-700">Cookies Consent</span>
              <ToggleSwitch
                size="sm"
                checked={cookiesConsent1} onCheckedChange={setCookiesConsent1}
              />
            </div>

            <div className="mb-4 flex  items-center justify-between">
              <span className="text-sm text-gray-700">Cookies Consent</span>
              <ToggleSwitch checked={cookiesConsent2} onCheckedChange={setCookiesConsent2} />
            </div>

            <div className="mb-4 flex  items-center justify-between">
              <span className="text-sm text-gray-700">Cookies Consent</span>
              <ToggleSwitch
                size="lg"
                checked={cookiesConsent3} onCheckedChange={setCookiesConsent3}
              />
            </div>

            <div className="flex gap-2">
              <Button
                textContent="Action"
              />

              <Button
                onClick={() => setIsModalOpen(false)}
                textContent="Close"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { MenuIcon } from "lucide-react";

// import { Button } from "@/ui/button";
// import { Modal } from "@/ui/modal";
// import { useModal } from "@/hooks/use-modal";
// import { useRef } from "react";

// export default function HelloWorld() {
//   const { isOpen, open, close } = useModal();
//   const modalRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className='gfe-gradient-container items-center'>
//       <h1>Hello World</h1>
//       <div className="flex flex-col items-center justify-center w-full space-y-4">
//         {/* Primary button with icon */}
//         <Button
//           textContent='Click me'
//           variant='primary'
//           size='lg'
//           icon={<MenuIcon />}
//           iconSize={24}
//           iconPosition='left'
//         />

//         {/* Link-style button */}
//         <Button
//           textContent='Learn more'
//           variant='linkColor'
//           size='md-link'
//         />


//         {/* Icon-only button */}
//         <Button
//           variant='secondary'
//           size='icon-2xl'
//           icon={<MenuIcon />}
//           iconSize={24}
//         />
//       </div>
//       <>
//         <button onClick={open}>Open Modal</button>

//         <Modal
//           isOpen={isOpen}
//           onClose={close}
//           title="My Modal"
//           size="xl"
//         >
//           <div
//             ref={modalRef}
//             className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
//           >
//             <a href="https://google.com">Google</a>
//             <p>Modal content here</p>
//             <Button
//               textContent="Action"
//             />
//             <Button
//               onClick={close}
//               textContent="Close"
//               variant="secondary"
//             />
//           </div>
//         </Modal>
//       </>
//     </section>
//   );
// }
