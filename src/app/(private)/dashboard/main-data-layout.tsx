"use client";

export default function MainDataDiv({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <div className="w-full h-36 rounded-2xl border-2 py-4 px-8 flex flex-col gap-2">
        {children}
      </div>
    </>
  );
}
