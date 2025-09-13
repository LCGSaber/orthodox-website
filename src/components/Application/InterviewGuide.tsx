import React from "react";
import styles from "src/styles/applications/InterviewGuide.module.css";

const InterviewGuide: React.FC = () => {
  // 面试攻略内容数据，按类别分组
  const interviewContent = [
    {
      title: "I Personal Identification",
      questions: [
        "1. Introduce yourself in one minute. 请用一分钟作自我介绍。",
        "2. Briefly tell me who you are. 请简单介绍一下你自己。",
        "3. What is your strength? 你有什麼强项？",
        "4. Do you have any special talents? 你有什麼特别技能吗？",
        "5. Do you have any weakness? 你有缺点吗？",
        "6. How do your friends usually describe you? 你的朋友通常会如何形容你？",
        "7. Is there anything you have always wanted so badly? 你有非常想要的东西吗？",
        "8. Use three words to describe yourself. And explain why. 请用三个词语形容自己，并解释为什么。",
        "9. Do you prefer working as a team to working individually. Why? 你喜欢与别人合作还是独立工作？为什麼？",
      ],
    },
    {
      title: " II Interests/hoobies & Talents",
      questions: [
        "1. Do you have any interests/hobbies?/ What hobbies do you enjoy? 你有什么兴趣/爱好吗？/ 你有什么爱好吗？",
        "2. Do you enjoy reading? And what kind of book do you like? 你喜欢阅读吗？/ 喜欢什么类型的书籍？",
        "3. Can you introduce me a book? 可以介绍一本书给我吗？",
        "4. Are you good at anything?/ What are you good at? 你擅长什么？",
        "5. Do you like sports more than music? 比起音乐，你更喜欢运动吗？",
        "6. Do you play any instruments? 你演奏任何乐器吗？",
        "7. Tell me what you usually do at leisure. 请告诉我，你闲暇时一般做什么？",
        "8. What books have you read in your free time during the past six months? 最近六个月，你读了什么书吗？",
        "9. Please describe your interest in music/sports/art/other. 请简述你在音乐/运动/艺术/或其他方面的兴趣。",
        "10. Describe an accomplishment of which you are very proud. 请简述让你自己感到非常自豪的成就。",
      ],
    },
    {
        title: " Ⅲ Current School Life",
        questions: [
          "1. Do you like your primary school?/How do you like your primary school? 你喜欢你的小学吗？",
          "2. What do you usually do during recess? 休息时，你通常会做些什麽呢",
          "3. Do you have a lot of friends at school? What do you do together? 你在学校朋友多吗？你和朋友一起会做什么？",
          "4. Are you good at studies? 你擅长读书吗？",
          "5. Have you ever represented your school in any competitions before? 你曾代表学校参加比赛吗？",
          "6. Which subject do you like most? Why? 你最喜欢的科目是什麽？为什麽？",
          "7. Which subjuct do you enjoy least? Why? 你最不喜欢什么科目？为什么？",
          "8. Do you focus more on your studies than ECAs? 你专注于学习多于课外活动吗？",
          "9. What is your favorite activity? 你最喜欢的活动是什么？",
          "10. Is it stressful to study in your current primary school? Why/Why not? 在你现时的小学读书压力大吗？为什麽？",
          "11. Who is your favorite teacher? Why? 你最喜欢的老师是谁？为什麽？",
          "12. Tell me one thing that you dislike about your primary school? 请说出一项你对就读小学不满意的地方？",
          "13. Do you have any questions to ask me regarding our school? 你有关于本校的问题想问吗？",
        ],
      },
      {
        title: "Ⅳ Family",
        questions: [
          "1. Can you tell me about your family?/ Introduce your family briefly. 可以向我讲一下你的家庭吗？/简单介绍一下你的家庭。",
          "2. What does your parent do? 你父母是做什么的？",
          "3. How does your parent communicate with you? 你父母如何与你沟通？",
          "4. What are your regular responsibilities around the house? 你在家中的日常责任是什么？",
          "5. What is your role in your family? 你在家中是什么角色？",
          "6. How does your family spend the weekens/holidays? 你们家庭如何度过周末/假期？",
          "7. Who do you like most in your family? Why? 在家中，你最喜欢谁？为什么？",
          "8. Describe how does your parent support your learning/interests. 请简述你父母如何支持你的学习/兴趣？",
          "9. What makes you happy/unhappy in your family? 在家中，什么事情让你开心/不开心？",
          "10. What do you like about your family? 你喜欢你们家的什么？",
        ],
      },
    // 可继续添加更多类别...
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>面试攻略</h1>
      {interviewContent.map((category, index) => (
        <section key={index} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>
          <ol className={styles.questionList}>
            {category.questions.map((question, qIndex) => (
              <li key={qIndex} className={styles.questionItem}>
                {question}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
};

export default InterviewGuide;