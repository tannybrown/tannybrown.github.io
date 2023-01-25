module.exports = {
  title: `Tanny's Labatory`,
  description: `태니의 연구실`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://tannybrown.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김태환`,
    bio: {
      role: `개발자`,
      description: ['작곡가이자', '사유의 가치를 아는', '사람에 가치를 두는'],
      thumbnail: 'ai.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/tannybrown`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `w29805@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.03',
        activity: '한양대학교 서울캠퍼스 컴퓨터 소프트웨어학부 입학',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '자기소개 페이지 개발',
        description:
          '웹개발을 시작하며 공부한 바닐라 자바스크립트를 이용해 자기소개 페이지를 제작하였습니다.',
        techStack: ['html',"css",'javascript'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '',
          github: '',
          demo: 'http://iot_track.kdt-gitlab.elice.io/class_01/web_project/team6/intro_taehwan',
        },
      },
    ],
  },
};
