import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle, Lock, Mail, MessageCircle, Menu, X, ChevronRight, GraduationCap, Clock, BookOpen, UserCheck } from 'lucide-react';

// Mock Data
const MOCK_SCHOOLS = [
  { name: "慕尼黑工业大学 (TUM)", type: "TU9精英大学", match: "核心匹配", logo: "T" },
  { name: "亚琛工业大学 (RWTH)", type: "TU9精英大学", match: "冲刺院校", logo: "R" },
  { name: "海德堡大学 (Heidelberg)", type: "精英大学", match: "核心匹配", logo: "H" },
];

export default function App() {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    stage: 'master',
    background: '211',
    gpa: '',
    german: 'b2'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gpa) {
      alert("请输入目前均分");
      return;
    }
    
    setLoading(true);
    setShowResults(false);

    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
      // Scroll to results
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-200 selection:text-indigo-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-900 flex items-center justify-center text-white font-bold text-xl rounded-none">
              济
            </div>
            <span className="font-bold text-xl tracking-tight text-indigo-900">济才德国留学</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="#assessment" className="hover:text-indigo-600 transition-colors">AI评估</a>
            <a href="#universities" className="hover:text-indigo-600 transition-colors">院校库</a>
            <a href="#timeline" className="hover:text-indigo-600 transition-colors">时间轴</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">联系专家</a>
          </nav>

          <button className="md:hidden p-2 text-indigo-900">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="assessment" className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Bauhaus Decorative Elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 text-orange-700 font-bold text-sm tracking-wide uppercase border border-orange-200">
                2025/26 申请季开启
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 tracking-tight mb-6 leading-tight">
                测一测，你的分数<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  能上哪所德国名校？
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                基于 TU9 及精英大学历年录取大数据，Gemini AI 引擎为您精准匹配冲刺院校与核心方案。
              </p>
            </div>

            {/* Assessment Form */}
            <div className="max-w-4xl mx-auto bg-white border-2 border-indigo-900 shadow-[8px_8px_0px_0px_rgba(49,46,129,1)] p-6 md:p-10 relative z-10">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-indigo-900 uppercase tracking-wide">申请阶段</label>
                  <div className="relative">
                    <select 
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 outline-none appearance-none transition-colors font-medium text-gray-700 rounded-none"
                    >
                      <option value="bachelor">本科 (Bachelor)</option>
                      <option value="master">硕士 (Master)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-indigo-900 uppercase tracking-wide">本科背景</label>
                  <div className="relative">
                    <select 
                      name="background"
                      value={formData.background}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 outline-none appearance-none transition-colors font-medium text-gray-700 rounded-none"
                    >
                      <option value="985">985 院校</option>
                      <option value="211">211 院校</option>
                      <option value="double_non">双非院校</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-indigo-900 uppercase tracking-wide">目前均分 (GPA)</label>
                  <input 
                    type="number" 
                    name="gpa"
                    placeholder="例如: 85 或 3.2"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 outline-none transition-colors font-medium text-gray-700 rounded-none placeholder:font-normal"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-indigo-900 uppercase tracking-wide">德语水平</label>
                  <div className="relative">
                    <select 
                      name="german"
                      value={formData.german}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 outline-none appearance-none transition-colors font-medium text-gray-700 rounded-none"
                    >
                      <option value="zero">零基础</option>
                      <option value="a1">A1 - A2</option>
                      <option value="b1">B1 - B2</option>
                      <option value="c1">TestDaF 4*4 / C1</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-indigo-900 text-white font-bold text-lg uppercase tracking-wider hover:bg-blue-600 transition-all duration-200 shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[6px_6px_0px_0px_#F97316] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none"
                  >
                    {loading ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>AI 正在检索 TU9 数据库...</span>
                      </>
                    ) : (
                      <>
                        <span>立即开启 AI 智能评估</span>
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <AnimatePresence>
          {showResults && (
            <motion.section 
              id="results-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-20 bg-indigo-950 text-white relative overflow-hidden"
            >
              <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Public Overview */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center p-3 bg-green-500/20 text-green-400 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    恭喜！为您匹配到 <span className="text-orange-400 text-5xl mx-1">3</span> 所冲刺院校
                  </h2>
                  <p className="text-indigo-200 text-lg">
                    另有 <span className="text-white font-bold">5所</span> 核心匹配院校符合您的背景
                  </p>
                </div>

                {/* Blurred List Container */}
                <div className="relative">
                  {/* The Blurred List */}
                  <div className="space-y-4 filter blur-md select-none pointer-events-none opacity-60">
                    {MOCK_SCHOOLS.map((school, index) => (
                      <div key={index} className="bg-white/10 border border-white/20 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white text-indigo-900 font-bold flex items-center justify-center text-xl">
                            {school.logo}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{school.name}</h3>
                            <p className="text-sm text-indigo-300">{school.type}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase">
                          {school.match}
                        </span>
                      </div>
                    ))}
                    {/* Fake extra rows */}
                    <div className="bg-white/10 border border-white/20 p-6 h-24"></div>
                    <div className="bg-white/10 border border-white/20 p-6 h-24"></div>
                  </div>

                  {/* Conversion Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white text-indigo-950 p-8 max-w-md w-full shadow-2xl border-4 border-orange-500 text-center"
                    >
                      <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">解锁完整匹配报告</h3>
                      <p className="text-gray-600 mb-6 text-sm">
                        获取包含 <span className="font-bold text-indigo-900">录取概率分析</span> 与 <span className="font-bold text-indigo-900">同背景真实案例</span> 的完整报告
                      </p>
                      
                      <div className="bg-gray-100 p-4 mb-6 border-2 border-dashed border-gray-300">
                        <div className="w-32 h-32 bg-white mx-auto flex items-center justify-center text-gray-400 mb-2">
                          {/* QR Code Placeholder */}
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=jicaixiaokefu" alt="QR Code" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs text-gray-500 font-mono">jicaixiaokefu</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-sm font-bold text-indigo-900">
                          <MessageCircle className="w-4 h-4" />
                          <span>长按扫码添加顾问微信</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          或发送邮件至 <a href="mailto:yujin@landwave.cn" className="underline hover:text-orange-500">yujin@landwave.cn</a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Placeholders */}
        <section id="timeline" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-1 bg-orange-500"></div>
              <h2 className="text-3xl font-bold text-indigo-950">留德规划时间轴</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 border border-gray-200 h-64 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-500 transition-colors group cursor-pointer">
                  <Clock className="w-12 h-12 mb-4 group-hover:text-indigo-500 transition-colors" />
                  <span className="font-mono text-sm">PHASE 0{i}</span>
                  <span className="font-bold text-lg text-gray-300 group-hover:text-gray-600">规划模块占位</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="universities" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-1 bg-blue-500"></div>
              <h2 className="text-3xl font-bold text-indigo-950">德国院校图鉴</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-indigo-50 transition-colors">
                  <GraduationCap className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-950 text-white py-12 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-indigo-900 flex items-center justify-center font-bold">济</div>
              <span className="font-bold text-lg">济才德国留学</span>
            </div>
            <p className="text-indigo-300 text-sm leading-relaxed">
              专注德国留学申请，深耕 TU9 及精英大学高端录取。
              <br />严谨、专业、透明。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-orange-400 uppercase tracking-wider text-sm">联系我们</h4>
            <ul className="space-y-4 text-sm text-indigo-200">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4" />
                <span>WeChat: jicaixiaokefu</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Email: yujin@landwave.cn</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-orange-400 uppercase tracking-wider text-sm">关于我们</h4>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li><a href="#" className="hover:text-white">品牌故事</a></li>
              <li><a href="#" className="hover:text-white">成功案例</a></li>
              <li><a href="#" className="hover:text-white">隐私政策</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-indigo-900 text-center text-xs text-indigo-400">
          &copy; 2025 Jicai Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
