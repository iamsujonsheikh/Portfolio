import React, { useState } from 'react';
import { Search } from 'lucide-react';
import AddButon from '../UI/CustomButton';
import DashboardAddProjectForm from './DashboardAddProjectForm';


interface TableControllerProps {
    searchQuery: string;
    setSearchQuery: (v: any) => void;
};


// TABLE CONTROLLER COMPONENT
const TableController: React.FC<TableControllerProps> = ({
    searchQuery,
    setSearchQuery,
}) => {

    const [showProjectForm, setShowProjectForm] = useState<boolean>(false);

    // HANDLE OPEN PROJECT FORM
    const handleOpenProjectForm = () => {
        setShowProjectForm(true)
    };

    // HANDLE CLOSE PROJECT FORM
    const handleCloseProjectForm = () => {
        setShowProjectForm(false)
    };


    return (
        <div className="bg-slate-500/10 p-5 rounded-xl my-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search projects or tech..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5  rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                />
            </div>

            {/* ADD BUTTON */}
            <div className="w-full sm:w-auto">
                {/* Cute Add Button */}
                <AddButon
                    onClick={handleOpenProjectForm}
                    className='rounded-full'>
                    Add New
                </AddButon>

                {/* PROJECT MODAL OPEN  */}
                {showProjectForm && (
                    <DashboardAddProjectForm onClose={handleCloseProjectForm} />
                )}
            </div>
        </div>
    )
};

export default TableController;