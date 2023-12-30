'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaBook, FaPaintBrush } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { IoSettings } from 'react-icons/io5';
import { PiPresentationChartFill } from 'react-icons/pi';

import CategoryBox from './CategoryBox';
import Container from './Container';

export const categories = [
  {
    name: '인문사회과학대학',
    label: 'College of Humanities and Social Sciences',
    alias: 'CHSS',
    icon: FaBook,
    description: '인문사회과학대학과 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '사범대학',
    label: 'College of Education',
    alias: 'COE',
    icon: GiTeacher,
    description: '사범대학에 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '경영경제대학',
    label: 'College of Business & Economics',
    alias: 'COBE',
    icon: PiPresentationChartFill,
    description: '경영경제대학 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '융합공과대학',
    label: 'College of Convergence Engineering',
    alias: 'COCE',
    icon: IoSettings,
    description: '융합공과대학과 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '문화예술대학',
    label: 'College of Culture and Arts',
    alias: 'COCA',
    icon: FaPaintBrush,
    description: '문화예술대학과 관련된 정보가 담겨져 있습니다!'
  }
];

const Categories = () => {
  const params = useSearchParams();
  // /?category=${alias} 방식으로 감.
  const category = params?.get('category');
  // / -> /경로, /home -> /home 이런식으로 따옴.
  const pathname = usePathname();
  // 그럼 즉, mainpage는? pathname === '/'와 동일
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            selected={category === item.alias}
            label={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
