import CompanyCard from "./CompanyCard";

interface Company {
  id: string | number;
  name: string;
  // CompanyCard mein jo fields use ho rahi hain wo add kar lo
}

interface CompanyListProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  onDelete: (company: Company) => void;
  onCardClick: (company: Company) => void;
}

export default function CompanyList({
  companies,
  onEdit,
  onDelete,
  onCardClick,
}: CompanyListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          onEdit={onEdit}
          onDelete={onDelete}
          onClick={() => onCardClick(company)}
        />
      ))}
    </div>
  );
}
