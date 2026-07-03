function Sidebar() {
  return (
    <div className="bg-white border rounded-2xl p-5">

      <h2 className="text-xl font-bold mb-5">
        Filters
      </h2>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          Job Type
        </h3>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" /> Full Time
          </label>

          <label className="block">
            <input type="checkbox" /> Part Time
          </label>

          <label className="block">
            <input type="checkbox" /> Internship
          </label>

          <label className="block">
            <input type="checkbox" /> Remote
          </label>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          Experience
        </h3>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" /> 0-1 Years
          </label>

          <label className="block">
            <input type="checkbox" /> 1-3 Years
          </label>

          <label className="block">
            <input type="checkbox" /> 3-5 Years
          </label>
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="font-semibold mb-2">
          Location
        </h3>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" /> Bangalore
          </label>

          <label className="block">
            <input type="checkbox" /> Hyderabad
          </label>

          <label className="block">
            <input type="checkbox" /> Remote
          </label>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;