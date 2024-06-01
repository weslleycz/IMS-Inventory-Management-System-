import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";
import { ButtonItem } from "../ButtonItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClearIcon from "@mui/icons-material/Clear";
// import SettingsIcon from "@mui/icons-material/Settings";
import { api } from "../../servers/api";

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

  const handleExit = async () => {
    await api.get("/system/exit");
  };

  return (
    <>
      {/* {localIP ? <p>{localIP}</p> : <p>Obtendo IP...</p>} */}
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Box sx={{ height: "100vh" }} bgcolor={"#34fc8e"}>
            <Box paddingTop={3}>
              <ButtonItem
                icon={<DashboardIcon />}
                isActive={true}
                text="Estoque"
              />
              {/* <ButtonItem
                icon={<SettingsIcon />}
                isActive={false}
                text="Configurações"
              /> */}
              <Box onClick={handleExit}>
                <ButtonItem icon={<ClearIcon />} isActive={false} text="Sair" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box bgcolor={"#ffffff"} sx={{ height: "100vh" }}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
