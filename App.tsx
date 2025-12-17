import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { DonationView } from './components/DonationView';
import { LogisticsView } from './components/LogisticsView';
import { Education } from './components/Education';
import { UserRole, Donation, DonationStatus } from './types';

// Mock Initial Data
const INITIAL_DONATIONS: Donation[] = [
  {
    id: 'd1',
    donorName: 'The Green Olive',
    foodType: 'Vegetable Stew & Rice',
    quantity: '15kg',
    pickupTime: 'Today, 9:00 PM',
    location: 'Sector 4, Market Road',
    expiry: '4 Hours',
    status: DonationStatus.AVAILABLE,
    createdAt: Date.now() - 3600000
  },
  {
    id: 'd2',
    donorName: 'City Bakery',
    foodType: 'Assorted Breads',
    quantity: '50 loaves',
    pickupTime: 'Tomorrow, 8:00 AM',
    location: 'Downtown Plaza',
    expiry: '24 Hours',
    status: DonationStatus.AVAILABLE,
    createdAt: Date.now() - 7200000
  },
  {
    id: 'd3',
    donorName: 'Hotel Grand',
    foodType: 'Buffet Surplus',
    quantity: '30 meals',
    pickupTime: 'Tonight, 11:00 PM',
    location: 'Grand Ave',
    expiry: '3 Hours',
    status: DonationStatus.CLAIMED,
    createdAt: Date.now() - 10000000
  }
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState<string>(UserRole.DONOR);
  const [donations, setDonations] = useState<Donation[]>(INITIAL_DONATIONS);

  const addDonation = (donation: Donation) => {
    setDonations([donation, ...donations]);
  };

  const updateDonationStatus = (id: string, status: DonationStatus) => {
    setDonations(donations.map(d => d.id === id ? { ...d, status } : d));
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard donations={donations} />;
      case 'donate':
        return (
          <DonationView 
            role={userRole} 
            donations={donations} 
            addDonation={addDonation}
            updateDonationStatus={updateDonationStatus}
          />
        );
      case 'logistics':
        return <LogisticsView donations={donations} />;
      case 'education':
        return <Education />;
      default:
        return <Dashboard donations={donations} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <NavBar 
        currentPage={currentPage} 
        setPage={setCurrentPage}
        userRole={userRole}
        setUserRole={setUserRole}
      />
      
      <main className="flex-grow animate-fade-in">
        {renderContent()}
      </main>

      <footer className="bg-emerald-900 text-emerald-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">SFDP</h2>
            <p className="text-sm">Smart Food Redistribution Platform &copy; 2024</p>
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
