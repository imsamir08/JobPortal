// function Button({
//   children,
//   type = "button",
//   variant = "primary",
//   onClick,
//   className = "",
//   fullWidth = false,
//   disabled = false,
// }) {
//   const baseClasses = `
//     inline-flex
//     items-center
//     justify-center
//     font-bold
//     rounded-xl
//     transition-all
//     duration-300
//     px-6
//     py-3
//     text-sm
//     cursor-pointer
//     shadow-md
//     hover:scale-[1.02]
//     disabled:opacity-60
//     disabled:cursor-not-allowed
//   `;

//   const variantClasses = {
//     primary: `
//       text-white
//       border-none
//       shadow-blue-200
//       bg-gradient-to-r
//       from-blue-600
//       to-blue-700
//       hover:from-blue-700
//       hover:to-blue-800
//     `,
//     secondary: `
//       bg-white
//       text-gray-800
//       border
//       border-gray-300
//       hover:bg-gray-50
//     `,
//     danger: `
//       text-white
//       bg-gradient-to-r
//       from-red-500
//       to-red-600
//       hover:from-red-600
//       hover:to-red-700
//     `,
//     warning: `
//       text-white
//       bg-gradient-to-r
//       from-yellow-500
//       to-orange-500
//       hover:from-yellow-600
//       hover:to-orange-600
//     `,
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`
//         ${baseClasses}
//         ${variantClasses[variant]}
//         ${fullWidth ? "w-full" : ""}
//         ${className}
//       `}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  fullWidth = false,
  disabled = false,
}) {
  const baseStyle = {
    border: "none",
    color: "#fff",
    padding: "12px 26px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.3s",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.6 : 1,
  };

  const styles = {
    primary: {
      ...baseStyle,
      background:
        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      boxShadow:
        "0 12px 24px rgba(37, 99, 235, 0.28)",
    },

    danger: {
      ...baseStyle,
      background:
        "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      boxShadow:
        "0 12px 24px rgba(239, 68, 68, 0.28)",
    },

    warning: {
      ...baseStyle,
      background:
        "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      boxShadow:
        "0 12px 24px rgba(245, 158, 11, 0.28)",
    },

    secondary: {
      ...baseStyle,
      background: "#ffffff",
      color: "#111827",
      border: "1px solid #d1d5db",
      boxShadow:
        "0 8px 20px rgba(0, 0, 0, 0.08)",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={styles[variant]}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;