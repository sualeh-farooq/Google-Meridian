import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Step1GeneralInfo from "../../components/steppers/GeneralInfo";
import Step2DataRange from "../../components/steppers/DataRange";
import Step3Datasets from "../../components/steppers/DataSet";
import Step4ModelDetail from "../../components/steppers/WhatToMeasure";

export default function CreateModel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    selectedPlatforms: [],
    tvWatchTime: "",
    radioListenerCount: "",
    employeeCommission: "",
    salesTime: "",
    modelName: "",
    modelDescription: "",
  });

  const steps = [
    { id: 1, name: "General Information" },
    { id: 2, name: "Data Range" },
    { id: 3, name: "Datasets" },
    { id: 4, name: "What To Measure" },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Form Data:", formData);
    toast.success("Model Created Successfully!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const updateFormData = (data: any) => {
    setFormData(data);
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container yahan add karein */}
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
        <h1 className="text-2xl font-semibold text-blue-950 mb-8">Create New Model</h1>

        {/* Stepper Navigation */}
        <div className="mb-10">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-none">
                {/* Step Circle */}
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold text-sm
                      transition-all duration-300
                      ${
                        currentStep > step.id
                          ? "bg-green-500 border-green-500 text-white"
                          : currentStep === step.id
                          ? "bg-blue-900 border-blue-900 text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }
                    `}
                  >
                    {currentStep > step.id ? (
                      <Check size={18} />
                    ) : (
                      <span>{step.id}</span>
                    )}
                  </div>
                  <span
                    className={`
                      mt-2 text-xs font-medium whitespace-nowrap
                      ${
                        currentStep >= step.id
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {step.name}
                  </span>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex-grow h-0.5 mx-16 relative -top-3 min-w-[80%]">
                    <div
                      className={`
                        h-full transition-all duration-300
                        ${
                          currentStep > step.id
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 min-h-[400px]">
          {currentStep === 1 && (
            <Step1GeneralInfo formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <Step2DataRange formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Step3Datasets formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <Step4ModelDetail formData={formData} updateFormData={updateFormData} />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium
              transition-all
              ${
                currentStep === 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            <ChevronLeft size={18} />
            Back
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-900 text-white text-sm font-medium hover:bg-blue-950 transition-all"
            >
              Continue
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-all"
            >
              <Check size={18} />
              Create Model & Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
