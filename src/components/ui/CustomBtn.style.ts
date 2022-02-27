import styled from "styled-components";
import { Button } from "@mui/material";

interface BtnInterface {
  readonly green: boolean;
}

const CustomButton = styled(Button)<BtnInterface>`
  background-color: ${(props) => (props.green ? "green" : "pink")};
`;

export default CustomButton;
