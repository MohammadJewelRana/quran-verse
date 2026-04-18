"use client";

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Button,
} from "@heroui/react";

const SettingsDrawer = ({ open, setOpen }: any) => {
  return (
    <Drawer
      isOpen={open}
      onOpenChange={setOpen}
      placement="right"
      backdrop="blur"
      className="z-[99999]"
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          },
          exit: {
            x: 24,
            opacity: 0,
            transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
          },
        },
      }}
    >
      <DrawerContent className="bg-[#09111F] text-white border-l border-white/10 shadow-2xl overflow-hidden">
        {(onClose) => (
          <div className="h-full w-full flex flex-col">
            <DrawerHeader className="px-5 pt-5 pb-2 shrink-0">
              <div>
                <h2 className="text-xl font-semibold">Settings</h2>
                <p className="text-sm text-white/50 mt-1">
                  Customize reading view
                </p>
              </div>
            </DrawerHeader>

            <DrawerBody className="px-5 py-4 space-y-6 overflow-y-auto">
              <div className="space-y-3">
                <p className="text-sm text-white/60">Arabic Font</p>
                <select className="w-full h-11 px-3 bg-[#111B2D] border border-white/10 rounded-xl outline-none text-white">
                  <option>Amiri</option>
                  <option>Noto</option>
                  <option>Uthmani</option>
                </select>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/60">Arabic Size</p>
                <input type="range" className="w-full accent-emerald-500" />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/60">Translation Size</p>
                <input type="range" className="w-full accent-emerald-500" />
              </div>
            </DrawerBody>

            <DrawerFooter className="px-5 pb-5 pt-2 shrink-0">
              <Button
                className="w-full bg-emerald-500 text-black font-medium"
                onPress={onClose}
              >
                Close
              </Button>
            </DrawerFooter>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
