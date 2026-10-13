/*
  CONTENT CONFIGURATION
  ---------------------
  Keep portfolio content here so the visual template stays reusable.
  To add slideshow images, add another object to slideshowImages below.
  Example:
    { src: "assets/slides/lab-03.jpg", label: "Full-scale structural testing" }
*/

const PORTFOLIO = {
  scientist: {
    name: "Dr. Ajay Chourasia",
    credentials: "Ph.D (Engg.), MBA",
    designation: "Chief Scientist",
    role: "CSIR-Central Building Research Institute (CBRI), Roorkee",
    location: "Roorkee, Uttarakhand, India",
    email: "ajayc.cbri@csir.res.in",
    emailAlt: "ajaycbri@gmail.com",
    phone: "+91 1332-283410 (office)",
    mobile: "+91 9897209050",
    profile: "Dr. Ajay Chourasia is a globally recognized leader in earthquake engineering and resilient infrastructure, with over three decades of contributions spanning research, technology innovation, national implementation and policy integration. His work brings together experimental engineering, advanced construction technologies and large-scale societal deployment.",
    lead: "Research and innovation across earthquake engineering, resilient infrastructure, confined masonry, prefabricated construction, 3D Concrete Printing, structural health monitoring, seismic risk and climate-responsive buildings.",
    specialization: [
      { title: "Earthquake Engineering & Seismic Risk Reduction", text: "Design, vulnerability assessment, retrofitting and post-disaster reconstruction." },
      { title: "Innovative Construction Technologies", text: "Confined masonry, precast systems and 3D Concrete Printing for deployment at scale." },
      { title: "Structural Engineering & Computational Modelling", text: "Nonlinear analysis, structural dynamics and performance-based design." },
      { title: "Disaster Risk & Policy Integration", text: "PDNA, risk frameworks, decision-support systems and national advisory work." },
      { title: "Sustainable & Climate-Responsive Built Environment", text: "Climate-resilient buildings, low-carbon materials and life-cycle performance." }
    ]
  },

  slideshowImages: [
    {src:"assets/slides/pic1.png", label: "" },
    {src:"assets/slides/pic2.png", label: "" },
    {src:"assets/slides/pic3.png", label: "" },
    {src:"assets/slides/pic4.png", label: "" },
    {src:"assets/slides/pic5.png", label:"" },
    {src:"assets/slides/pic6.png", label: "" },
    {src:"assets/slides/pic7.png", label: "" },
    {src:"assets/slides/nepal.png", label: "" },
    {src:"assets/slides/selfie.png", label: "" },
    {src:"assets/slides/library.jpg", label: "" },
    {src:"assets/slides/nepal1.png", label: "" },
    {src:"assets/slides/library1.jpg", label: "" },

    //  {src:"assets/slides/onsite.png", label: "onsite team coordination" },
    // {src:"assets/slides/neetf.png", label: "National Earthquake Engineering Test Facility" }
   
    // Add your images here. Keep the format exactly like this:
    // { src: "assets/slides/laboratory-01.jpg", label: "National Earthquake Engineering Test Facility" },
    // { src: "assets/slides/3d-printing-01.jpg", label: "3D Concrete Printing research" },
    // { src: "assets/slides/field-01.jpg", label: "Field assessment and resilient construction" },
    // { src: "assets/slides/project-01.jpg", label: "Project implementation" },
  ],

  metrics: [
    { value: "200+", label: "research publications" },
    { value: "20", label: "books / major volumes" },
    { value: "7", label: "patents reported" }
  ],

  sidebarStats: [
    { value: "30+", label: "years of R&D" },
    { value: "200+", label: "R&D & consultancy projects" },
    { value: "50k+", label: "professionals trained" },
    { value: "6", label: "technologies transferred" }
  ],

  impact: [
    { value: "1M+", title: "Confined masonry buildings", text: "Field implementation reported in the supplied CV." },
    { value: "2.5M", title: "Housing units", text: "Precast / monolithic technologies reported in the supplied CV." },
    { value: "500+", title: "Critical structures", text: "Seismic retrofitting / strengthening impact reported." },
    { value: "50,000+", title: "Professionals trained", text: "Training and capacity-building impact reported." },
    { value: "70", title: "Schools in Nepal", text: "Led planning, design and construction monitoring across earthquake-affected districts." },
    { value: "147", title: "Hospitals in Nepal", text: "Led planning, design and construction monitoring as part of the Nepal reconstruction programme." },
    { value: "1000+", title: "COVID emergency beds", text: "Rapid deployment of makeshift hospital capacity is highlighted in the CV." },
    { value: "4", title: "National research facilities", text: "NEETF, Building Dynamics Laboratory, 3DCP facility and Construction Technology / climate-resilient platforms are highlighted." }
  ],

  projects: [
    { category: "International", year: "—", title: "Post-earthquake Reconstruction of Disaster Resilient Health Infrastructure in Nepal", detail: "Planning, Design & Construction Audit with Indian and Nepalese government institutions." },
    { category: "International", year: "—", title: "Post-earthquake Reconstruction of Disaster Resilient Schools / Libraries in Nepal", detail: "Planning, Design & Construction Audit with Indian and Nepalese government institutions." },
    { category: "International", year: "—", title: "Structural Health Monitoring of Tall Buildings using Vibration-based Techniques", detail: "DST IC-IMPACT collaboration with Concordia University, Canada." },
    { category: "International", year: "—", title: "Improving Seismic Resistance of Cultural Heritage Buildings", detail: "EU-INDIA programme collaboration with University of Minho, Portugal." },
    { category: "Game Changing", year: "2020–22", title: "Development of Robotic Inspection and Mechanized Sewage Clearing System", detail: "Construction automation and mechanized infrastructure intervention." },
    { category: "Game Changing", year: "2020–21", title: "Development of COVID-19 Makeshift Hospital", detail: "Prefab, foldable, lightweight and speedy-assembly emergency hospital concept." },
    { category: "Game Changing", year: "2018–22", title: "Emerging Construction Technologies for Housing", detail: "Development, demonstration, evaluation and Light House Projects." },
    { category: "R&D", year: "2025", title: "Risk Assessment of Towns in Indian Himalayan Region: Uttarakhand and Himachal Pradesh", detail: "National Disaster Management Authority, Ministry of Home Affairs, Government of India." },
    { category: "R&D", year: "2025", title: "Method for Preparing Earthquake Risk Scenarios in States and UTs of India", detail: "National Disaster Management Authority, Ministry of Home Affairs, Government of India." },
    { category: "R&D", year: "2023–25", title: "Safe & Sustainable Climate Resilient Buildings for India", detail: "CSIR Fast Track Mission Mode Project; Nodal Officer." },
    { category: "R&D", year: "2023–25", title: "Smart Village", detail: "CSIR Fast Track Mission Mode Project; Mentor." },
    { category: "R&D", year: "2023–25", title: "Encyclopedia for Climate Resilient Traditional and Fusion Construction Technologies of India", detail: "CSIR, New Delhi." },
    { category: "R&D", year: "2023–25", title: "Climate Resilient Building for Different Climatic Regions of India", detail: "CSIR, New Delhi." },
    { category: "R&D", year: "2023–25", title: "Climate Resilient & Seismic Resistant Building System using Cold-Formed Steel", detail: "Concrete-filled cold-formed steel systems and materials for different climatic regions." },
    { category: "R&D", year: "2023–25", title: "Load-Bearing Bamboo–EPS Building", detail: "Design philosophy and methodology development." },
    { category: "R&D", year: "2023–25", title: "Climate Resilient Confined Masonry using Hollow Concrete Blocks", detail: "Enhanced productivity and resilience." },
    { category: "R&D", year: "2023–25", title: "Agro-Industrial Waste Based Composite Infill Panels", detail: "Region-specific panels for different climatic regions of India." },
    { category: "R&D", year: "2023–25", title: "Construction Automation of Climate Resilient Building Components", detail: "Automation and field-oriented construction technology." },
    { category: "R&D", year: "2023–25", title: "Field Demonstration & Monitoring of Climate Resilient Buildings", detail: "Demonstrations at Roorkee, Leh, Pilani and Jorhat." },
    { category: "R&D", year: "2022–24", title: "Agro-Industrial Alkali-Activated Composites for Prefabricated Building Elements and 3D Volumetric Construction", detail: "MOUHA-supported R&D programme." },
    { category: "R&D", year: "2020–22", title: "Development of Fiber Bragg Grating Long Gauge Sensors for Structural Health Monitoring", detail: "CSIR project." },
    { category: "R&D", year: "2018–20", title: "Fast, Durable and Energy Efficient Mass Housing Scheme", detail: "CSIR Mission Mode Project; Nodal Officer." },
    { category: "R&D", year: "2018–20", title: "Prefab RC Shear Wall Systems", detail: "Development and evaluation of lateral load resistance." },
    { category: "R&D", year: "2018–20", title: "Efficient Mechanical Anchorage Device for Precast Beam-Column Joints", detail: "CSIR R&D project." },
    { category: "R&D", year: "2018–20", title: "Dry-Construction Technology in Buildings", detail: "Development and performance evaluation." },
    { category: "R&D", year: "2018–20", title: "Mechanization in Mass Housing Construction", detail: "Construction process and production mechanization." },
    { category: "R&D", year: "2018–20", title: "Confined Masonry Construction using Different Units", detail: "Concrete masonry, AAC and lightweight concrete blocks." },
    { category: "R&D", year: "2012–17", title: "Performance Evaluation of Confined Masonry Buildings", detail: "Quasi-static lateral load testing and seismic performance." },
    { category: "R&D", year: "2012–17", title: "Health Monitoring of Buildings using Wireless Sensor Network", detail: "Structural health monitoring research." },
    { category: "R&D", year: "2012–17", title: "Early Warning Instrumentation & Decision Package for Landslide in Chamoli–Joshimath", detail: "CSIR-CBRI research programme." },
    { category: "R&D", year: "2012–17", title: "Disaster Resistant Intermediate Shelters for Western Himalayan Region", detail: "Design and development." },
    { category: "Sponsored", year: "2025", title: "Rehabilitation of Heritage Structure and Quality Assessment at Mahakaleshwar Temple Complex", detail: "Heritage rehabilitation and RCC construction quality assessment." },
    { category: "Sponsored", year: "2025", title: "Carrying Capacity Based Developmental Planning for Pharmaceutical Drug Park at Una", detail: "Government of Himachal Pradesh." },
    { category: "Sponsored", year: "2023", title: "Building Safety Assessment on Hilly Slopes of Karnaprayag", detail: "Government of Uttarakhand." },
    { category: "Sponsored", year: "2023", title: "Mitigation, Recovery & Reconstruction of Subsidence Zone in Joshimath", detail: "Government of Uttarakhand." },
    { category: "Sponsored", year: "2022", title: "Planning & Design of Township at Tapovan Vishnugad HPP", detail: "National Thermal Power Corporation." },
    { category: "Sponsored", year: "2022", title: "Structural Health Monitoring of New Parliament Building", detail: "CPWD, New Delhi." },
    { category: "Sponsored", year: "2021", title: "Seismic Vulnerability Assessment & Retrofit of Lifeline Buildings in Himachal", detail: "HP State Disaster Management Authority." },
    { category: "Sponsored", year: "2021", title: "Technical Advice & Design Review for Reconstruction of Shri Kedarnath Dham", detail: "Government of Uttarakhand." },
    { category: "Sponsored", year: "2021", title: "Structural Health Monitoring of New Kalwa Bridge Navigation Span", detail: "Thane Municipal Corporation." },
    { category: "Sponsored", year: "2021", title: "Seismic Vulnerability Assessment & Retrofit of Lifeline Structures in Uttarakhand", detail: "Rural Works Department / SDMA, Dehradun." },
    { category: "Sponsored", year: "2021", title: "COVID-19 Makeshift Hospital at Bhatinda", detail: "Government of Punjab." },
    { category: "Sponsored", year: "2020", title: "COVID-19 Makeshift Hospitals at Shimla, Tanda, Nalagarh, Una and Mandi", detail: "Health departments and government agencies in Himachal Pradesh." },
    { category: "Sponsored", year: "2014", title: "Instrumentation & Monitoring of Buildings and RE Walls at Greenfield Airport, Pakyong, Sikkim", detail: "Airport Authority of India." },
    { category: "Sponsored", year: "2013", title: "Restoration of Konark Temple, Odisha", detail: "Archaeological Survey of India." },
    { category: "Sponsored", year: "2004", title: "Structural Integrity Test on 1/5th Scale Model of Core Support Structure", detail: "IGCAR, Kalpakkam." },
    { category: "Developmental", year: "2026", title: "Structural Safety, Durability, Long-Term Resilience and Aircraft-Induced Vibration Effects on Airport Terminal Buildings", detail: "Advanced guideline development for airport infrastructure; Airport Authority of India." },
    { category: "Developmental", year: "2024", title: "Structural Safety Assessment of Eklavya Model Residential Schools in India", detail: "National Education Society for Tribal Students." },
    { category: "Developmental", year: "2024", title: "Quality Assurance for Construction of Eklavya Model Residential Schools", detail: "National Education Society for Tribal Students." },
    { category: "Developmental", year: "2021", title: "Simplified Guidelines to Earthquake Resistant Housing Construction for Common Man", detail: "National Disaster Management Authority." },
    { category: "Developmental", year: "2018", title: "Resettlement of Displaced People of Myanmar: Pre-Fabricated Housing in Rakhine State", detail: "Ministry of External Affairs, Government of India." },
    { category: "Developmental", year: "2015", title: "Rehabilitation of Kedarnath Dham", detail: "Nehru Institute of Mountaineering / Government of Uttarakhand." }
  ],

  highlights: [
    { title: "Confined masonry", text: "Full-scale experimental and numerical work led to design guidance, codal inputs and broad field implementation. The contribution record reports implementation across multiple Indian states." },
    { title: "Joshimath subsidence", text: "A physical damage assessment of 2,364 buildings over approximately 2.8 sq km was used to assess vulnerability and support risk mapping and rehabilitation strategy." },
    { title: "Nepal reconstruction", text: "Led planning, design and construction monitoring for 70 schools, 2 libraries and 147 hospitals in 10 earthquake-affected districts." },
    { title: "Lifeline seismic safety", text: "Developed a three-level assessment approach using Rapid Visual Survey, Simplified Vulnerability Assessment and Detailed Vulnerability Assessment." },
    { title: "Construction technology", text: "Contributions include prefabricated / precast systems, 3D Concrete Printing, automation, lightweight systems, mechanical anchorage and climate-resilient construction." },
    { title: "Research infrastructure", text: "The supplied records highlight the National Earthquake Engineering Test Facility, Building Dynamics Laboratory, 3D Concrete Printing facility and Construction Technology Demonstration Park." }
  ],

  publications: [
    { year: "2026", type: "Book", title: "Advances and Challenges in 3D Printed Concrete (3DPC): A Holistic Approach", venue: "Material Horizons: From Nature to Nanomaterials, Springer" },
    { year: "2025", type: "Book", title: "Futuristic Trends in Structural Engineering", venue: "Lecture Notes in Civil Engineering / Springer" },
    { year: "2025", type: "Book", title: "Rudraksha: A Guidebook for Disaster Resilient Construction for Uttarakhand (Residential Buildings)", venue: "CSIR-CBRI" },
    { year: "2025", type: "Chapter", title: "Subsidence Induced Damage Assessment of Buildings in Joshimath", venue: "Geophysics for Advancing Seismology, Springer Geophysics" },
    { year: "2026", type: "Journal", title: "Evolution of peak ground acceleration levels: global trends from selected international case studies and implications for India", venue: "Current Science, Vol. 131, No. 2" },
    { year: "2026", type: "Journal", title: "Subsidence monitoring at Pakyong Greenfield Airport in Sikkim Himalaya, India", venue: "Journal of Earth System Science (in-print in supplied record)" },
    { year: "2026", type: "Journal", title: "Advancing Fire Safety in Buildings: Performance Evaluation of Conventional, 3D Printed, and Agro-Industrial Waste-Based Concrete", venue: "Sustainable and Resilient Infrastructure" },
    { year: "2026", type: "Journal", title: "Eco-optimization of sugarcane bagasse ash-based 3D printable concrete using response surface modelling", venue: "Elsevier" },
    { year: "2026", type: "Journal", title: "Seismic performance of prefabricated prefinished volumetric construction (PPVC) concrete building", venue: "Journal of Building Engineering" },
    { year: "2026", type: "Journal", title: "Numerical study on the performance of SMA-reinforced beam-column joints with headed bar connections", venue: "Structures" },
    { year: "2026", type: "Journal", title: "Ultrasonic Acoustoelastic Coefficients for Stress Evaluation in Concrete Member Subjected to Flexural Loading", venue: "Russian Journal of Non-destructive Testing" },
    { year: "2025", type: "Journal", title: "Efficiency of aerated lightweight concrete panels and building under seismic load: an experimental and numerical investigation", venue: "Sustainable and Resilient Infrastructure" },
    { year: "2025", type: "Journal", title: "Earthquake scenario based risk assessment for Karnaprayag town in Uttarakhand, India", venue: "Communications Earth & Environment (submitted in supplied record)" },
    { year: "2025", type: "Chapter", title: "3D Concrete Printing", venue: "Alternate & Innovative Construction Systems for Housing, 2nd Edition" },
    { year: "2025", type: "Chapter", title: "3D Precast Volumetric Concrete Construction", venue: "Alternate & Innovative Construction Systems for Housing, 2nd Edition" },
    { year: "2021", type: "Journal", title: "Damage Limitation and Structural Behaviour Factor for Masonry Structures", venue: "Australian Journal of Structural Engineering" },
    { year: "2020", type: "Journal", title: "Anchorage Behaviour of Headed Bars as Connection System for Precast Reinforced Concrete Structural Components", venue: "Structures" },
    { year: "2020", type: "Journal", title: "Seismic Performance Evaluation of Full-scale Confined Masonry Building using Lightweight Panels", venue: "Journal of Building Engineering" },
    { year: "2016", type: "Journal", title: "Seismic Performance of Different Masonry Buildings: A Full-scale Experimental Study", venue: "Journal of Performance of Constructed Facilities" }
  ],

  awards: [
    { year: "2025", title: "Disaster Risk Reduction Award", detail: "World Congress on Disaster Management, DMICS, Hyderabad." },
    { year: "2024", title: "15th CIDC Vishwakarma Achievement Award", detail: "Best Scientist – Structural Engineer, CIDC / Ministry of Commerce & Industry, Government of India." },
    { year: "2023", title: "IAStructE National Award", detail: "Outstanding Structural Engineer Award — In Pursuit of Excellence in Structural Engineering." },
    { year: "2023", title: "Diamond Jubilee Best Technology Award", detail: "Light-weight Cellular Blocks for Confined Masonry Construction, CSIR-CBRI." },
    { year: "2021", title: "Best Technology Award", detail: "Prefab, Foldable, Light-weight, Speedy Assembly Makeshift COVID-19 Hospital, CSIR-CBRI." },
    { year: "2021", title: "Excellence Award: Industrial Research", detail: "The Institution of Engineers (India)." },
    { year: "2020", title: "Best Technology Award", detail: "Headed bar as mechanical anchorage system for RC beam-column joints, CSIR-CBRI." },
    { year: "2019", title: "Diamond Jubilee Best Technology Award", detail: "Round Boulder Mortar (RBM) Units for hilly regions, CSIR-CBRI." },
    { year: "2019", title: "Outstanding Concrete Technologist Award of Uttarakhand", detail: "Indian Concrete Institute, Uttarakhand." },
    { year: "2017", title: "Diamond Jubilee Research Paper Award", detail: "Seismic Performance of Different Masonry Buildings: A Full-scale Experimental Study." },
    { year: "2016", title: "Eminent Engineers Award", detail: "Uttarakhand State Centre of The Institution of Engineers (India)." }
  ],

  patents: [
    "A Multi usable self-rescue descent system and method thereof (in pipeline), 2025",
    "Agro-Industrial Waste Based 3D Printed Concrete Block (3DPCB) Units and Production Method Thereof (in pipeline), 2025",
    "Deformed Head Bars as Mechanical Anchorage System for Reinforced Concrete Beam-Column Joints, 2021",
    "Round Boulders Mortar (RBM) Units for Masonry Works, 2018",
    "Steel Jacketing Technique for Strengthening Coal Pillars to Improve Underground Coal Recovery, 2018",
    "3-D Deformometer for measurement of deformation of prism in three perpendicular directions simultaneously, 2014",
    "Semi-automatic Wall Plastering Machine (in pipeline)"
  ],

  education: [
    { year: "2015", title: "Ph.D. (Structural Engineering)", detail: "Indian Institute of Technology Roorkee. Thesis: Performance Evaluation of Confined Masonry Buildings under Cyclic Lateral Loads." },
    { year: "1999", title: "Master of Engineering (Civil Engineering)", detail: "Nagpur University, Nagpur, India." },
    { year: "1996", title: "Master of Business Administration", detail: "Nagpur University, Nagpur, India." },
    { year: "1996–2019", title: "CSIR-CBRI research career", detail: "Research and development in the Structural Engineering Group through Scientist, Senior Scientist, Principal Scientist and Senior Principal Scientist roles." },
    { year: "1990–1996", title: "CSIR-NEERI research career", detail: "Research and development in Environmental Engineering and Computer Applications at CSIR-NEERI, Nagpur." }
  ],

  technologyTransfer: [
    "Novel Cost Effective Surficial Geometric Imperfection Measurement Device — Ocean Enterprises, Haridwar (2025)",
    "Headed bars as mechanical anchorage system in RC beam-column joints — B.G. Shirke Construction Technology Pvt. Ltd. (2020)",
    "Light Weight Cellular Blocks for Building Construction — Bharat Navnirman, Bijnour (2020)",
    "Brick Making machine for Flyash-Sand-Cement / Lime Bricks — Diamond Engineering Corporation, Roorkee",
    "Prefab, Foldable, Light-weight, Speedy Assembly Makeshift COVID-19 Hospital — Everest Industries and JT & Events (2020)",
    "Semi-automatic Wall Plastering Machine — available for commercialization / in pipeline"
  ],

  contactSummary: "The portfolio is intended as a neutral professional platform for scientific communication, collaboration, technical exchange and documentation of research impact."
};
