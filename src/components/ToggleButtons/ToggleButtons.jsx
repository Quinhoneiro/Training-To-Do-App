import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { connect } from "react-redux";
import { changeViewTaskList } from "../../store/actions/application";

function VerticalToggleButtons(props) {
  const { createActionChangeView } = props;
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    !nextView ? setView("list") : setView(nextView);
  };

  React.useEffect(() => {
    createActionChangeView(view);
  }, [view]);

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    createActionChangeView(newView) {
      const action = changeViewTaskList(newView);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerticalToggleButtons);
