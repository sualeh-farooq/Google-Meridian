import { useState } from "react";
import { Upload, Building2, FileText, Calendar, Shield, X, Check } from "lucide-react";
import { useNavigate } from "react-router";

export default function AddCompany() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [accessType, setAccessType] = useState("ML Analysis");
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleLogoChange = (file: File | null) => {
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleLogoChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!name || !description) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      alert("Company added successfully!");
      setSubmitted(false);
      setName("");
      setDescription("");
      setFrequency("Daily");
      setAccessType("ML Analysis");
      setLogo(null);
      setLogoPreview(null);
    }, 1500);
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 shadow-sm">
            <Building2 className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-3xl font-bold text-blue-950 mb-2">Add New Company</h1>
          <p className="text-gray-600">Fill in the details to add a company to your portfolio</p>
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
                      alt="Logo preview" 
                      className="max-h-32 rounded-lg"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-md"
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
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400 bg-gray-50"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleLogoChange(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium mb-1">
                    Drop your logo here or click to browse
                  </p>
                  <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
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
                rows={4}
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
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-200 border border-gray-300 shadow-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitted}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                  submitted
                    ? "bg-green-600 cursor-not-allowed text-white"
                    : "bg-blue-950 hover:bg-blue-900 text-white"
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  "Add Company"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}