import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: JSX.Element;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalRootElement = document.getElementById(
    "modal-root"
  ) as HTMLDivElement;

  return ReactDOM.createPortal(children, modalRootElement);
};

export default ModalPortal;
