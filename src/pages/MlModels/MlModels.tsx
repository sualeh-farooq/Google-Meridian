import { useState } from "react";
import { useNavigate } from "react-router";
import MLModelsHeader from "../../components/pages/MlModelHeader";
import MLModelsSearchBar from "../../components/pages/MlModelSearchBar";
import MLModelsList from "../../components/pages/MLModelList";
import MLModelsEmptyState from "../../components/pages/MlModelEmptyState";
import { ML_MODELS_DATA } from "../../data/mlModelData";


export default function MlModel() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = ML_MODELS_DATA.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
        <MLModelsHeader onAdd={() => navigate("create", { state: { model: null } })} />

        <MLModelsSearchBar value={search} onChange={setSearch} />

        {filtered.length ? (
          <MLModelsList
            models={filtered}
            onEdit={(m) => navigate("edit", { state: { model: m } })}
            onDelete={(m) => alert(`Delete ${m.name}`)}
            onCardClick={(m) => navigate(`/ml-models/${m.id}`)}
          />
        ) : (
          <MLModelsEmptyState />
        )}
      </div>
    </div>
  );
}