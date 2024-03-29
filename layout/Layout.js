import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Modal from 'react-modal';
import useFoodProvider from "../hooks/useFoodProvider";
import ModalProduct from "../components/ModalProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Steps from "../components/Steps";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#__next');


export default function Layout ({children, page}) {

    const {isSelectedProductModalActive} = useFoodProvider()

    return (
        <>
            <Head>
                <title>{`Coffee - ${page}`}</title>
                <meta name="description" content="Food service App" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        <Steps />
                        {children}
                    </div>
                </main>
            </div>

            {isSelectedProductModalActive && (
                <Modal 
                    isOpen={isSelectedProductModalActive}
                    style={customStyles}>
                        <ModalProduct />
                </Modal>
            )}

            <ToastContainer />
        </>
    )
}