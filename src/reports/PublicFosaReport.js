import { Grid } from "@material-ui/core";
import { PublishedComponent } from "@openimis/fe-core";
import React from "react";
import { injectIntl } from "react-intl";
import { useSelector } from "react-redux";

const PublicFosaReport = (props) => {
  const { values, setValues } = props;
  const userHealthFacility = useSelector((state) => state.loc.userHealthFacilityFullPath);

  if (userHealthFacility?.code) {
    values.hflocation = userHealthFacility
  };

  const onHealtFacilityChange = (hflocation)=>{
      setValues({...values, hflocation})
  }
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <PublishedComponent
          pubRef="location.HealthFacilityPicker"
          district={values.district}
          onChange={(hflocation) =>
            onHealtFacilityChange(hflocation)
          }
          value={userHealthFacility?.code ? userHealthFacility.code : values.hflocation}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.MonthYearPicker"
          value={values.dateFrom}
          module="Comores"
          required
          label="Comores.dateFrom"
          onChange={(dateFrom) => setValues({ ...values, dateFrom })}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.MonthYearPicker"
          value={values.dateTo}
          module="Comores"
          required
          label="Comores.dateTo"
          onChange={(dateTo) => setValues({ ...values, dateTo })}
        />
      </Grid>
    </Grid>
  );
};


export default injectIntl(PublicFosaReport);
