import React from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans">
      <div className="max-w-[1920px] mx-auto">
        
        {/* System Notice */}
        <SystemNotice />
        
        {/* Filter Section (Always visible) */}
        <FilterBar />

        {/* Main Content Area */}
        <div className="space-y-4">
          <Table data={MOCK_DATA} />
          {/* Pagination */}
          <Pagination total={156} pageSize={10} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;