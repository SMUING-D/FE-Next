const JOB_POST_DETAIL = {
  jobId: 1,
  title: '취업에 대한 썰 푼다',
  content: '카카오는 이렇더라',
  companyScale: 'middle',
  userName: '박선균',
  jobImageDtoList: [
    {
      communityId: 1,
      communityImagePath:
        ' https://images.unsplash.com/photo-1705600196560-9e58cc3e18f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      communityId: 2,
      communityImagePath:
        'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  commentList: [
    {
      id: 1,
      stars: 5,
      content: '최고에요요',
      communityId: 1,
      createdAt: '2023-07-10 03:41:57',
      updatedAt: '2023-07-10 03:41:57',
      userDto: {
        userName: '박선균',
        profile:
          'https://images.unsplash.com/photo-1705597428401-7bce09833837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D' // 예시
      },
      commentReplyList: [
        {
          id: 2,
          stars: 5,
          content: '최고에요요',
          communityId: 1,
          createdAt: '2023-07-10 03:41:57',
          updatedAt: '2023-07-10 03:41:57',
          userDto: {
            userName: '박선균',
            profile:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D' // 예시
          }
        },
        {
          id: 2,
          stars: 5,
          content: '최고에요요',
          communityId: 1,
          createdAt: '2023-07-10 03:41:57',
          updatedAt: '2023-07-10 03:41:57',
          userDto: {
            userName: '박선균',
            profile:
              'https://images.unsplash.com/photo-1705610437737-0854df4c4408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D' // 예시
          }
        }
      ]
    }
  ]
};

const JOB_POSTS = {
  jobListDto: [
    {
      jobDto: {
        jobId: 1,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 2,
        title: '취업에 대한 썰 푼다2',
        content: '현대는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-03'
      }
    },
    {
      jobDto: {
        jobId: 3,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 4,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 5,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 6,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 7,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 8,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 9,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 10,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 11,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 12,
        title: '취업에 대한 썰 푼다2',
        content: '현대는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-03'
      }
    },
    {
      jobDto: {
        jobId: 13,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 14,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 15,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 16,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 17,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 18,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 19,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 20,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 21,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 22,
        title: '취업에 대한 썰 푼다2',
        content: '현대는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-03'
      }
    },
    {
      jobDto: {
        jobId: 23,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 24,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 25,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 26,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 27,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 28,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 29,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 30,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 31,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 32,
        title: '취업에 대한 썰 푼다2',
        content: '현대는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-03'
      }
    },
    {
      jobDto: {
        jobId: 33,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 34,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 35,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 36,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 37,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 38,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 39,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 40,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 51,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 52,
        title: '취업에 대한 썰 푼다2',
        content: '현대는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-03'
      }
    },
    {
      jobDto: {
        jobId: 53,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 54,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 55,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 56,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 57,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 58,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 59,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    },
    {
      jobDto: {
        jobId: 60,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        companyScale: 'middle',
        userName: '박선균',
        jobImageDtoList: [
          {
            communityId: 1,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            communityId: 2,
            communityImagePath:
              'https://images.unsplash.com/photo-1705622445363-7636870b9e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'
          }
        ],
        updatedAt: '2020-02-02'
      }
    }
  ]
};

export { JOB_POST_DETAIL, JOB_POSTS };
