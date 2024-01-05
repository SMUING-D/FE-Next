import toast from 'react-hot-toast';

const copyURL = () => {
  const currentUrl = window.document.location.href;
  const t = document.createElement('textarea');
  document.body.appendChild(t);
  t.value = currentUrl;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);

  toast('링크가 복사되었습니다.');
};

export default copyURL;
