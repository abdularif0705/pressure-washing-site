export default function PressureWasherIcon({ className, size = 24 }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* The gun handle */}
      <path d="M4 14v4a2 2 0 0 0 2 2h2" />
      <path d="M4 14l2-2" />
      
      {/* The main barrel */}
      <path d="M6 12l10-10" />
      
      {/* The nozzle */}
      <path d="M16 2l2 2" />
      
      {/* Spray droplets / lines */}
      <path d="M18 4l2-2" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M19 5l3-3" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M20 7l4-4" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M22 6l2-2" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
      <circle cx="21" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="23" cy="5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
