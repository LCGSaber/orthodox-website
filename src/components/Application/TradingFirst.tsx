import React, { useState } from "react";
import styles from "src/styles/applications/AdmissionGuide.module.css";
import Link from 'next/link';

const AdmissionGuide: React.FC = () => {
  // 用于控制当前显示的标签，0 表示小一申请，1 表示中一申请，2 表示中小学插班
  const [activeTab, setActiveTab] = useState(0); 

  // 用于控制内容的展开/折叠状态
  const [expandedSections, setExpandedSections] = useState({ cat4: true, map: false, isee: false, interview: false, feature: true, teaching: false, teachers: false, subjects: false });

  // 切换展开/折叠状态的函数
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  // 小一申请对应的内容和材料 
  const primaryOneContent = (
    <div className={styles.examContainer}>
      {/* CAT4考试部分 - 可展开折叠 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('cat4')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.cat4 ? styles.examIconActive : ''}`}>●</span>
            CAT4：哈罗/启历/墨尔文等
          </div>
          <div className={`${styles.examToggle} ${expandedSections.cat4 ? styles.examToggleActive : ''}`}>
            {expandedSections.cat4 ? '−' : '+'}
          </div>
        </div>
        {expandedSections.cat4 && (
          <div className={styles.examSectionContent}>
            <p className={styles.examParagraph}>Cognitive Ability Test: Fourth Edition (CAT4)，是一个认知能力测试的第4版本，用来评估6-17岁学生的发展能力和未来的学术潜力。学校会根据学生在CAT4中的表现来判断学生的学习和理解能力是否符合该年纪应达到的程度，从而决定取录与否。</p>
            <p className={styles.examSubTitle}>CAT4考什么？</p>
            <p className={styles.examParagraph}>CAT4有3个部份，每个部份45分钟，包括4类题目，均以选择题去作答：</p>
            <ol className={styles.examList}>
              <li>Non-Verbal Reasoning 逻辑推理</li>
              <li>Verbal Reasoning 文字推理</li>
              <li>Quantitative Reasoning 数学推理</li>
              <li>Spatial Ability 空间视觉能力</li>
            </ol>
          </div>
        )}
      </div>

      {/* MAP考试部分 - 可展开折叠 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('map')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.map ? styles.examIconActive : ''}`}>●</span>
            MAP：加拿大国际/美国国际学校/香港国际学校/沪江维多利亚等
          </div>
          <div className={`${styles.examToggle} ${expandedSections.map ? styles.examToggleActive : ''}`}>
            {expandedSections.map ? '−' : '+'}
          </div>
        </div>
        {expandedSections.map && (
          <div className={styles.examSectionContent}>
          <p className={styles.examParagraph}>Measures of Academic Progress是一种基于网路的电脑自适应测试自动为学生挑选题目，每个学生都有独一无二的测试题目；题目难度会随著考生答题状况而变化，并最终稳定在学生学习能力的最近发展区域。</p>
          <p className={styles.examSubTitle}>MAP考什么？</p>
          <p className={styles.examParagraph}>MAP每科的题量40-53题，单科约1小时。题型主要是选择题（也有部分填空题、匹配题），主要包含四个科目：</p>
          <ol className={styles.examList}>
            <li>1.阅读、辞彙等内容（Reading）</li>
            <li>2.语法、写作等内容（Language Usage）</li>
            <li>3.数学（Mathematics）</li>
            <li>4.科学（Science）</li>
          </ol>
        </div>
        )}
      </div>

      {/* ISEE考试部分 - 可展开折叠 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('isee')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.isee ? styles.examIconActive : ''}`}>●</span>
            ISEE：美国国际学校/香港国际学校等
          </div>
          <div className={`${styles.examToggle} ${expandedSections.isee ? styles.examToggleActive : ''}`}>
            {expandedSections.isee ? '−' : '+'}
          </div>
        </div>
        {expandedSections.isee && (
          <div className={styles.examSectionContent}>
          <p className={styles.examParagraph}>ISEE 有四个Level，分别针对小学、中学、高中的入学考试。</p>
          <ol className={styles.examList}>
            <li>1.Primary Level: G1-G3 申请入学G2-G4</li>
            <li>2.Lower Level: G4-G5 申请入学G5-G6</li>
            <li>3.Middle Level: G6-G7 申请入学G7-G8</li>
            <li>4.Upper Level: G8-G11 申请入学G9-G12</li>
          </ol>
          <p className={styles.examSubTitle}>ISEE考什么？</p>
          <p className={styles.examParagraph}>ISEE考试的内容:</p>
          <p className={styles.examParagraph}>初、中、高级三个级别（申请5-12年级）是ISEE考试中最常见的，都包含以下五项考查内容：</p>
          <ol className={styles.examList}>
            <li>1.语文推理（Verbal Reasoning）</li>
            <li>2.数量推理（ Quantitative Reasoning）</li>
            <li>3.阅读理解（ Reading Comprehension）</li>
            <li>4.数学成就（Mathematics Achievement） 5.写作（Essay）</li>
          </ol>
        </div>
        )}
      </div>

      {/* 面试培训部分 - 可展开折叠 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('interview')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.interview ? styles.examIconActive : ''}`}>●</span>
            面试培训
          </div>
          <div className={`${styles.examToggle} ${expandedSections.interview ? styles.examToggleActive : ''}`}>
            {expandedSections.interview ? '−' : '+'}
          </div>
        </div>
        {expandedSections.interview && (
          <div className={styles.examSectionContent}>
            <p className={styles.examParagraph}>学生&家长面试常见问题、面试技巧礼仪、模拟面试流程。课程专为个人设计，运用英文、普通话及广东话授课，重点培训学生的常识推理、情境应变、语言的组织及表达能力、聆听指令，有层次及系统地表达不同演说的故事、面试时应有的礼仪及作答的态度等。</p>
            <p className={styles.examParagraph}>老师会利用轻松，深入浅出的方法，提升学生的面试技巧及增加自信心。专门针对应考学校的面试模式和学生的学习步伐进行调整及配合，作出个别指导，有效提升自信心、面试礼仪、个人应对技巧和学术水准等，学童能在短期内有明显改善，每堂课后有课堂回馈</p>
          </div>
        )}
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对小一申请有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </div>
  );

  // 中一申请对应的内容和材料
  const primarySixContent = (
    <>
   
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对升中面试有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </>
  );

  // 课程内容对应的内容
  const transferContent = (
    <div className={styles.examContainer}>
      {/* 课程特色部分 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('feature')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.feature ? styles.examIconActive : ''}`}>●</span>
            课程特色
          </div>
          <div className={`${styles.examToggle} ${expandedSections.feature ? styles.examToggleActive : ''}`}>
            {expandedSections.feature ? '−' : '+'}
          </div>
        </div>
        {expandedSections.feature && (
          <div className={styles.examSectionContent}>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>60分钟课时：时间充足，学生吸收更多</li>
              <li className={styles.featureItem}>操练及分析：清晰的目标及重点分析，学生更易掌握</li>
              <li className={styles.featureItem}>答题窍门：针对不同题型，教授相应答题技巧</li>
              <li className={styles.featureItem}>因材施教：根据弱项加强操练，协助学生积极应试</li>
              <li className={styles.featureItem}>重点讲解：选取重点作试题分析，指出学生常犯错误</li>
            </ul>
          </div>
        )}
      </div>

      {/* 教学与练习并重部分 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('teaching')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.teaching ? styles.examIconActive : ''}`}>●</span>
            教学与练习并重
          </div>
          <div className={`${styles.examToggle} ${expandedSections.teaching ? styles.examToggleActive : ''}`}>
            {expandedSections.teaching ? '−' : '+'}
          </div>
        </div>
        {expandedSections.teaching && (
          <div className={styles.examSectionContent}>
            <p className={styles.examParagraph}>课堂上先讨论相关知识点课题，教导学生相应的答题技巧及掌握得分策略。课后布置功课给学生练习，完成后老师会在批改试卷同时作重点分析解说，让学生面对不同试题亦能轻松面对。</p>
          </div>
        )}
      </div>

      {/* 量身定制香港名师授课部分 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('teachers')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.teachers ? styles.examIconActive : ''}`}>●</span>
            量身定制香港名师授课
          </div>
          <div className={`${styles.examToggle} ${expandedSections.teachers ? styles.examToggleActive : ''}`}>
            {expandedSections.teachers ? '−' : '+'}
          </div>
        </div>
        {expandedSections.teachers && (
          <div className={styles.examSectionContent}>
            <p className={styles.examParagraph}>上课模式：线上Zoom，一对一或小组班</p>
            <p className={styles.examParagraph}>课时安排：每科10课时，每堂课1小时，自选科目（第一次呈分试关乎学生banding，中英数占比9倍）</p>
          </div>
        )}
      </div>

      {/* 各科授课内容部分 */}
      <div className={styles.examSection}>
        <div 
          className={styles.examSectionHeader} 
          onClick={() => toggleSection('subjects')}
        >
          <div className={styles.examSectionTitle}>
            <span className={`${styles.examIcon} ${expandedSections.subjects ? styles.examIconActive : ''}`}>●</span>
            各科授课内容
          </div>
          <div className={`${styles.examToggle} ${expandedSections.subjects ? styles.examToggleActive : ''}`}>
            {expandedSections.subjects ? '−' : '+'}
          </div>
        </div>
        {expandedSections.subjects && (
          <div className={styles.examSectionContent}>
            <div className={styles.subjectsTable}>
              <div className={styles.subjectRow}>
                <div className={styles.subjectName}>中文</div>
                <div className={styles.subjectContent}>阅读理解、标点、排句成段、重组句子、段意理解、词义辨识</div>
              </div>
              <div className={styles.subjectRow}>
                <div className={styles.subjectName}>数学</div>
                <div className={styles.subjectContent}>分数混合计算及乘法、代数符号、小数加减、分数四则、简易方程</div>
              </div>
              <div className={styles.subjectRow}>
                <div className={styles.subjectName}>英文</div>
                <div className={styles.subjectContent}>阅读理解、时态、重点生词、介词、句子结构、写作</div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对我们的课程有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </div>
  );

  // 小一叩门班对应的内容和材料
  const transfer2Content = (
    <div className={styles.examContainer}>
      {/* 学生信息表格 */}
      <div style={{ marginBottom: '30px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ width: '150px', padding: '12px', borderRight: '1px solid #f0f0f0', color: '#467238', fontWeight: 'bold' }}>适合学生</td>
              <td style={{ padding: '12px', color: '#555' }}>在港或非在港读书的幼稚园升小学学生。</td>
            </tr>
            <tr>
              <td style={{ width: '150px', padding: '12px', borderRight: '1px solid #f0f0f0', color: '#467238', fontWeight: 'bold' }}>学校面试时间</td>
              <td style={{ padding: '12px', color: '#555' }}>直资私立学校预计9-11月面试，官津学校6月份叩门</td>
            </tr>
            <tr>
              <td style={{ width: '150px', padding: '12px', borderRight: '1px solid #f0f0f0', color: '#467238', fontWeight: 'bold' }}>课堂形式</td>
              <td style={{ padding: '12px', color: '#555' }}>网络视频课，一对一</td>
            </tr>
            <tr>
              <td style={{ width: '150px', padding: '12px', borderRight: '1px solid #f0f0f0', color: '#467238', fontWeight: 'bold' }}>课程时间安排</td>
              <td style={{ padding: '12px', color: '#555' }}>该课程合计8堂课，每堂课1小时</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 课程特色部分 */}
      <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#467238', fontWeight: 'bold', fontSize: '16px' }}>
          <span style={{ marginRight: '8px' }}>✓</span>
          课程特色：
        </div>
        <p style={{ marginBottom: '15px', lineHeight: '1.6', color: '#555', paddingLeft: '25px' }}>
          一对一课程，紧贴香港热门小学面试模式/题型多个不同的学习范畴，重点培训学生的常识推理情境应变/语言组织表达能力；聆听指令，面试礼仪及作答态度等。利用深入浅出的方法，提升学生的面试技巧及增加自信心。每堂课设有香港名师课堂反馈，真实了解学生程度。
        </p>
      </div>

      {/* 教学与练习并重部分 */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#467238', fontWeight: 'bold', fontSize: '16px' }}>
          <span style={{ marginRight: '8px' }}>✓</span>
          教学与练习并重：
        </div>
        <ul style={{ paddingLeft: '25px', margin: '0' }}>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            中、英、数等学术题
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            面试谈吐及礼仪
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            个人及家庭问题
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            情景对话，模拟面试
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            常识时事题
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            逻辑思维及理解力训练
          </li>
          <li style={{ marginBottom: '10px', lineHeight: '1.6', color: '#555', listStyle: 'none', position: 'relative', paddingLeft: '20px' }}>
            <span style={{ position: 'absolute', left: '0', color: '#467238' }}>◆</span>
            故事排列，图片描述，讲故事
          </li>
        </ul>
      </div>

      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对小一叩门班有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* 标签栏 */}
      <div className={styles.tabBar}>
        <div 
          className={`${styles.tabItem} ${activeTab === 0? styles.activeTab : ""}`}
          onClick={() => setActiveTab(0)}
        >
          国际学校入学试特训班
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 1? styles.activeTab : ""}`}
          onClick={() => setActiveTab(1)}
        >
          升中面试班
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 2? styles.activeTab : ""}`}
          onClick={() => setActiveTab(2)}
        >
          呈分试补习
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 3? styles.activeTab : ""}`}
          onClick={() => setActiveTab(3)}
        >
          小一叩门班
        </div>
      </div>

      {/* 内容显示区域 */}
      <div className={styles.contentWrapper}>
        {activeTab === 0 && primaryOneContent}
        {activeTab === 1 && primarySixContent}
        {activeTab === 2 && transferContent}
        {activeTab === 3 && transfer2Content}
      </div>
    </div>
  );
};

export default AdmissionGuide;