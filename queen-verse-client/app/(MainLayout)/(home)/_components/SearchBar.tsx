import { Input } from "@heroui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
                    <div className="bg-[#020617] border-b border-white/10 px-4 md:px-6 py-3">
                      <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                          <Input
                            placeholder="Search ayah..."
                            className="pl-10"
                            classNames={{
                              inputWrapper:
                                "bg-[#0F172A] border border-white/10 hover:border-emerald-500/40 focus-within:!border-emerald-500/60 rounded-xl h-11 shadow-none",
                              input: "text-white placeholder:text-white/40",
                            }}
                          />
                        </div>
                      </div>
                    </div>
    </div>
  );
};

export default SearchBar;
