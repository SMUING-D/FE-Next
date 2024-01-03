'use client';

type FormErrorProps = {
  message: React.ReactNode;
};

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-500">
      {message}
    </div>
  );
};

export default FormError;
