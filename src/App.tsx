import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MemberList from './components/MemberList';
import ClassSchedule from './components/ClassSchedule';
import { mockMembers, mockAttendance, mockClassSessions } from './data/mockData';
import { Member } from './types';

function App() {
  const [members, setMembers] = useState(mockMembers);

  const handleToggleAccess = (memberId: string) => {
    setMembers(members.map(member => 
      member.id === memberId
        ? { ...member, accessCardStatus: member.accessCardStatus === 'active' ? 'blocked' : 'active' }
        : member
    ));
  };

  const handleAddMember = (newMember: Omit<Member, 'id'>) => {
    const member = {
      ...newMember,
      id: (members.length + 1).toString(),
    };
    setMembers([...members, member]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Dashboard members={members} attendance={mockAttendance} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MemberList 
            members={members}
            onToggleAccess={handleToggleAccess}
            onAddMember={handleAddMember}
          />
          <ClassSchedule sessions={mockClassSessions} />
        </div>
      </main>
    </div>
  );
}

export default App;