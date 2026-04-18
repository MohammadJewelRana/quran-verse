"use client";

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Button,
} from "@heroui/react";
import { useSettings } from "@/context/settings-context";

const SettingsDrawer = ({ open, setOpen }: any) => {
  const {
    font,
    arabicSize,
    translationSize,
    setFont,
    setArabicSize,
    setTranslationSize,
    resetSettings,
  } = useSettings();

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
      <DrawerContent className="overflow-hidden border-l border-white/10 bg-[#09111F] text-white shadow-2xl">
        {(onClose) => (
          <div className="flex h-full w-full flex-col">
            <DrawerHeader className="shrink-0 px-5 pb-2 pt-5">
              <div>
                <h2 className="text-xl font-semibold">Settings</h2>
                <p className="mt-1 text-sm text-white/50">
                  Customize reading view
                </p>
              </div>
            </DrawerHeader>

            <DrawerBody className="space-y-6 overflow-y-auto px-5 py-4">
              <div className="space-y-3">
                <p className="text-sm text-white/60">Arabic Font</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFont("amiri")}
                    className={`rounded-xl border px-3 py-3 text-sm transition ${
                      font === "amiri"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                        : "border-white/10 bg-[#111B2D] text-white/70"
                    }`}
                  >
                    Amiri
                  </button>
                  <button
                    onClick={() => setFont("noto")}
                    className={`rounded-xl border px-3 py-3 text-sm transition ${
                      font === "noto"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                        : "border-white/10 bg-[#111B2D] text-white/70"
                    }`}
                  >
                    Noto Naskh
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/60">
                  Arabic Size: {arabicSize}px
                </p>
                <input
                  type="range"
                  min="16"
                  max="40"
                  step="1"
                  value={arabicSize}
                  onChange={(e) => setArabicSize(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/60">
                  Translation Size: {translationSize}px
                </p>
                <input
                  type="range"
                  min="10"
                  max="24"
                  step="1"
                  value={translationSize}
                  onChange={(e) => setTranslationSize(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </DrawerBody>

            <DrawerFooter className="shrink-0 px-5 pb-5 pt-2">
              <div className="flex w-full gap-3">
                <Button
                  className="flex-1 border border-white/10 bg-transparent text-white"
                  onPress={resetSettings}
                >
                  Reset
                </Button>
                <Button
                  className="flex-1 bg-emerald-500 font-medium text-black"
                  onPress={onClose}
                >
                  Close
                </Button>
              </div>
            </DrawerFooter>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
