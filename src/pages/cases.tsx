import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight } from 'src/components/Svg/Icon';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from '../styles/cases.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FadeUp } from 'src/components/FadeUp';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cases'])),
    },
  };
};

interface ContentItem {
  title: string;
  text: string;
}

interface CaseData {
  id: number;
  title: string;
  student: string;
  content: ContentItem[];
  icon: React.ReactNode;
  school: string;
  year: string;
  image: string;
  category: string;
}

interface CaseStudyProps extends CaseData {}

interface Filter {
  id: 'all' | 'international' | 'local' | 'university';
  label: string;
}

const CaseStudy = ({ title, student, content, icon, school, year, image, id, category }: CaseStudyProps) => {
  return (
    <FadeUp delay={0.2}>
      <div className={styles.caseCard}>
        <div className={styles.caseImage} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.caseIcon}>{icon}</div>
        </div>
        <div className={styles.caseContent}>
          <div className={styles.caseHeader}>
            <h3 className={styles.caseTitle}>{title}</h3>
            <div className={styles.caseMeta}>
              <span className={styles.studentName}>{student}</span>
              <span className={styles.caseYear}>{year}</span>
            </div>
          </div>
          <div className={styles.caseDetails}>
            <div className={styles.detailItem}>
              <div className="map-pin-icon"></div>
              <span>{school}</span>
            </div>
          </div>
          <div className={styles.caseBody}>
            {content.map((item: ContentItem, index: number) => (
              <div key={index} className={styles.contentItem}>
                <div className={styles.contentTitle}>{item.title}</div>
                <div className={styles.contentText}>{item.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.caseFooter}>
            <Link href="/assessment" className={styles.viewMoreButton}>
              <span>查看详情</span>
              <img src="/home/arrow-right.svg" alt="Arrow Right" width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};

const CasesPage = () => {
  const { t } = useTranslation('cases');
  const [activeFilter, setActiveFilter] = useState<Filter['id']>('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cases: CaseData[] = [
    {
      id: 1,
      title: '香港国际学校录取案例',
      student: 'CHRISTY TANG',
      school: '汉基国际学校',
      year: '2023年',
      icon: <img src="/home/book-alt.svg" alt="Book" width={24} height={24} />,
      image: '/images/book.jpg',
      category: 'international',
      content: [
        {
          title: '案例概况',
          text: '学生来自内地公立学校国际班，品学兼优，英语能力尤为突出，热爱绘画及音乐，在各项表演比赛中屡屡获得嘉奖。'
        },
        {
          title: '转学来港',
          text: '在Christy完成初一上学期学业后，她的父母萌生了让孩子前往更大更好平台发展的意愿，并联系我们，很快达成了合作共识。'
        },
        {
          title: '平稳过渡',
          text: '在Christy的第一学年申请中，正心教育结合学生的性格和特点，为其顺利申请多所学校，并最终被汉江维多利亚学校录取。正式揭开其在香港的求学之旅。'
        },
        {
          title: '百尺竿头',
          text: '汉江维多利亚学校为学生配备完善的融入及适应项目，Christy非常快的就融入了香港的生活和学习，并且她在学习中展现出来的勤勉和投入受到了老师广泛的好评。'
        },
        {
          title: '入读美基',
          text: '在Christy即将完成在港第一年学习的时候，正心教育协助她开展了转学的申请，并成功获得了美基国际学校的录取。目前Christy在美基国际学校就读11年级并和我们成为了非常好的朋友。'
        }
      ]
    },
    {
      id: 2,
      title: '香港本地名校录取案例',
      student: 'LEAH LEUNG',
      school: '香港大学',
      year: '2022年',
      icon: <img src="/home/hat-alt.svg" alt="Graduation Cap" width={24} height={24} />,
      image: '/images/school.jpg',
      category: 'local',
      content: [
        {
          title: '求学之旅',
          text: 'Leah先前就读国内公立中学，在完成初中二年级学习之后转学来到香港，在正心教育的辅导和协助下顺利升入培正中学，并在刚刚结束的香港中学文凭试中获得优异成绩，成功获得香港大学录取。'
        },
        {
          title: '转学来港',
          text: 'Leah在完成初二学习后，选择转学来到香港继续她的学习，并在第一年成绩就很优异。'
        },
        {
          title: '正式入学',
          text: '在Leah完成第一年的学习后，我们开始协助她申请转学，并成功获得传统名校培正中学的录取。'
        },
        {
          title: '稳步提升',
          text: '在培正求学的两年时间里，我们除了在学业上提供帮助外，也和她一起寻找她感兴趣的学业方向。在刚刚结束的香港中学文凭试中Leah在超过六万多名考生中位列180名，并且在我们的协助下申请了香港大学的计量金融专业。'
        }
      ]
    }
  ];

  const filters: Filter[] = [
    { id: 'all', label: '全部案例' },
    { id: 'international', label: '国际学校' },
    { id: 'local', label: '本地学校' },
    { id: 'university', label: '大学申请' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === activeFilter);

  return (
    <div className={styles.container}>
      <Header className={isScrolled ? styles.headerScrolled : ''} />
      
      {/* 页面标题区域 */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <FadeUp>
            <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
            <p className={styles.pageSubtitle}>{t('pageSubtitle')}</p>
            <div className={styles.heroBorder}></div>
          </FadeUp>
        </div>
      </section>

      {/* 案例过滤区域 */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterTab} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示区域 */}
      <section className={styles.casesSection}>
        <div className={styles.casesContainer}>
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <CaseStudy
                key={caseItem.id}
                id={caseItem.id}
                title={caseItem.title}
                student={caseItem.student}
                content={caseItem.content}
                icon={caseItem.icon}
                school={caseItem.school}
                year={caseItem.year}
                image={caseItem.image}
                category={caseItem.category}
              />
            ))
          ) : (
            <div className={styles.noCases}>
              <p>暂无相关案例</p>
            </div>
          )}
        </div>
      </section>

      {/* 咨询区域 */}
      <section className={styles.consultationSection}>
        <div className={styles.consultationContainer}>
          <FadeUp>
            <h2 className={styles.consultationTitle}>{t('consultationTitle')}</h2>
            <p className={styles.consultationText}>{t('consultationText')}</p>
            <Link href="/contact" className={styles.consultationButton}>
              <span>{t('contactButton')}</span>
              <IconArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer textColor="white" />
    </div>
  );
};

export default CasesPage;