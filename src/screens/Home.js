import { Button, Card, CardContent, Typography } from "@material-ui/core";
import "../App.css";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Card>
          <CardContent>
            <Typography>Ciao</Typography>
          </CardContent>
      </Card>
      <p>This is Home</p>
      <Button variant="contained" color="primary">
        Test
      </Button>
    </div>
  );
}
