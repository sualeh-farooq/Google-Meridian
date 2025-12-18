import { Calendar } from 'lucide-react';
import CustomDatePicker from '../ui/date/CustomDatePicker';

interface Step2TimeRangeProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export default function Step2TimeRange({ formData, updateFormData }: Step2TimeRangeProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleStartDateChange = (value: string) => {
    updateFormData({ ...formData, startDate: value });
  };

  const handleEndDateChange = (value: string) => {
    updateFormData({ ...formData, endDate: value });
  };

  const calculateDuration = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    const start = new Date(formData.startDate).getTime();
    const end = new Date(formData.endDate).getTime();
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Time Range</h3>
        <p className="text-sm text-gray-500">
          Specify the core period for your analysis to focus on relevant data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <CustomDatePicker
            value={formData.startDate || ""}
            onChange={handleStartDateChange}
            placeholder="Select start date"
          />
          {formData.startDate && (
            <p className="mt-1.5 text-xs text-gray-600">
              Selected: {formatDate(formData.startDate)}
            </p>
          )}
        </div>

        {/* End Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date <span className="text-red-500">*</span>
          </label>
          <CustomDatePicker
            value={formData.endDate || ""}
            onChange={handleEndDateChange}
            placeholder="Select end date"
            minDate={formData.startDate}
          />
          {formData.endDate && (
            <p className="mt-1.5 text-xs text-gray-600">
              Selected: {formatDate(formData.endDate)}
            </p>
          )}
        </div>
      </div>

    </div>
  );
}