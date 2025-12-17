interface Step2TimeRangeProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export default function Step2TimeRange({ formData, updateFormData }: Step2TimeRangeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Time Range</h3>
        <p className="text-sm text-gray-500">
          Specify the core period for your analysis in focus on relevant data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={formData.startDate || ""}
            onChange={(e) => updateFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="date"
            value={formData.endDate || ""}
            onChange={(e) => updateFormData({ ...formData, endDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition"
          />
        </div>
      </div>
    </div>
  );
}