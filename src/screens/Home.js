import { Button, Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default function Home() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "15px",
                }}
              >
                Here go the small market charts
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "15px",
                }}
              >
                Here goes the xxl chart
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "15px",
                }}
              >
                Here goes a small sector chart
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "15px",
                }}
              >
                Here goes yet one more chart
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            style={{
              height: "100%",
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "15px",
            }}
          >
            News for everyone
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
