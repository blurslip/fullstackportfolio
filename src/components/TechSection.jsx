import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BASE_URL = import.meta.env.VITE_API_URL;
function TechSection({ scale, showHeading = true }) {
  // ***********Sample Data***********
  const skills = [
    // Frontend
    {
      name: "HTML",
      icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      category: { category: "Frontend" },
    },
    {
      name: "CSS",
      icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
      category: { category: "Frontend" },
    },
    {
      name: "JavaScript",
      icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      category: { category: "Frontend" },
    },
    {
      name: "React",
      icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      category: { category: "Frontend" },
    },
    // Backend
    {
      name: "SpringBoot",
      icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      category: { category: "Backend" },
    },
    {
      name: "Hibernate",
      icon: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg",
      category: { category: "Backend" },
    },
    // Languages
    {
      name: "Java",
      icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      category: { category: "Languages" },
    },
    {
      name: "JavaScript",
      icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      category: { category: "Languages" },
    },

    // Databases
    {
      name: "PostgreSQL",
      icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      category: { category: "Databases" },
    },
    {
      name: "MongoDB",
      icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      category: { category: "Databases" },
    },

    // Tools

    {
      name: "Vercel",
      icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      category: { category: "Tools" },
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: { category: "Tools" },
    },
    {
      name: "IntelliJ IDEA",
      icon: "https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg",
      category: { category: "Tools" },
    },
    {
      name: "VS Code",
      icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg",
      category: { category: "Tools" },
    },
    {
      name: "GitHub",
      icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      category: { category: "Tools" },
    },
  ];

  // const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ***********Fetching Data***********
  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  //   async function fetchLang() {
  //     try {
  //       const response = await fetch(`${BASE_URL}/api/languages`);
  //       const data = await response.json();
  //       setSkills(data);
  //     } catch (error) {
  //       console.error("Error fetching languages ", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchLang();
  // }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    const categoryName = skill.category.category;
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push({ name: skill.name, icon: skill.icon });
    return acc;
  }, {});

  return (
    <>
      <div style={{ transform: `scale(${scale})` }} id="skills">
        {/* Heading */}
        {showHeading && (
          <div className="text-textprimary mt-24 lg:mt-50">
            <div className="text-textprimary lg:text-6xl text-3xl text-center font-extralight">
              <h1>
                These are the <br />
                technologies I've been using...
              </h1>
            </div>
          </div>
        )}
        <div className="overflow-hidden">
          <div className="flex flex-row flex-nowrap justify-evenly lg:my-30 my-15 text-textprimary/80 ">
            {isLoading ? (
              <BeatLoader color="white" />
            ) : (
              <Swiper
                modules={[Autoplay]}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={100}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={6000}
                grabCursor={true}
                breakpoints={{
                  320: { slidesPerView: 1.5, spaceBetween: 20 }, // small phones
                  480: { slidesPerView: 2, spaceBetween: 30 }, // larger phones
                  640: { slidesPerView: 3, spaceBetween: 40 }, // tablets
                  1024: { slidesPerView: 4, spaceBetween: 50 }, // small desktop
                  1280: { slidesPerView: 4, spaceBetween: 60 }, // large desktop
                }}
              >
                {Object.entries(groupedSkills).map(
                  ([categoryName, skillList], index) => (
                    <SwiperSlide key={index}>
                      <div className="tech-box">
                        <p className="text-lg font-semibold mb-4">
                          {categoryName}
                        </p>
                        <ul>
                          {skillList.map((skill, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-3 mb-4"
                            >
                              <div className="bg-navblock p-2 rounded-full">
                                <img
                                  src={skill.icon}
                                  alt={`${skill.name} icon`}
                                  className="w-4 h-4"
                                />
                              </div>
                              <span>{skill.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default TechSection;
