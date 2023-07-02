import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Spinner from "../../ui/Spinner";
const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <Spinner />}
    </ButtonIcon>
  );
};

export default Logout;
