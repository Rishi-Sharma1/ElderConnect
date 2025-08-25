const HowItWorks = () => {
  return (
    <section className="bg-[#F7FAFC] py-10 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-[#0D141C] text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
              How ElderConnect Works
            </h2>
            <p className="text-[#0D141C] text-base md:text-lg leading-relaxed">
              Our platform simplifies the process of connecting elderly individuals with the support they need. Whether it's finding companionship, accessing resources, or participating in community events, ElderConnect is here to help.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* For Seniors Card */}
          <div className="bg-[#F7FAFC] border border-[#D1DBE8] rounded-lg p-4 space-y-3">
            <div className="w-6 h-6">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 22 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M15.6875 0C13.7516 0 12.0566 0.8325 11 2.23969C9.94344 0.8325 8.24844 0 6.3125 0C3.10384 0.00361657 0.503617 2.60384 0.5 5.8125C0.5 12.375 10.2303 17.6869 10.6447 17.9062C10.8665 18.0256 11.1335 18.0256 11.3553 17.9062C11.7697 17.6869 21.5 12.375 21.5 5.8125C21.4964 2.60384 18.8962 0.00361657 15.6875 0ZM11 16.3875C9.28813 15.39 2 10.8459 2 5.8125C2.0031 3.43206 3.93206 1.5031 6.3125 1.5C8.13594 1.5 9.66687 2.47125 10.3062 4.03125C10.4218 4.31259 10.6959 4.49627 11 4.49627C11.3041 4.49627 11.5782 4.31259 11.6938 4.03125C12.3331 2.46844 13.8641 1.5 15.6875 1.5C18.0679 1.5031 19.9969 3.43206 20 5.8125C20 10.8384 12.71 15.3891 11 16.3875Z" 
                  fill="#0D141C"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-[#0D141C] text-base font-bold leading-5">
                For Seniors
              </h3>
              <p className="text-[#4F7396] text-sm leading-relaxed">
                Find companionship, access resources, and participate in community events.
              </p>
            </div>
          </div>

          {/* For Volunteers Card */}
          <div className="bg-[#F7FAFC] border border-[#D1DBE8] rounded-lg p-4 space-y-3">
            <div className="w-6 h-6">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M10.9922 10.805C13.0561 9.43099 13.9769 6.86767 13.2592 4.49441C12.5414 2.12114 10.3544 0.497718 7.875 0.497718C5.39558 0.497718 3.20857 2.12114 2.49084 4.49441C1.7731 6.86767 2.69393 9.43099 4.75781 10.805C2.93952 11.4752 1.38666 12.7153 0.330938 14.3403C0.179932 14.5647 0.161484 14.8531 0.28266 15.095C0.403836 15.3368 0.645857 15.4947 0.916031 15.5081C1.18621 15.5215 1.44266 15.3884 1.58719 15.1597C2.97076 13.0317 5.33677 11.7479 7.875 11.7479C10.4132 11.7479 12.7792 13.0317 14.1628 15.1597C14.3917 15.4999 14.8514 15.5932 15.1948 15.3692C15.5382 15.1452 15.6381 14.6869 15.4191 14.3403C14.3633 12.7153 12.8105 11.4752 10.9922 10.805ZM3.75 6.125C3.75 3.84683 5.59683 2 7.875 2C10.1532 2 12 3.84683 12 6.125C12 8.40317 10.1532 10.25 7.875 10.25C5.5979 10.2474 3.75258 8.4021 3.75 6.125ZM23.4506 15.3781C23.1037 15.6043 22.6391 15.5066 22.4128 15.1597C21.0308 13.0303 18.6636 11.7466 16.125 11.75C15.7108 11.75 15.375 11.4142 15.375 11C15.375 10.5858 15.7108 10.25 16.125 10.25C17.7863 10.2484 19.2846 9.25041 19.9261 7.71798C20.5677 6.18554 20.2273 4.4178 19.0626 3.23312C17.898 2.04844 16.1363 1.67805 14.5931 2.29344C14.3427 2.40171 14.0531 2.36541 13.8372 2.19864C13.6212 2.03188 13.5128 1.76096 13.5542 1.49125C13.5956 1.22154 13.7802 0.995581 14.0363 0.90125C16.7109 -0.165433 19.7592 0.960007 21.099 3.50883C22.4388 6.05765 21.6374 9.2067 19.2422 10.805C21.0605 11.4752 22.6133 12.7153 23.6691 14.3403C23.8953 14.6872 23.7975 15.1518 23.4506 15.3781Z" 
                  fill="#0D141C"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-[#0D141C] text-base font-bold leading-5">
                For Volunteers
              </h3>
              <p className="text-[#4F7396] text-sm leading-relaxed">
                Offer your time and skills to support elderly individuals in your community.
              </p>
            </div>
          </div>

          {/* For NGOs Card */}
          <div className="bg-[#F7FAFC] border border-[#D1DBE8] rounded-lg p-4 space-y-3">
            <div className="w-6 h-6">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M11.2275 16.4319C11.1441 16.7657 10.8441 16.9999 10.5 17C10.4368 17.0003 10.3738 16.9927 10.3125 16.9775L7.3125 16.2275C7.22898 16.2065 7.1497 16.1713 7.07812 16.1234L4.82812 14.6234C4.48355 14.3935 4.39058 13.9279 4.62047 13.5833C4.85036 13.2387 5.31605 13.1457 5.66062 13.3756L7.80188 14.8034L10.6763 15.5225C10.8702 15.5695 11.0374 15.6919 11.1409 15.8626C11.2444 16.0333 11.2755 16.2382 11.2275 16.4319ZM23.6672 7.38875C23.5429 7.76629 23.2729 8.07851 22.9172 8.25594L20.6972 9.36594L15.5334 14.5306C15.347 14.7169 15.0765 14.7916 14.8209 14.7275L8.82094 13.2275C8.72969 13.2046 8.64353 13.1649 8.56688 13.1103L3.36188 9.39406L1.08563 8.25594C0.344835 7.88562 0.0443487 6.985 0.414375 6.24406L2.74406 1.58563C3.11438 0.844835 4.015 0.544349 4.75594 0.914375L6.82406 1.94562L11.7928 0.52625C11.9276 0.487694 12.0705 0.487694 12.2053 0.52625L17.1741 1.94562L19.2422 0.914375C19.9831 0.544349 20.8837 0.844835 21.2541 1.58563L23.5837 6.24406C23.7632 6.59919 23.7933 7.01134 23.6672 7.38875ZM19.3378 8.60188L16.7869 3.5H13.8038L9.75 7.4375C10.9369 8.19594 12.7978 8.405 14.4675 6.72219C14.7376 6.44998 15.1695 6.42531 15.4688 6.665L18.6947 9.24969L19.3378 8.60188ZM1.75594 6.91438L3.41438 7.74406L5.74406 3.08563L4.08563 2.25594L1.75594 6.91438ZM17.625 10.3119L15.0272 8.23156C13.1953 9.73156 10.8694 9.92937 8.94188 8.70031C8.55782 8.45601 8.30547 8.05054 8.25589 7.59808C8.2063 7.14562 8.36485 6.69512 8.68688 6.37344C8.68913 6.37071 8.69164 6.3682 8.69438 6.36594L12.9 2.28687L12 2.03L7.27313 3.38094L4.70719 8.51188L9.31969 11.8072L14.7703 13.1694L17.625 10.3119ZM22.2412 6.91438L19.9144 2.25594L18.2559 3.08563L20.5856 7.74406L22.2412 6.91438Z" 
                  fill="#0D141C"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-[#0D141C] text-base font-bold leading-5">
                For NGOs
              </h3>
              <p className="text-[#4F7396] text-sm leading-relaxed">
                Connect with seniors and volunteers to provide essential services and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
