import MLModelCard from "./MlModelCards";

interface MLModel {
  id: string | number;
  name: string;
  description: string;
  version: string;
}

interface MLModelsListProps {
  models: MLModel[];
  onEdit: (model: MLModel) => void;
  onDelete: (model: MLModel) => void;
  onCardClick: (model: MLModel) => void;
}

export default function MLModelsList({
  models,
  onEdit,
  onDelete,
  onCardClick,
}: MLModelsListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {models.map((model) => (
        <MLModelCard
          key={model.id}
          model={model}
          onEdit={onEdit}
          onDelete={onDelete}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}