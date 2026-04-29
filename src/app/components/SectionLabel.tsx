export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="block h-[2px] w-8 rounded-full"
        style={{
          background: "linear-gradient(to right, #006999, #4dbef3)",
        }}
      />
      <span
        className="text-[12px] tracking-[0.25em] uppercase font-medium"
        style={{ color: "#4dbef3" }}
      >
        {children}
      </span>
    </div>
  );
}
