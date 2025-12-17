import { useState } from "react";
import { Building2, FileText, Save, X, Check, Edit3 } from "lucide-react";
import useGoBack from "../../hooks/useGoBack";
import { useNavigate } from "react-router";

export default function EditCompany() {
  const [name, setName] = useState("Acme Corporation");
  const [description, setDescription] = useState("Leading provider of innovative solutions");
  const [saved, setSaved] = useState(false);
   const [frequency, setFrequency] = useState("Daily");
  const [accessType, setAccessType] = useState("ML Analysis");
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    if (!name || !description) {
      alert("Please fill all fields");
      return;
    }

    setSaved(true);
    setTimeout(() => {
      alert("Company updated successfully!");
      setSaved(false);
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 shadow-sm">
            <Edit3 className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-3xl font-bold text-blue-950 mb-2">Edit Company</h1>
          <p className="text-gray-600">Update company information</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">
          <div className="space-y-6">
            
            {/* Company Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <Building2 className="w-4 h-4 text-gray-600" />
                Company Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter company name"
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <FileText className="w-4 h-4 text-gray-600" />
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the company..."
                rows={6}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none shadow-sm"
              />
            </div>

      <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What type of access should this company have?
              </label>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="accessType"
                    value="ML Analysis"
                    checked={accessType === "ML Analysis"}
                    onChange={(e) => setAccessType(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">ML Analysis</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="accessType"
                    value="ML Analysis & Scenario Testing"
                    checked={accessType === "ML Analysis & Scenario Testing"}
                    onChange={(e) => setAccessType(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">ML Analysis & Scenario Testing</span>
                </label>
              </div>
            </div>

            {/* Frequency Radio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How will this company provide its data?
              </label>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="Daily"
                    checked={frequency === "Daily"}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Daily</span>
                  <span className="ml-1 text-xs text-gray-400">(Data in daily rows)</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="Weekly"
                    checked={frequency === "Weekly"}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Weekly</span>
                  <span className="ml-1 text-xs text-gray-400">(Data in weekly rows)</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="Monthly"
                    checked={frequency === "Monthly"}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Monthly</span>
                  <span className="ml-1 text-xs text-gray-400">(Data in monthly rows)</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
              <button
                type="button"
                  onClick={() => navigate("/companies")} 
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-200 border border-gray-300 shadow-sm flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saved}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                  saved
                    ? "bg-green-600 cursor-not-allowed text-white"
                    : "bg-blue-950 hover:bg-blue-900 text-white"
                }`}
              >
                {saved ? (
                  <>
                    <Check className="w-5 h-5" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
   
      </div>
    </div>
  );
}