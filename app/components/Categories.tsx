'use client';

import { usePathname } from 'next/navigation';
import { FaBook, FaHome, FaPaintBrush } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { IoSettings } from 'react-icons/io5';
import { PiPresentationChartFill } from 'react-icons/pi';

import CategoryBox from './CategoryBox';
import Container from './Container';

export const categories = [
  {
    name: '홈',
    label: 'ALL',
    alias: '/',
    icon: FaHome,
    description: '전체 글에 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '인문사회과학대학',
    label: 'College of Humanities and Social Sciences',
    alias: '/chss',
    icon: FaBook,
    description: '인문사회과학대학과 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '사범대학',
    label: 'College of Education',
    alias: '/coe',
    icon: GiTeacher,
    description: '사범대학에 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '경영경제대학',
    label: 'College of Business & Economics',
    alias: '/cobe',
    icon: PiPresentationChartFill,
    description: '경영경제대학 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '융합공과대학',
    label: 'College of Convergence Engineering',
    alias: '/coce',
    icon: IoSettings,
    description: '융합공과대학과 관련된 정보가 담겨져 있습니다!'
  },
  {
    name: '문화예술대학',
    label: 'College of Culture and Arts',
    alias: '/coca',
    icon: FaPaintBrush,
    description: '문화예술대학과 관련된 정보가 담겨져 있습니다!'
  }
];

const Categories = () => {
  const pathname = usePathname();

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map(({ label, alias, name, icon }) => (
          <CategoryBox
            key={label}
            selected={pathname === `${alias}`}
            label={name}
            alias={alias}
            icon={icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
