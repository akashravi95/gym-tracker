import React, { useState } from 'react';
import { Member } from '../../types';
import { UserPlus } from 'lucide-react';
import { Card } from '../ui/Card';
import MemberForm from './MemberForm';
import MemberTable from './MemberTable';
import { getCurrentDateISO, generateAccessCardId } from '../../utils';

interface MemberListProps {
  members: Member[];
  onToggleAccess: (memberId: string) => void;
  onAddMember: (member: Omit<Member, 'id'>) => void;
}

export default function MemberList({ members, onToggleAccess, onAddMember }: MemberListProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'basic',
    accessCardId: generateAccessCardId(),
    accessCardStatus: 'active',
    joinDate: getCurrentDateISO(),
    lastPaymentDate: getCurrentDateISO(),
    paymentStatus: 'paid'
  } as Omit<Member, 'id'>);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMember(newMember);
    setShowAddForm(false);
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Members</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <UserPlus size={20} />
          Add Member
        </button>
      </div>

      {showAddForm && (
        <MemberForm
          newMember={newMember}
          onMemberChange={setNewMember}
          onCancel={() => setShowAddForm(false)}
          onSubmit={handleSubmit}
        />
      )}

      <MemberTable
        members={members}
        onToggleAccess={onToggleAccess}
      />
    </Card>
  );
}