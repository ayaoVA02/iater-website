import React, { useState, useEffect } from 'react';

import { BiBrain, BiUser } from 'react-icons/bi';
import { CgPullClear } from 'react-icons/cg';

// Types for our data structure
const TABS = {
  EDUCATION: 0,
  RESEARCH: 1,
  CREATIVE: 2
};

// This would typically come from a database
const fetchContentFromDB = async (tabId) => {
  // Simulating API call to database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tabContents[tabId]);
    }, 300);
  });
};

// Content data structure (would be in a database in a real application)
const tabContents = {
  [TABS.EDUCATION]: {
    icon: <BiUser className="w-12 h-12" />,
    title: "AI 전문 인재양성",
    subtitle: "AI and IT Education Programs",
    content: [
      {
        heading: "iATER는 AI 및 IT 분야의 글로벌 인재를 양성하기 위해, 다음과 같은 체계적인 교육 프로그램을 운영하고 있습니다:",
        items: [
          { 
            title: "AI 및 머신러닝 전문가 과정", 
            description: "머신러닝, 딥러닝, 자연어 처리(NLP), 컴퓨터 비전 등 AI 핵심 기술 교육" 
          },
          { 
            title: "소프트웨어 개발 및 프로그래밍 교육", 
            description: "Python, JavaScript, 클라우드 컴퓨팅, 데이터 엔지니어링 등" 
          },
          { 
            title: "AI × 분야 융합 교육", 
            description: "AI를 다양한 산업과 융합하여 창의적인 문제 해결 능력을 갖춘 인재 육성" 
          },
          { 
            title: "산업 연계 프로젝트 및 실전 교육", 
            description: "기업과 협력하여 실무 중심의 연구 프로젝트 수행" 
          }
        ]
      },
      {
        heading: "자원이 부족한 국가에서도 AI 및 IT 인재를 양성할 수 있도록, 온라인 및 오프라인을 결합한 하이브리드 교육 시스템을 구축하고 있으며, ChatGPT 및 AI 기반 교육 도구를 활용하여 보다 효율적인 학습 환경을 제공하고 있습니다.",
        items: []
      }
    ]
  },
  [TABS.RESEARCH]: {
    icon: <CgPullClear className="w-12 h-12" />,
    title: "연구 개발(R&D) 및 핵심 기술 연구",
    subtitle: "Research & Development and Core Technologies",
    content: [
      {
        heading: "iATER는 AI 및 IT 관련 연구개발(R&D)을 통해, 최신 기술을 탐구하고 실용적인 혁신을 창출하는 데 주력하고 있습니다:",
        items: [
          { 
            title: "주요 연구 분야", 
            description: "AI 및 머신러닝 연구: AI 알고리즘 최적화, 자동화 학습 시스템, 강화학습(RL) 연구" 
          },
          { 
            title: "자연어 처리(NLP) 및 생성형 AI 연구", 
            description: "ChatGPT, AI 번역기, 음성 인식, AI 기반 콘텐츠 생성" 
          },
          { 
            title: "데이터 과학 및 빅데이터 연구", 
            description: "데이터 분석, 예측 모델링, 스마트 도시(Smart City) 기술 연구" 
          },
          { 
            title: "AI+예술 & 엔터테인먼트 연구", 
            description: "AI 기반 애니메이션 제작, AI 아트 생성, 실시간 렌더링 기술" 
          },
          { 
            title: "로보틱스 및 자동화 연구", 
            description: "AI 로봇 개발, 자율주행 기술, 스마트 공장(Factories of the Future)" 
          }
        ]
      },
      {
        heading: "이러한 연구는 단순한 이론 연구에 그치지 않고, 실제 산업 및 사회적 문제 해결을 위한 응용 연구로 연결되며, 연구 결과는 라오스 및 글로벌 기업과 협력하여 상용화될 수 있도록 지원하고 있습니다.",
        items: []
      }
    ]
  },
  [TABS.CREATIVE]: {
    icon: <BiBrain className="w-12 h-12" />,
    title: "AI + 창의산업",
    subtitle: "AI + Creative Industries",
    content: [
      {
        heading: "iATER는 AI 기술이 예술 및 창의적인 분야에서도 혁신을 이루어낼 수 있다는 점에 주목하고 있습니다. AI 기반 애니메이션 제작, 멀티미디어 콘텐츠 개발, 그리고 창의적인 디자인 기술을 활용하여, 라오스의 젊은 예술가들이 디지털 시대에 더욱 창의적인 작업을 할 수 있도록 지원하고 있습니다:",
        items: [
          { 
            title: "AI 기반 창작 및 콘텐츠 제작 연구", 
            description: "AI 애니메이션 및 캐릭터 디자인: AI 기반 이미지 생성, 가상 캐릭터 애니메이션, 3D 모델링" 
          },
          { 
            title: "AI 기반 음악 및 사운드 디자인", 
            description: "AI 작곡, 음성 합성 기술, AI 기반 오디오 제작" 
          },
          { 
            title: "가상현실(VR) 및 증강현실(AR) 연구", 
            description: "AI와 결합된 몰입형 경험 개발" 
          },
          { 
            title: "AI 영상 처리 및 자동화 기술", 
            description: "AI 기반 자동 편집, 실시간 그래픽 생성, 딥러닝 기반 영상 합성" 
          }
        ]
      },
      {
        heading: "특히, 애니메이션과 게임 개발을 위한 AI 활용을 연구하며, AI 기반의 실시간 그래픽 생성, 캐릭터 동작 자동화, 스크립팅링 보조 시스템 등을 적극적으로 도입하고 있습니다. 이를 통해, 창작자들은 더 짧은 시간 내에 더욱 창의적이고 몰입감 있는 작품을 만들 수 있습니다.",
        items: []
      },
      {
        heading: "AI와 함께하는 미래& 한국의 선도적인 IT 전문가와 교수진의 지도 아래, 우리는 라오스의 청년들이 AI와 결합된 다양한 기술을 익히고, 이를 바탕으로 창의적이고 혁신적인 성과를 이루어낼 수 있도록 지원하고 있습니다. AI 기술을 활용하여 혁신적인 해결책을 모색하는 젊은이들의 모습을 보며, 우리는 라오스의 IT 및 창작 산업의 미래가 매우 밝다고 확신합니다.",
        items: []
      },
      {
        heading: "iATER는 AI 및 IT 교육의 저변을 확대하고, ChatGPT와 같은 AI 도구를 활용하여 누구나 쉽게 AI를 접하고 배울 수 있는 환경을 구축하는 데 앞장서고 있습니다. AI 기술이 단순한 연구 분야를 넘어, IT, 예술, 교육, 정책 등 모든 산업과 융합되어 지속 가능한 발전 을 이끌어 낼이 될 수 있도록 최선을 다할 것입니다.",
        items: []
      }
    ]
  }
};

