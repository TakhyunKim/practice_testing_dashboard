import ModalPortal from "..";

import { ModalContainerBackground } from "./ModalContainer.styled";

interface ModalContainerProps {
  children: JSX.Element;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <ModalPortal>
      <ModalContainerBackground>{children}</ModalContainerBackground>
    </ModalPortal>
  );
};

export default ModalContainer;
