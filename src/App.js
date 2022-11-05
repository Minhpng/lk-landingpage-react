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
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false)
  const [isExercisePopupOpen, setExercisePopupOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState({
    isVideoModal: false,
    isExerciseModal: false,
    isLoginModal: false,
  })

  // const isModalOpen = isVideoPopupOpen || isExercisePopupOpen

  useEffect(() => {
    const body = document.querySelector('body')

    if (isVideoPopupOpen || isExercisePopupOpen) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'auto'
    }
  })

  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection />
      {
        isModalOpen &&
        (<Modal>
          {isVideoPopupOpen && <VideoModal />}
          {isExercisePopupOpen && <ExerciseModal />}
        </Modal>)
      }

      <GiftSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
