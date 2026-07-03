function DashboardStatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-gray-200
      shadow-sm
      p-6
      hover:shadow-lg
      transition
      "
    >
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}

export default DashboardStatCard;