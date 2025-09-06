export const Button = ({ 
  children, 
  className = "", 
  fullWidth = false,
  ...props 
}) => (
  <button
    {...props}
    className={`
      cursor-pointer
      px-4 py-1 
      rounded-xl
      bg-[#ED9B40]  
      font-newzen
      font-bold
      text-white
      flex items-center gap-2
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim()}
  >
    {children}
  </button>
);

export const ButtonVariant = ({ 
  children, 
  className = "", 
  fullWidth = false,
  ...props 
}) => (
  <button
    {...props}
    className={`
      cursor-pointer
      px-4 py-1 
      rounded-xl
      bg-[#FFFFFF]  
      font-newzen
      font-bold
      text-[#ED9B40]
      flex items-center gap-2
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim()}
  >
    {children}
  </button>
);