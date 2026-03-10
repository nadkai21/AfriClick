import React from 'react'

const Footer = () => {
      const steps = [
        {
          icon: "fas fa-message",
          title: "info@infoafriclick.co.tz",
          text: "Write to us",
          isEmail: true,
        },
        {
          icon: "fas fa-phone",
          title: "+255 791 007 681",
          text: "Call Us (TZ)",
        },
        {
          icon: "fas fa-house",
          title: "Dar es Salaam, Tanzania",
          text: "Our Office",
        },
      ];

    return (
        <div>
        
        <div className='py-6 bg-indigo-600'>
        <div>
        <div className="flex flex-col items-center justify-center text-center 
md:flex-row md:gap-6 
ipad:flex-col ipad:items-center ipad:gap-8 
px-4 mt-4 ipad:mt-6 md:mt-8 md:max-w-[80%] mx-auto gap-10">
  {steps.map((step, index) => (
    <React.Fragment key={index}>
     
      <div className="flex items-center gap-4 w-full ipad:w-full max-w-xs mx-auto text-left md:w-auto">
        <div className="inline-flex items-center justify-center bg-white/10 p-2 rounded-full">
          <i className={`${step.icon} text-white text-sm`}></i>
        </div>
        <div>
          <p className="text-sm text-white mt-0">{step.text}</p>
          {step.isEmail ? (
            <a href={`mailto:${step.title}`} className="font-medium text-white hover:underline block">
              {step.title}
            </a>
          ) : (
            <h1 className="font-medium text-white">{step.title}</h1>
          )}
        </div>
      </div>
      {index < steps.length - 1 && (
        <hr className="hidden ipad:hidden md:block w-px h-12 bg-gray-400 border-0" />
      )}
    </React.Fragment>
  ))}
</div>
            </div>
            <div className='flex justify-center items-center gap-4 ipad:4 md:gap-6 text-white text-2xl mt-12 mb-10'>
      <a href="https://wa.me/255791007681" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="https://www.facebook.com/share/17gzh4eQdk/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
        <i className="fa-brands fa-facebook"></i> 
      </a>
      <a href="https://www.linkedin.com/company/africlick-digital/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/africlicktz?igsh=ZXRiZGdlNXRmeXl3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
    <p className=" flex justify-center text-center items-center text-white cursor-pointer text-sm m-0">Copyright @ AfriClick Digital 2026 - All Right reserved.</p>
            </div>
        </div>
        
    )
}

export default Footer
