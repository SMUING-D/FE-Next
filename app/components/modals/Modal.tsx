'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import Button from '../Button';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  // 1. zustand에서 관리하는 isOpen을 통해, 모달이 켜졌는지 꺼졌는지 관리
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // 2. zustand에서 관리하는 onClose를 통해, 모달을 끄게하고, disabled 상태일떄는 버튼이 안눌리게
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    // 모달이 닫히고, 열리는거 애니메이션을 주기위해 3초간 setTimeout설정
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 bg-neutral-600/70 z-50 focus:outline-none">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6 my-6 mx-auto h-full lg:h-auto md:h-auto max-h-screen">
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div className="flex items-center p-6 rounded-6 justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 absolute left-9 hover:opacity-70 transition dark:text-stone-900"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold dark:text-stone-900">{title}</div>
              </div>
              {/* BODY */}
              <div className="relative p-6 dark:text-stone-900">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full dark:text-stone-900">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
