import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2023,
        title: 'Accounts Payable Specialist',
        duration: '4 Months',
        details: 'Experienced in managing and processing all aspects of accounts payable, including vendor payments, expense reports, and purchase orders. I am skilled in accurately maintaining financial records and ensuring timely payments while adhering to strict accounting policies and procedures.I managed and processed up to 300 vendor invoices and expense reports daily with 100% accuracy. '
    },
    {
        year: 2022,
        title: 'Extruder Operator',
        duration: '5 Months',
        details: 'Operated and maintained extrusion equipment that produced up to 10,000 lbs of plastic beads per hour. I ensured consistent product quality by monitoring and adjusting machine settings to maintain proper temperature, pressure, and speed, resulting in a 15% reduction in waste and a 10% increase in production output. Through regular preventative maintenance, I reduced machine downtime by 20%, resulting in an increase in overall production efficiency. '
    },
    {
        year: 2019,
        title: 'Correctional Officer III',
        duration: '8 Months',
        details: 'Maintained order and security within a high-security correctional facility housing over 1,000 inmates. I enforced facility rules and regulations, resulting in a 10% reduction in disciplinary infractions and a 20% decrease in incidents of violence among inmates. Through regular training and performance evaluations, I mentored and coached new and existing officers, resulting in a 15% increase in staff retention rates.',
    },
    {
        year: 2018,
        title: 'Pipe Fitter',
        duration: '3 Months - Summer Job',
        details: 'Installed, maintained, and repaired piping systems in a commercial setting. I read and interpreted blueprints, schematics, and other technical documents to accurately assemble and fit pipes to precise specifications, resulting in a 10% increase in overall production efficiency. Through the use of various tools and techniques, I effectively cut, thread, and bend pipes to ensure proper fit and alignment, resulting in a 15% reduction in product defects.',
    },
    {
        year: 2018,
        title: 'Treasurer / Risk Management',
        duration: '4 Years',
        details: 'As the Treasurer / Risk Management officer for a fraternity with 50 members and a budget of $35,000, I oversaw all financial operations and managed financial risks. I created and managed a budget that allowed the fraternity to fund various activities and events, resulting in a 15% increase in the number of events hosted. Through effective management of finances, I ensured timely payment of bills and fees, resulting in a 100% payment rate and avoiding late payment fees.',
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-5'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work