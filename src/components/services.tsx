import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "search-doctor-icon.png",
      title: "Blood Pressure Monitoring",
      description:
        "Home monitoring without having to spend thousands buying monitors for patients who have smartphones and those who don't.",
    },
    {
      id: 2,
      image: "online-pharmacy-icon.png",
      title: "Patient Tracking & Alerts",
      description:
        "Patient data will be immediately uploaded into a HIPAA-compliant system so that your clinical staff can be alerted about high or low numbers.",
    },
    {
      id: 3,
      image: "consultation-icon.png",
      title: "Health Management",
      description:
        "Online HIPAA compliant tracking and numbers. Better management for diabetes, hypertension, congestive heart failure and more.",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Our Services</Typography>
        <Bar />
        {/* <Typography variant="subtitle1" style={{ margin: 30 }}>
          RPM services for physician or NPP clinics.
        </Typography> */}
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          How It Works
        </Button>
      </Grid>
    </Grid>
  )
}
export default Services
