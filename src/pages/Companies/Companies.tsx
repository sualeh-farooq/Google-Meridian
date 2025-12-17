import { useState } from "react";
import { useNavigate } from "react-router";
import CompaniesHeader from "../../components/pages/CompaniesHeader";
import CompanySearchBar from "../../components/pages/CompanySearchBar";
import CompanyList from "../../components/pages/CompanyList";
import EmptyState from "../../components/pages/EmptyState";
import DeleteModal from "../../components/pages/DeleteModal";
import Modal from "../../components/common/Modal";
import { COMPANIES_DATA } from "../../data/companiesdata";


export default function Companies() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState(COMPANIES_DATA);
  const [search, setSearch] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState<any>(null);

  const filtered = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteCompany = (company: any) => {
    setCompanyToDelete(company);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (companyToDelete) {
      setCompanies(companies.filter((c) => c.id !== companyToDelete.id));
      setIsDeleteModalOpen(false);
      setCompanyToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCompanyToDelete(null);
  };

  return (
    <div>
      {/* <PageBreadcrumb pageTitle="Companies" /> */}

      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 xl:px-10">
        <CompaniesHeader onAdd={() => navigate("add", { state: { company: null } }) } />

        <CompanySearchBar value={search} onChange={setSearch} />

        {filtered.length ? (
          <CompanyList
            companies={filtered}
            onEdit={(c) => navigate("edit", { state: { company: c } })}
            onDelete={handleDeleteCompany}
            onCardClick={(c) => {}}
          />
        ) : (
          <EmptyState />
        )}
      </div>

      <Modal isOpen={isDeleteModalOpen} onClose={handleCancelDelete}>
        <DeleteModal 
          user={{ name: companyToDelete?.name }} 
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </Modal>
    </div>
  );
}
