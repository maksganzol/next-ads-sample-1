interface AdZoneProps {
  width: number;
  height: number;
  className?: string;
}

export function AdZone({ width, height, className = "" }: AdZoneProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-400 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-gray-500 text-sm font-medium">
        Ad Zone {width}x{height}
      </span>
    </div>
  );
}