// Main component
const AIResearchTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS.EDUCATION);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Icons for navigation
  const navIcons = [
    { id: TABS.EDUCATION, icon: <BiUser className="w-8 h-8" /> },
    { id: TABS.RESEARCH, icon: <CgPullClear className="w-8 h-8" /> },
    { id: TABS.CREATIVE, icon: <BiBrain className="w-8 h-8" /> }
  ];

  // Fetch content when tab changes (simulating database fetch)
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const data = await fetchContentFromDB(activeTab);
      setContent(data);
      setLoading(false);
    };
    
    loadContent();
  }, [activeTab]);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden mt-[8rem] mb-[4rem]">
      {/* Main content area with sidebar */}
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Sidebar navigation */}
        <div className="w-full md:w-20 bg-gray-50 p-4 flex md:flex-col justify-center md:justify-start items-center space-y-0 md:space-y-6 space-x-4 md:space-x-0 border-b md:border-b-0 md:border-r border-gray-200">
          {navIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-blue-100 border-2 border-blue-500 shadow-md'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
              aria-label={`Tab ${item.id}`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : content ? (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg border-2 border-blue-500">
                  {content.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
                  <p className="text-gray-600">{content.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                {content.content.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <p className="text-gray-800 font-medium">{section.heading}</p>
                    
                    {section.items.length > 0 && (
                      <ul className="space-y-3 pl-5">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="space-y-1">
                            <p className="font-semibold text-gray-800">{item.title}</p>
                            <p className="text-gray-700">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">No content available</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Database connection utility (in a real app, this would connect to your actual database)
const connectToDatabase = async () => {
  // This is a placeholder for actual database connection logic
  console.log('Connecting to database...');
  // In a real application, you would use something like:
  // const client = new MongoClient(process.env.MONGODB_URI);
  // await client.connect();
  // return client.db('your_database');
  
  return {
    collection: (name) => ({
      find: async (query) => {
        console.log(`Finding documents in ${name} with query:`, query);
        // Simulate database query
        if (name === 'ai_content' && query.tabId !== undefined) {
          return [tabContents[query.tabId]];
        }
        return [];
      },
      insertOne: async (document) => {
        console.log(`Inserting document into ${name}:`, document);
        return { insertedId: 'simulated_id' };
      }
    })
  };
};

// Example of how you would use this in a real application with database
const fetchContentFromDatabase = async (tabId) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('ai_content');
    const results = await collection.find({ tabId });
    return results[0] || null;
  } catch (error) {
    console.error('Error fetching content from database:', error);
    return null;
  }
};

// Example of how you would save content to the database
const saveContentToDatabase = async (tabId, content) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('ai_content');
    await collection.insertOne({
      tabId,
      ...content,
      createdAt: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error saving content to database:', error);
    return false;
  }
};

export default AIResearchTabs;