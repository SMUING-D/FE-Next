//id, title, description, category, likes, comments, createdAt, imageSrc
const postData = [
  {
    id: 1,
    title: '글로벌 시대의 언어 지원: i18n 다국어 처리',
    description:
      '예를 들어, React 프레임워크에서는 react-i18next 같은 라이브러리들이 사용됩니다. 이들 라이브러리를 통해 개발자들은 각 언어별로 별도의 JSON 파일을 생성하고, react-i18next같은 경우 useTranslation훅을 사용하여 현재 선택된 언어로 애플리케이션 내의 문구를 적절히 번역할 수 있습니다. 이런 방식으로, 애플리케이션은 다국어 지원을 통해 전 세계 사용자들에게 보다 친숙하고 접근하기 쉬운 서비스를 제공할 수 있게 됩니다.',
    category: '융합공과대학',
    likes: 4,
    comments: 10,
    createdAt: new Date(),
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: '더 따뜻한 사람 되고 싶습니다.',
    description:
      '2023년 12월 31일이네요. 저는 사진의 자리에 앉아 글을 쓰고 있습니다. 여러분들은 어떻게 마지막 날을 보내고 계시나요? 가족이랑 함께? 연인과? 친구와? 혹은 혼자서? 추운 날에 어딘가로 떠나셨나요? 혹은 원래 있는 그 자리에서? 어떤 방식이든 괜찮겠지요. 한 해, 수고 많으셨습니다. 이번 해가 어떤 의미이든지 간에요. 정말로 수고 많으셨습니다.',
    category: '문화예술대학',
    likes: 4,
    comments: 10,
    createdAt: new Date(),
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: '시장이 된 백종원, 예산 시장 성공을 만든 5가지 요인',
    description:
      '2023년 12월 31일이네요. 저는 사진의 자리에 앉아 글을 쓰고 있습니다. 여러분들은 어떻게 마지막 날을 보내고 계시나요? 가족이랑 함께? 연인과? 친구와? 혹은 혼자서? 추운 날에 어딘가로 떠나셨나요? 혹은 원래 있는 그 자리에서? 어떤 방식이든 괜찮겠지요. 한 해, 수고 많으셨습니다. 이번 해가 어떤 의미이든지 간에요. 정말로 수고 많으셨습니다.',
    category: '경영경제대학',
    likes: 4,
    comments: 10,
    createdAt: new Date(),
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: '16년 전에도 똑같았습니다 (일론 머스크)',
    description: '16년전 일론 인터뷰. 그냥 귀한 자료..',
    category: '사범대학',
    likes: 10,
    comments: 10,
    createdAt: new Date(),
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: '월스트리트 전설의 투자자 피터린치 (2002년 인터뷰)',
    description:
      '피터린치의 2002년 CNBC 인터뷰입니다. 무려 20년 전, 닷컴버블 직후 영상입니다. 영상의 퀄리티가 참 올드합니다. 20년 전이면 아이폰도 없을 시기죠. 그런데 말하는 내용은 지금과 같습니다. 현재와 다른 이벤트들이 넘쳤던 시기지만. 적용되는 진리는 하나이죠. 피터린치가 한 말중에... "사람들은 바뀌지 않고, 과거에도 같은 일이 있었고, 지금도 그렇고, 미래에도 그럴 것이다" 라는 말은 의미심장하게 다가옵니다. 한 문장 한 문장을 곱씹게 되어 스스로에게도 많이 도움이 되는 영상이었습니다. 많은 분들께 도움이 되시길 진심으로 바랍니다. ',
    category: '인문사회과학대학',
    likes: 10,
    comments: 10,
    createdAt: new Date(),
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export { postData };
