import React from 'react';
import { Member } from '../../types';

interface MemberFormProps {
  newMember: Omit<Member, 'id'>;
  onMemberChange: (member: Omit<Member, 'id'>) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function MemberForm({ newMember, onMemberChange, onCancel, onSubmit }: MemberFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-6 p-4 border rounded">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={newMember.name}
          onChange={(e) => onMemberChange({ ...newMember, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={newMember.email}
          onChange={(e) => onMemberChange({ ...newMember, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border p-2 rounded"
          value={newMember.phone}
          onChange={(e) => onMemberChange({ ...newMember, phone: e.target.value })}
          required
        />
        <select
          className="border p-2 rounded"
          value={newMember.membershipType}
          onChange={(e) => onMemberChange({ ...newMember, membershipType: e.target.value as any })}
          required
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="vip">VIP</option>
        </select>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Member
        </button>
      </div>
    </form>
  );
}