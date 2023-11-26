import { Modal, Switch } from "antd";
import React, { useState } from "react";
import { InfoIcon, PowerIcon } from "@/components/icons";
import Optic from "@/components/Optic";
import { useQuestionStore } from "@/features/store/questionStore";

const Aside = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const { setShowAnswers, showAnswers } = useQuestionStore();
  return (
    <aside className="w-96 min-w-full pr-8">
      <div className="flex items-center justify-between mt-20 mb-3 gap-2">
        <div className="bg-[#EDF2F4] w-8/12 font-semibold flex items-center justify-between gap-2 p-3.5 rounded-md text-xs">
          <p>Cevapları Göster</p>
          <Switch
            className="bg-slate-400"
            defaultChecked={showAnswers}
            onChange={(value) => setShowAnswers(value)}
          />
        </div>
        <button
          onClick={showModal}
          className="flex w-1/3 items-center  gap-2 p-2 rounded-md bg-[#F7D54C] text-xs"
        >
          <PowerIcon />
          Testi Bitir
        </button>
      </div>
      <Optic />
      <Modal open={isModalOpen} onCancel={modalClose} footer={null}>
        <div className="flex  flex-col items-center gap-2">
          <InfoIcon />
          <h2 className="text-2xl text-[#2C3E50] font-bold">
            Ayrılmak istediğine emin misin?
          </h2>
        </div>
        <div className="text-center my-4">
          <p>
            Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam
            edebilirsin.
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={modalClose}
            className="w-1/2 py-2 bg-[#EDF2F4] rounded-md text-[#2C3E50] font-semibold"
          >
            Vazgeç
          </button>
          <button
            onClick={modalClose}
            className="w-1/2 py-2 bg-[#DE4747] rounded-md text-white font-semibold"
          >
            Testi Bitir
          </button>
        </div>
      </Modal>
    </aside>
  );
};

export default Aside;
