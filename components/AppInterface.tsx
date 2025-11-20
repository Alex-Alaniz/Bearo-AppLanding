import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, ArrowUpRight, ArrowDownLeft, CreditCard, Send, QrCode } from 'lucide-react';

const transactions = [
  { id: 1, name: "Starbucks", amount: "-$5.40", icon: "☕️", type: "expense", time: "2m ago" },
  { id: 2, name: "Sarah J.", amount: "+$250.00", icon: "🎉", type: "income", time: "1h ago" },
  { id: 3, name: "Uber", amount: "-$24.90", icon: "🚗", type: "expense", time: "5h ago" },
  { id: 4, name: "Apple Music", amount: "-$9.99", icon: "🎵", type: "expense", time: "Yesterday" },
];

export const AppInterface: React.FC = () => {
  return (
    <div className="flex flex-col h-full font-sans select-none">
      {/* Status Bar Area Simulator */}
      <div className="h-12 flex justify-between items-end px-6 pb-2 text-[10px] font-medium text-white/60">
        <span>9:41</span>
        <div className="flex gap-1">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* App Header */}
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-tr from-bearo-green to-emerald-400 rounded-full" />
        </div>
        <div className="flex gap-4 text-white">
          <Bell size={20} strokeWidth={2} />
          <Settings size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex-1 flex flex-col items-center pt-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-bearo-gray font-medium text-sm mb-1">Total Balance</p>
          <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-2">
            <span className="text-3xl align-top opacity-50">$</span>12,450<span className="text-3xl text-white/50">.00</span>
          </h1>
          <div className="inline-flex items-center gap-1 bg-bearo-green/10 px-2 py-1 rounded-full">
            <ArrowUpRight size={12} className="text-bearo-green" />
            <span className="text-bearo-green text-xs font-bold">+$240.50 (1.8%)</span>
          </div>
        </motion.div>

        {/* Main Actions */}
        <div className="grid grid-cols-4 gap-3 w-full mt-10">
          {[
            { label: 'Send', icon: Send },
            { label: 'Request', icon: ArrowDownLeft },
            { label: 'Card', icon: CreditCard },
            { label: 'Scan', icon: QrCode },
          ].map((action, idx) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-white shadow-lg border border-white/5 hover:bg-neutral-700 transition-colors">
                <action.icon size={22} />
              </div>
              <span className="text-xs font-medium text-gray-400">{action.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="w-full mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Activity</h3>
            <span className="text-xs text-bearo-green font-semibold">See All</span>
          </div>
          
          <div className="space-y-4">
            {transactions.map((tx, idx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg">
                    {tx.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{tx.name}</div>
                    <div className="text-[10px] text-gray-500">{tx.time}</div>
                  </div>
                </div>
                <div className={`font-bold text-sm ${tx.type === 'income' ? 'text-bearo-green' : 'text-white'}`}>
                  {tx.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Draggable Drawer Handle */}
        <div className="mt-auto w-full pt-4 pb-2 flex justify-center">
             <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};