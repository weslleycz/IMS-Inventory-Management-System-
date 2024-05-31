import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  // const [localIP, setLocalIP] = useState("");

  // useEffect(() => {
  //   getLocalIP()
  //     .then((ip:any) => setLocalIP(ip))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      {/* {localIP ? <p>{localIP}</p> : <p>Obtendo IP...</p>} */}
      <Box sx={{ height: "100vh" }}>{children}</Box>
    </>
  );
};
