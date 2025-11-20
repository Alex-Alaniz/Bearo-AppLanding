import React from 'react';
import { Lock, EyeOff, Fingerprint } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-xl">
            Serious security. <br/>
            <span className="text-gray-400">Sleep soundly.</span>
          </h2>
          <div className="mt-6 md:mt-0">
            <p className="text-lg font-medium text-gray-600 max-w-sm">
              We use bank-grade encryption and cutting-edge fraud protection to keep your money safe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "Encryption",
              desc: "Your data is encrypted with the same technology used by major banks."
            },
            {
              icon: EyeOff,
              title: "Privacy First",
              desc: "We never sell your personal information to third parties. Period."
            },
            {
              icon: Fingerprint,
              title: "Biometric Access",
              desc: "Secure your app with Face ID or Touch ID for an extra layer of protection."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};