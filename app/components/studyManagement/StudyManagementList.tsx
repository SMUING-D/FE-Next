import StudyManament from './StudyManament';
import STUDY_TEST_DATA from './data';

const StudyManagementList = () => {
  return (
    <div className="flex flex-col gap-5">
      {STUDY_TEST_DATA.map((study) => (
        <StudyManament studyData={study} key={study.id} />
      ))}
    </div>
  );
};

export default StudyManagementList;
