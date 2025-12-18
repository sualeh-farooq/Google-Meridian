import { useState, useEffect } from "react";
import { Building2, FileText, Save, X, Check, Edit3, Upload } from "lucide-react";
import { useNavigate } from "react-router";
import defaultLogo from "../../../public/favicon.png";  
export default function EditCompany() {
  const navigate = useNavigate();

  // Company info state
  const [name, setName] = useState("Acme Corporation");
  const [description, setDescription] = useState("Leading provider of innovative solutions");
  const [frequency, setFrequency] = useState("Daily");
  const [accessType, setAccessType] = useState("ML Analysis");
  const [saved, setSaved] = useState(false);

  // Logo state
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null); 
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    setLogoPreview(defaultLogo);
  }, []);

  // Logo handlers
  const handleLogoChange = (file: File | null) => {
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleLogoChange(e.dataTransfer.files[0]);
    }
  };

  // Submit handler
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

            {/* Logo Upload Section */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <Upload className="w-4 h-4 text-gray-600" />
                Company Logo
              </label>

              {logoPreview ? (
                <div className="relative group">
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center shadow-sm">
                    <img
                      src={logoPreview}
                      alt="Company Logo"
                      className="max-h-32 rounded-lg"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group opacity-100 transition shadow-md"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleLogoChange(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">
                    Drop new logo here or click to replace
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>

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

            {/* Access Type */}
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

            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How will this company provide its data?
              </label>
              <div className="space-y-2">
                {["Daily", "Weekly", "Monthly"].map((freq) => (
                  <label key={freq} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value={freq}
                      checked={frequency === freq}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{freq}</span>
                    <span className="ml-1 text-xs text-gray-400">
                      {freq === "Daily"
                        ? "(Data in daily rows)"
                        : freq === "Weekly"
                        ? "(Data in weekly rows)"
                        : "(Data in monthly rows)"}
                    </span>
                  </label>
                ))}
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
      </div>
    </div>
  );
}
