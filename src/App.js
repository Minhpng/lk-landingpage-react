import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import GiftSection from "./component/GiftSection";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Modal from "./component/Modal";
import Testimonials from "./component/Testimonials";
import { default as VideoSection } from "./component/VideoSection";

import ExerciseModal from "./component/ExerciseModal";
import VideoModal from "./component/VideoModal";


function App() {
  const [ModalState, setModal] = useState({
    isVideoModal: false,
    isExerciseModal: false,
    isLoginModal: false,
  })


  useEffect(() => {
    const body = document.querySelector('body')

    if (isModalOpen) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'auto'
    }
  })

  const isModalOpen = ModalState && Object.values(ModalState).indexOf(true) >= 0

  const { isVideoModal, isExerciseModal } = ModalState

  console.log(ModalState);

  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection action={setModal} />
      {
        isModalOpen &&
        (<Modal closeModal={setModal}>
          {isVideoModal && <VideoModal />}
          {isExerciseModal && <ExerciseModal />}
        </Modal>)
      }

      <GiftSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
