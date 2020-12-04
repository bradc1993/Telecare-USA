import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const AppsPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image
              alt="Virtual Healthcare for you"
              filename="apps-panel-image.png"
            />
          </div>
        </Grid>
      </Hidden>

      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          Increased Net Income - More than CCM
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          There's never been a better time to get started. Medicare providers
          can qualify for an extra $100 per patient, per month (minimum) just
          for implementing a remote patient monitoring program. The average is
          even higher at $148 per patient, per month - with no additonal
          physician time.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          // endIcon={<ArrowDownwardIcon />}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  )
}
export default AppsPanel
