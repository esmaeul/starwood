export default function LoadingSkeleton() {
  return (
    <div className="w-full bg-transparent min-h-full flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-xl mt-4">Loading...</p>
    </div>
  );
}
