   // portfolio-site/src/components/case-studies/CaseStudyNav.tsx
   'use client';

   import Link from 'next/link';
   import { motion } from 'framer-motion';
   import { ArrowLeft } from '@/components/Icons';

   export default function CaseStudyNav() {
     return (
       <motion.nav 
         className="py-4 mb-8"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3 }}
       >
         <Link 
           href="/" 
           className="inline-flex items-center px-4 py-2 text-accent hover:text-accent-dark bg-white hover:bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 group"
         >
           <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
           <span className="font-medium">Back to Portfolio</span>
         </Link>
       </motion.nav>
     );
   }