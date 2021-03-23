import { Button, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import "../App.css";

export default function Home() {
  return (
    <div className="App">
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
