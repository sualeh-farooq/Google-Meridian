import { Briefcase, Check, Facebook, Music, Music2, Tv, Twitter } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  dateRange: string;
    icon: JSX.Element;

}

interface Step3DatasetsProps {
  formData: any;
  updateFormData: (data: any) => void;
}
const iconClass = "h-7 w-7 text-blue-600";

const platforms: Platform[] = [
  {
    id: "facebook",
    name: "Facebook",
    dateRange: "08 Oct, 2021 - 10 Oct, 2024",
    icon: <Facebook className={iconClass} />,
  },
  {
    id: "twitter",
    name: "Twitter",
    dateRange: "08 Oct, 2021 - 10 Oct, 2024",
    icon: <Twitter className={iconClass} />,
  },
  {
    id: "tiktok",
    name: "Tiktok",
    dateRange: "08 Oct, 2021 - 10 Oct, 2024",
    icon: <Music2 className={iconClass} />,
  },
  {
    id: "sales",
    name: "Sales",
    dateRange: "08 Oct, 2021 - 10 Oct, 2024 (Last sell updates)",
    icon: <Briefcase className={iconClass} />,
  },
  {
    id: "tv",
    name: "TV",
    dateRange: "08 Oct, 2021 - 10 Oct, 2024",
    icon: <Tv className={iconClass} />,
  },
];

export default function Step3Datasets({ formData, updateFormData }: Step3DatasetsProps) {
  const selectedPlatforms = formData.selectedPlatforms || [];

  const togglePlatform = (platformId: string) => {
    const updated = selectedPlatforms.includes(platformId)
      ? selectedPlatforms.filter((id: string) => id !== platformId)
      : [...selectedPlatforms, platformId];
    
    updateFormData({ ...formData, selectedPlatforms: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Data Range</h3>
        <p className="text-sm text-gray-500">
          Choose the dependent variable you want to analyze.
        </p>
      </div>

      <div className="space-y-3">
        {platforms.map((platform) => {
          const isSelected = selectedPlatforms.includes(platform.id);
          
          return (
            <div
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`
                relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer
                transition-all duration-200
                ${isSelected 
                  ? 'border-blue-900 bg-blue-50/50' 
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200 text-2xl">
                  {platform.icon}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                  <p className="text-sm text-gray-500">{platform.dateRange}</p>
                </div>
              </div>

              <div className={`
                flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all
                ${isSelected 
                  ? 'border-blue-900 bg-blue-900' 
                  : 'border-gray-300 bg-white'
                }
              `}>
                {isSelected && <Check size={14} className="text-white" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}